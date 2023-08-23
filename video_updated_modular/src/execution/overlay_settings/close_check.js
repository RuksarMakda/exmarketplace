import settings from "../../config/settings.json";
import { debugLog } from "../../main";
import { overlay_close } from "./overlay_close";

const check_var = {
    over_close: settings.execution.overlay_close_button
}

export const close_check = (player) => {

    settings.script_variables.close_can_exec = false; // close cannot come again now. (if we keep changing)
    settings.script_variables.overlay_status = true; // overlay is called (true/false - keep changing)
    
    setTimeout(function () {
        if((settings.script_variables.overlay_status) && (!settings.script_variables.close_clicked)){
            debugLog("Overlay Status - if true, i.e. player is in overlay AND close button is not clicked, then show close button, ", settings.script_variables.overlay_status);
            overlay_close(player);
        }
    }, check_var.over_close.overlay_close_btn_delay);
}