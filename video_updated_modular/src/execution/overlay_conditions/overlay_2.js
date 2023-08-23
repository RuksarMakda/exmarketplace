import { debugLog } from "../../main";
import settings from "../../config/settings.json";
import { check_screen } from "../overlay_settings/check_screen";
import { close_overlay} from "../overlay_settings/close_overlay";

export const overlay_2 = (player) => {

    console.log("Pod called status: ", settings.script_variables.pod_called);

    if(!settings.script_variables.overlay_status){
        debugLog("Overlay 2: Ads and Content");
        debugLog("Call to Overlay Function: ");
        check_screen(player);
    }
}
