import { debugLog } from "../../main";
import settings from "../../config/settings.json";
import { check_screen } from "../overlay_settings/check_screen";
import { close_overlay } from "../overlay_settings/close_overlay";


export const overlay_1 = (player) => {
    if(!settings.script_variables.overlay_status){
        debugLog("Overlay 1: Ads Only", overlay_ads);
        debugLog("Call to Overlay Function: ");
        check_screen(player);
    }  
}

export const overlay_1_ends = (player) => {
    debugLog("Ad End Event");
        debugLog("Overlay should close", overlay_ads);
        debugLog("Overlay end g");
        close_overlay(player);
}
