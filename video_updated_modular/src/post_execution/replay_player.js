import settings from "../config/settings.json";
import { overlay_2 } from "../execution/overlay_conditions/overlay_2";

const rep_pl = {
    preroll: settings.execution.ad_units.preroll,
    pre_tag: "",
    ExMp_VidCurrentLocation: window.location,
    ExMp_VidCurrentLocationEncoded: encodeURIComponent(window.location)
}

export const replay_player = (player) => {
    document.getElementById('modal').remove();

    var isMobile = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    if(isMobile){ // for ios only
        player.pause();
    }

    player.currentTime(0); // resets player time

    settings.script_variables.pod_called = false;
    settings.script_variables.endedStatus = false; // reverts back video end status
    settings.script_variables.videoEnded = false;
    settings.script_variables.player_overlay_ends = false;
    settings.script_variables.postroll_fill = false;
    settings.script_variables.postroll_ended = false;
    settings.execution.ad_units.postroll.postroll_can_run = true;
    
    console.log("Overlay status: ", overlay_ads_content);
    console.log("Pod called status: ", settings.script_variables.pod_called);

    if(overlay_ads_content){
        console.log("Overlay status: ", overlay_ads_content);
        overlay_2(player);
    }

    setTimeout(function(){
        player.autoplay('muted');
    
        if(preroll){
            replay_ads(player);
        }
    }, 500);
}

const replay_ads = (player) => {
    var adsManager = player.ima.getAdsManager();
    if(adsManager != null){
        adsManager.destroy();
        player.ima.controller.sdkImpl.adsLoader.contentComplete();
    }

    analyze_rep_tag(player);
}

const analyze_rep_tag = (player) => {
    if(rep_pl.preroll.preroll_type === "google"){
        rep_pl.pre_tag = 'https://pubads.g.doubleclick.net/gampad/ads?iu='+ rep_pl.preroll.prerollAdUnit +
        '&url='+rep_pl.ExMp_VidCurrentLocationEncoded+'&description_url='+rep_pl.ExMp_VidCurrentLocationEncoded+
        '&tfcd=0&npa=0&sz=1x1%7C400x300%7C640x360%7C640x480%7C1280x720&gdfp_req=1&output=vast'+
        '&unviewed_position_start=1&env=vp&impl=s&correlator='+settings.script_variables.params_string;
    } 
      
    else if(rep_pl.preroll.preroll_type === "yahoo"){
        rep_pl.pre_tag = rep_pl.preroll.verizon_tag_url;
    }
    
    else if(rep_pl.preroll.preroll_type === "general_vast"){
        rep_pl.pre_tag = rep_pl.preroll.prerollAdUnit+settings.script_variables.params_string;
    }

    insert_new_tag(player);
}

const insert_new_tag = (player) => {
    player.ima.changeAdTag(rep_pl.pre_tag);
    player.ima.requestAds();
}