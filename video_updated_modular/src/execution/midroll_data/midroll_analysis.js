import settings from "../../config/settings.json";
import { debugLog } from "../../main.js";
import { insert_midroll } from "./insert_midroll";

const mid_times = [];

const mid_var = {
    mid: settings.execution.ad_units.midroll
}

export const midroll_analysis = (player) => {
    if(multi_midroll) {
        debugLog("Inside Multiple Midrolls - updated");
        var m_t = mid_var.mid.midroll_time;
       
        debugLog("Getting player duration - updated", player.duration());
        for(let sec = m_t; sec < player.duration(); sec = sec + m_t){
            debugLog("Midroll times fetched", sec);
            mid_times.push(sec);
            debugLog("Midroll Times right after pushing: ", mid_times);
        }
    } 

    else {
        mid_times.push(mid_var.mid.midroll_time);
    }

    setTimeout(function() { 
        debugLog("Midroll Time/s: ", mid_times);
        player.on('timeupdate', function(){  
            debugLog("Inside Time Update Function");
            midroll_timer(player);
        })
    }, 3000); 
}


const midroll_timer = (player) => {

    debugLog("Midroll Time/s: check", mid_times);

    var cur_time = parseInt(player.currentTime());

    if((mid_times.includes(cur_time) && (!mid_var.mid.midroll_run))){
        debugLog("Inside Midtimes Array");
        // remove cur_time from array to avoid multiple calls at one time, then add midroll
        const index = mid_times.indexOf(cur_time);
        if(index > -1){
            mid_times.splice(index, 1);
        }
        insert_midroll(player);
    }

    if(multi_midroll){
        setTimeout(function() { 
            mid_var.mid.midroll_run = false;
        }, 5000); 
    }
}
