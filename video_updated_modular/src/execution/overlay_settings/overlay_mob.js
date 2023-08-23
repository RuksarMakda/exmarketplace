import settings from "../../config/settings.json";
import { close_check } from "./close_check";

const mob_set = {
    over_cont: settings.execution.overlay_container
}

export const overlay_mob = (player, contJWP) => {
    var resize_mobile=(mob_set.over_cont.overlay_mobile_width_ratio)/100;
    var w_mob = (document.documentElement.clientWidth)*(resize_mobile);

    if(mob_set.over_cont.overlay_mobile_hor === "right"){
        contJWP.style.right = mob_set.over_cont.overlay_mobile_hor_px;
        contJWP.style.left = mob_set.over_cont.overlay_mobile_hor_px;
    } 
      
    else if (mob_set.over_cont.overlay_mobile_hor === "left"){
        contJWP.style.left = mob_set.over_cont.overlay_mobile_hor_px;
        contJWP.style.right = mob_set.over_cont.overlay_mobile_hor_px;
    }
    
    if(mob_set.over_cont.overlay_mobile_ver === "top"){
        contJWP.style.top = mob_set.over_cont.overlay_mobile_ver_px;
    } 
    
    else if (mob_set.over_cont.overlay_mobile_ver === "bottom"){
        contJWP.style.bottom = mob_set.over_cont.overlay_mobile_ver_px;
    }
    
    contJWP.style.width= w_mob+"px";

    close_check(player);

}