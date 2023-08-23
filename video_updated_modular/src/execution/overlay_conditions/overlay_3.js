import { inViewport } from "../../pre_execution/overlay_check";
import settings from "../../config/settings.json";
import { check_screen } from "../overlay_settings/check_screen";
import { close_overlay } from "../overlay_settings/close_overlay";
import { debugLog } from "../../main";

export const overlay_3 = (player, videoelement, contJWPGW) => {
    if((!inViewport(videoelement, contJWPGW))){
        if((!settings.script_variables.close_clicked) && (!settings.script_variables.overlay_status)) {
            check_screen(player);
        }
    }

    else {
        debugLog("Overlay end a");
        close_overlay(player);
    }
}


export const overlay_3_scroll = (player, videoelement, contJWPGW) => {
    if((!inViewport(videoelement, contJWPGW))){
        if(player.ads.isInAdMode()){
            if((!settings.script_variables.close_clicked) && (!settings.script_variables.overlay_status)){
                check_screen(player);
                settings.script_variables.overlay_status = true; // avoid reprtitive calls to overlay
            }
        }

        else {
            debugLog("Overlay end b");
            close_overlay(player);
        }
    }

    else {
        debugLog("Overlay end c");
        close_overlay(player);
        settings.script_variables.overlay_status = false; // to enable calling overlay again when outside viewport
    }
}

