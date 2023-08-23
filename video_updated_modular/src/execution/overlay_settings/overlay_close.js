import { close_btn_desk } from "./close_btn_desk";
import { close_btn_mob } from "./close_btn_mob";


export const overlay_close = (player) => {

    if(mobile_width){
        close_btn_mob(player);
    }

    else {
        close_btn_desk(player);
    }
}