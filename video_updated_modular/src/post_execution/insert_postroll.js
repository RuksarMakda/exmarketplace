import settings from "../config/settings.json";
import { debugLog } from "../main.js";
import { player_end_events } from "../execution/player_events";

const post_eve = {
    post: settings.execution.ad_units.postroll,
    p_tag: "",
    ExMp_VidCurrentLocation: window.location,
    ExMp_VidCurrentLocationEncoded: encodeURIComponent(window.location)
}

export const insert_postroll = (player) => {
    var adsManager = player.ima.getAdsManager();
    if(adsManager != null){
        debugLog("Destroy Previous Ads Manager to render Postroll");
        adsManager.destroy();
        player.ima.controller.sdkImpl.adsLoader.contentComplete();
    }

    analyze_postroll(player);
}

const analyze_postroll = (player) => {
    if(post_eve.post.postroll_type === "google"){
        debugLog("Postroll for Google");
        post_eve.p_tag='https://pubads.g.doubleclick.net/gampad/ads?iu='+ post_eve.post.postrollAdUnit +
        '&url='+post_eve.ExMp_VidCurrentLocation+'&description_url='+post_eve.ExMp_VidCurrentLocationEncoded+
        '&tfcd=0&npa=0&sz=1x1%7C400x300%7C640x360%7C640x480%7C1280x720&gdfp_req=1&output=vast'+
        '&unviewed_position_start=1&env=vp&impl=s&correlator='+settings.script_variables.params_string
    } 
    
    else if (post_eve.post.postroll_type === "yahoo"){
        debugLog("Postroll for Yahoo");
        post_eve.p_tag = post_eve.post.verizon_postroll_tag_url;
    }

    else if (post_eve.post.postroll_type === "general_vast"){
        debugLog("Postroll for General Vast Tag");
        post_eve.p_tag = post_eve.post.postrollAdUnit+settings.script_variables.params_string;
    }

    settings.execution.ad_units.postroll.postroll_can_run = false; // to avoid postroll to run again and again on player ended event=
    // debugLog("Postroll is executed - postroll_can_run", settings.execution.ad_units.postroll.postroll_can_run);
    call_postroll(player);
}

const call_postroll = (player) => {
    player.ima.changeAdTag(post_eve.p_tag);
    player.ima.requestAds();

    
    // setTimeout(function() { 
    //     debugLog("postroll fill: ", settings.script_variables.postroll_fill);
    //     debugLog("postroll fill 1: ", settings.execution.ad_units.postroll.postroll_can_run);
    //     if(!settings.script_variables.postroll_fill){
    //         debugLog("Postroll is not filled - postroll_fill", settings.script_variables.postroll_fill);
    //         settings.script_variables.postroll_ended = true;
    //         debugLog("Postroll is not filled and function ended - postroll_ended", settings.script_variables.postroll_ended);
    //     }
    //     if((postroll) && (!settings.script_variables.postroll_fill) && (!settings.execution.ad_units.postroll.postroll_can_run)){
    //         player_end_events(player);
    //     }
    // }, 2000); 
}