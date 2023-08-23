import settings from "../../config/settings.json";
import { debugLog } from "../../main.js";
import { invokeVideoPlayer } from "../player_start";

const active_bidders = [];

const preb = {
    set: settings.execution.prebid,
    preroll: settings.execution.ad_units.preroll.prerollAdUnit,
    ExMp_VidCurrentLocation: window.location,
    ExMp_VidCurrentLocationEncoded: encodeURIComponent(window.location)
}

export const prebid_exec = () => {
    const bidders_list = preb.set.bidders;
    debugLog("Bidders List: ", bidders_list);

    bidders_list.forEach((bidder) => {
        if(bidder.enabled){
            debugLog("Bidder - A: ", bidder);
            delete bidder['enabled'];
            debugLog("Bidder - B: ", bidder);
            active_bidders.push(bidder);
        }
    });

    debugLog("List of Active Bidders", active_bidders);
    preb_unit(active_bidders)
}

const preb_unit = (bidders_enabled) => {
    const videoAdUnit = [{
        code: 'videoDivPlayer',
        mediaTypes: {
            video: {
                context: 'instream',
                playerSize: [[640,480]],
                mimes: preb.set.video_mime_types,
                api: [2]
            }
        },

        bids: bidders_enabled
    }];

    preb_push(videoAdUnit);
}

const preb_push = (videoAdUnit) => {
    pbjs.que.push(function() {
        pbjs.setConfig(preb.set.config);  

        pbjs.bidderSettings = preb.set.bidderSettings;
       
        pbjs.addAdUnits(videoAdUnit); 

        pbjs.requestBids({
            bidsBackHandler: bidsBackHandler(videoAdUnit),
            timeout: preb.set.requestBidsTimeout
        });
    });
}
    
const bidsBackHandler = (videoAdUnit) => {    
    var videoUrl = pbjs.adServers.dfp.buildVideoUrl({
        adUnit: videoAdUnit,
        url: 'https://pubads.g.doubleclick.net/gampad/ads?iu='+ preb.preroll +
        '&url='+preb.ExMp_VidCurrentLocation+'&description_url='+preb.ExMp_VidCurrentLocationEncoded+
        '&tfcd=0&&gdpr=1&npa=0&sz=1x1%7C400x300%7C640x360%7C640x480%7C1280x720&gdfp_req=1&output=vast'+
        '&unviewed_position_start=1&env=vp&impl=s&correlator='
    });
    invokeVideoPlayer(videoUrl);
        
    setTimeout(() => {
        var responses = pbjs.getBidResponses();
        var output = [];
        for (var adunit in responses) {
            if (responses.hasOwnProperty(adunit)) {
                var bids = responses[adunit].bids;
                for (var i = 0; i < bids.length; i++) {
                    var b = bids[i];
                    output.push({
                    'adunit': adunit, 'adId': b.adId, 'bidder': b.bidder,
                    'time': b.timeToRespond, 'cpm': b.cpm, 'msg': b.statusMessage
                    });
                }
            }
        }

        if (output.length) {
            if (console.table) {
                console.table(output);
                debugLog("highest bids returned", pbjs.getHighestCpmBids());
            } else {
                for (var j = 0; j < output.length; j++) {
                    debugLog(output[j]);
                }
            }
        } 
        else {
            debugLog('No prebid responses');
        }
    }, 5000);
}