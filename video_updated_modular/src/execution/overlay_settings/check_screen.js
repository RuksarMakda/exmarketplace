import settings from "../../config/settings.json";
import { overlay_desk } from "./overlay_desk";
import { overlay_mob } from "./overlay_mob";
import { debugLog } from "../../main";

export const check_screen = (player) => {
    var contJWP = document.getElementById("cont-jwp"); 
    var contJWPGW = document.querySelector("#cont-jwp-gh");

    var w2 = contJWPGW.offsetWidth; // or contJWP.style.width
    var h2 = contJWP.clientHeight; // contJWP.style.height

    contJWP.style.position= 'fixed';

    debugLog("Inside check screen", mobile_width);

    var sc_in_width = Math.min(window.screen.width, window.innerWidth);

    if (sc_in_width < 650) {
        settings.script_variables.isVidMobile = true;
    }
    
    contJWP.style.zIndex= '1000001';
    contJWPGW.style.width= w2+"px";
    contJWPGW.style.height= h2+"px";
    contJWPGW.style.border= '2px dotted #ccc'; 

    if(settings.script_variables.isVidMobile){
        overlay_mob(player, contJWP);
    } 
    
    else {
        overlay_desk(player, w2, contJWP, contJWPGW);
    }
}
