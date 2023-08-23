import settings from "../../config/settings.json";
import { debugLog } from "../../main.js";

const mid_eve = {
    mid: settings.execution.ad_units.midroll,
    mid_tag: "",
    ExMp_VidCurrentLocation: window.location,
    ExMp_VidCurrentLocationEncoded: encodeURIComponent(window.location)
}

export const insert_midroll = (player) => {

    debugLog("Inside Insert Midroll");

    var adsManager = player.ima.getAdsManager();
    if(adsManager != null){
        debugLog("Destroy Previous Ads Manager to add Midroll");
        adsManager.destroy();
        player.ima.controller.sdkImpl.adsLoader.contentComplete();
    }

    analyze_tag(player);
}


const analyze_tag = (player) => {
    if(mid_eve.mid.midroll_type === "google"){
        debugLog("Midroll for Google");
        mid_eve.mid_tag='https://pubads.g.doubleclick.net/gampad/ads?iu='+ mid_eve.mid.midrollAdUnit +
        '&url='+mid_eve.ExMp_VidCurrentLocation+'&description_url='+mid_eve.ExMp_VidCurrentLocationEncoded+
        '&tfcd=0&npa=0&sz=1x1%7C400x300%7C640x360%7C640x480%7C1280x720&gdfp_req=1&output=vast'+
        '&unviewed_position_start=1&env=vp&impl=s&correlator='+settings.script_variables.params_string
    } 
    
    else if (mid_eve.mid.midroll_type === "yahoo"){
        debugLog("Midroll Plays for Yahoo");
        mid_eve.mid_tag = mid_eve.mid.verizon_midroll_tag_url;
    }

    else if (mid_eve.mid.midroll_type === "general_vast"){
        debugLog("Midroll Plays for General Vast Entered");
        mid_eve.mid_tag = mid_eve.mid.midrollAdUnit+settings.script_variables.params_string;
    }

    call_midroll(player);
}

const call_midroll = (player) => {

    debugLog("Call Midroll Finally");

    player.ima.changeAdTag(mid_eve.mid_tag);
    player.ima.requestAds();
    mid_eve.mid.midroll_run = true;
}
