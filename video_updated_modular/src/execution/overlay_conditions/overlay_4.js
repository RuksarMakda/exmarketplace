import { inViewport } from "../../pre_execution/overlay_check";
import settings from "../../config/settings.json";
import { check_screen } from "../overlay_settings/check_screen";
import { close_overlay } from "../overlay_settings/close_overlay";
import { debugLog } from "../../main";

export const overlay_4 = (player, videoelement, contJWPGW) => {
    if((!inViewport(videoelement, contJWPGW))){
        if((!settings.script_variables.close_clicked) && (!settings.script_variables.overlay_status)) {
            check_screen(player);
        }
    }

    else {
        debugLog("Overlay end");
        close_overlay(player);
    }
}


export const overlay_4_scroll = (player, videoelement, contJWPGW) => {
    if(((postroll) && (!settings.script_variables.postroll_ended)) || (!settings.script_variables.videoEnded)){
        if(!inViewport(videoelement, contJWPGW)) {
            if((!settings.script_variables.close_clicked) && (!settings.script_variables.overlay_status)) {
                check_screen(player);
                settings.script_variables.overlay_status = true; // avoid reprtitive calls to overlay
            }
        } 
    
        else { 
            settings.script_variables.overlay_status = false;
            debugLog("Overlay end");
            close_overlay(player);
        } 
    }
}