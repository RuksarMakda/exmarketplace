import settings from "../../config/settings.json";
import { insert_close_style } from "./insert_close_style";

const close_mob = {
    over_mob: settings.execution.overlay_close_button
}

export const close_btn_mob = (player) => {
    
    if(close_mob.over_mob.close_btn_mob_hor === "left") var close_btn_hor_mob="left";
    else if(close_mob.over_mob.close_btn_mob_hor === "right") var close_btn_hor_mob="right";

    if(close_mob.over_mob.close_btn_mob_ver === "top") var close_btn_ver_mob="top";
    else if(close_mob.over_mob.close_btn_mob_ver === "bottom") var close_btn_ver_mob="bottom";

    var css = "#vidclose{display:none;"+
    "margin-bottom:0px"+
    ";width:"+close_mob.over_mob.close_btn_width_mob+
    ";height:"+close_mob.over_mob.close_btn_height_mob+
    ";"+close_btn_ver_mob+":"+close_mob.over_mob.close_btn_mob_ver_px+
    ";"+close_btn_hor_mob+":"+close_mob.over_mob.close_btn_mob_hor_px+
    ";position:absolute;background-color:"+close_mob.over_mob.close_back_color+
    ";box-shadow:rgba(0,0,0,.2) 0 -1px 1px 0;border-width:initial;"+
    "border-style:none;border-color:initial;border-image:initial;border-radius:"+close_mob.over_mob.close_btn_border_radius_top+" "+close_mob.over_mob.close_btn_border_radius_top+" "+close_mob.over_mob.close_btn_border_radius_bottom+" "+close_mob.over_mob.close_btn_border_radius_bottom+ "}"+
   
    "#vidclose .vidclose-btn{transform:rotate(-45deg);display:block;"+
    "height:"+close_mob.over_mob.close_btn_1_height+";width:"+close_mob.over_mob.close_btn_1_width+
    ";left:"+close_mob.over_mob.close_btn_1_left+";top:"+close_mob.over_mob.close_btn_1_top+";"+
    "background-color:"+close_mob.over_mob.close_btn_color+
    ";position:absolute;}"+
    
    "#vidclose .vidclose-btn2{transform:rotate(45deg);display:block;"+
    "height:"+close_mob.over_mob.close_btn_1_height+";width:"+close_mob.over_mob.close_btn_1_width+
    ";left:"+close_mob.over_mob.close_btn_1_left+";top:"+close_mob.over_mob.close_btn_1_top+";"+
    "background-color:rgb(255,255,255  );position:absolute;}.cam_video{object-fit: fill;}";

    insert_close_style(css, player);
}