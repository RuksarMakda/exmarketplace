import { debugLog } from "../main.js";
import settings from "../config/settings.json";
import { modal_call } from "./modal_call";


const mod_anal = {
    mod: settings.post_execution.modal_settings
}


export const modal_analysis = (player) => {
    var videoelement = document.getElementById('videoDivPlayer');
    var modal_attr_1 = videoelement.getAttribute('data_modal_poster_img'); 

    if((modal_attr_1 != "") && (modal_attr_1 != " ")){
        debugLog("Modal poster image from video tag attributes", modal_attr_1);
        mod_anal.mod.poster_img_url = modal_attr_1;
        modal_analysis_2(videoelement, player);

    } else {
        debugLog("Modal poster image not entered from video tag");
        modal_analysis_2(videoelement, player);
    }
}

const modal_analysis_2 = (videoelement, player) => {
    var modal_attr_2 = videoelement.getAttribute('data_modal_poster_url');

    if((modal_attr_2 != "") && (modal_attr_2 != " ")){
        debugLog("Modal poster website url from video tag attributes", modal_attr_2);
        mod_anal.mod.website_link = modal_attr_2;
        modal_call(player);
    } 
    
    else {
        debugLog("Modal Poster website url is not entered from video tag");
        modal_call(player);
    }
}