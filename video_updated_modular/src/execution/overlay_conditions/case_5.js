import { inViewport } from "../../pre_execution/overlay_check";
import settings from "../../config/settings.json";
import { debugLog } from "../../main";

const var_5 = {
    scr_var: settings.script_variables
}

export const case_5 = (player, videoelement, contJWPGW) => {
    if(!inViewport(videoelement, contJWPGW)){
        if((player.ads.isInAdMode()) && (ad_fill_status)){ 
            player.ima.pauseAd(); 
            var_5.scr_var.ad_paused = true; // ad pause status true
            debugLog("Player is in adsmode and not viewport, ad_paused variable", var_5.scr_var.ad_paused);
        }

        else { 
            if(!var_5.scr_var.videoEnded){ // video has not ended yet
                player.pause(); // pause player when no ads mode
                debugLog("Player is not in adsmode and not viewport, videoEnded variable", var_5.scr_var.videoEnded);
                if(player.paused) {
                    var_5.scr_var.vid_paused = true; // video paused status
                    debugLog("Player is not in adsmode and not viewport, vid_paused variable", var_5.scr_var.vid_paused);
                }
            }
        }
    } 
    
    else { // in viewport, revert back normal functioning
        if((player.ads.isInAdMode()) && (ad_fill_status)){  
            if(var_5.scr_var.ad_paused){ // ad paused status that was set above
                player.ima.resumeAd();
                var_5.scr_var.ad_paused = false; // sets to false / defualt state
            }
        } 

        else { // not ads mode, video content
            debugLog("Player not in adsmode and in viewport, should play", var_5.scr_var.vid_paused);
            if(var_5.scr_var.vid_paused) { // if video paused status is true from above
                var_5.scr_var.vid_paused = false;
                if(player.paused()) player.play(); // confirms first if player is paused then plays it
            } 
        }
    }
}

export const case_5_no_ads = (player, videoelement, contJWPGW) => {
    if(!inViewport(videoelement, contJWPGW)){
        if(!var_5.scr_var.videoEnded){ // video has not ended yet
            player.pause(); // pause player when no ads mode
            if(player.paused) var_5.scr_var.vid_paused = true; // video paused status
        }
    } 
    
    else { // in viewport, revert back normal functioning
        if(var_5.scr_var.vid_paused) { // if video paused status is true from above
            var_5.scr_var.vid_paused = false;
            if(player.paused()) player.play(); // confirms first if player is paused then plays it
        } 
    }
}
