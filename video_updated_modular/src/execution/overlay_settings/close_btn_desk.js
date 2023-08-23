import settings from "../../config/settings.json";
import { insert_close_style } from "./insert_close_style";

const close_desk = {
    over_desk: settings.execution.overlay_close_button
}

export const close_btn_desk = (player) => {    
    if(close_desk.over_desk.close_btn_desk_hor === "left") var close_btn_hor_desk="left";
    else if(close_desk.over_desk.close_btn_desk_hor === "right") var close_btn_hor_desk="right";

    if(close_desk.over_desk.close_btn_desk_ver === "top") var close_btn_ver_desk="top";
    else if(close_desk.over_desk.close_btn_desk_ver === "bottom") var close_btn_ver_desk="bottom";

    var css = "#vidclose{display:none;"+
    "margin-bottom:0px"+
    ";width:"+close_desk.over_desk.close_btn_width_desk+
    ";height:"+close_desk.over_desk.close_btn_height_desk+
    ";"+close_btn_ver_desk+":"+close_desk.over_desk.desk_close_btn_desk_ver_px+
    ";"+close_btn_hor_desk+":"+close_desk.over_desk.desk_close_btn_desk_hor_px+
    ";position:absolute;background-color:"+close_desk.over_desk.close_back_color+
    ";box-shadow:rgba(0,0,0,.2) 0 -1px 1px 0;"+
    "border-width:initial;border-style:none;border-color:initial;border-image:initial;border-radius:"+close_desk.over_desk.close_btn_border_radius_top+" "+close_desk.over_desk.close_btn_border_radius_top+" "+close_desk.over_desk.close_btn_border_radius_bottom+" "+close_desk.over_desk.close_btn_border_radius_bottom+ "}"+
    
    "#vidclose .vidclose-btn{transform:rotate(-45deg);display:block;"+
    "height:"+close_desk.over_desk.close_btn_1_height+";width:"+close_desk.over_desk.close_btn_1_width+
    ";left:"+close_desk.over_desk.close_btn_1_left+";top:"+close_desk.over_desk.close_btn_1_top+";"+
    "background-color:"+close_desk.over_desk.close_btn_color+
    ";position:absolute;}"+
    
    "#vidclose .vidclose-btn2{transform:rotate(45deg);display:block;"+
    "height:"+close_desk.over_desk.close_btn_1_height+";width:"+close_desk.over_desk.close_btn_1_width+
    ";left:"+close_desk.over_desk.close_btn_1_left+";top:"+close_desk.over_desk.close_btn_1_top+";"+
    "background-color:"+close_desk.over_desk.close_btn_color+
    ";position:absolute;}"+
    ".cam_video{object-fit: fill;}";

    insert_close_style(css, player);
}