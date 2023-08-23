import settings from "../../config/settings.json";
import { close_check } from "./close_check";

const desk_set = {
    over_cont: settings.execution.overlay_container
}

export const overlay_desk = (player, w2, contJWP, contJWPGW) => {
    var resize=(desk_set.over_cont.overlay_desktop_width_ratio)/100;
    var w = w2*resize;

    if(desk_set.over_cont.overlay_desktop_hor === "right"){
        contJWP.style.right = desk_set.over_cont.overlay_desktop_hor_px;
    } 
      
    else if(desk_set.over_cont.overlay_desktop_hor === "left"){
        contJWP.style.left = desk_set.over_cont.overlay_desktop_hor_px;
    }
    
    if(desk_set.over_cont.overlay_desktop_ver === "top"){
        contJWP.style.top = desk_set.over_cont.overlay_desktop_ver_px;
    } 
      
    else if(desk_set.over_cont.overlay_desktop_ver === "bottom"){
        contJWP.style.bottom = desk_set.over_cont.overlay_desktop_ver_px;
    }
        
    contJWP.style.width= w+"px";
        
    if(((preroll) || (midroll) || (postroll))){
        var adsManager = player.ima.getAdsManager();
        if(adsManager != null){
            console.log("show ads manager :" , adsManager);
            adsManager.resize((contJWPGW.offsetWidth)*resize, contJWP.clientHeight, google.ima.ViewMode.NORMAL);
        }
    }

    close_check(player);
}