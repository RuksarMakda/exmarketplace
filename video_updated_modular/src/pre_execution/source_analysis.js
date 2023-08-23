import settings from "../config/settings.json";
import { player_start } from "../execution/player_start.js";
import { debugLog } from "../main.js";
import { quality_scripts } from "./quality_scripts";

const source_settings = settings.pre_execution.video_source;

export const source_analysis = (videoelement) => {
    var source_attr = videoelement.getAttribute('data_source_url');
    var source_attr_2 = videoelement.getAttribute('data_source_type');
        
    if((source_attr != "") && (source_attr != " ") && (source_attr_2 != "") && (source_attr_2 != " ")){
        debugLog("Source URL is entered from video tag attributes", source_attr);
        source_settings.sourceVideo = source_attr;
        source_settings.sourceType = source_attr_2;
        
        if(quality_use){
            quality_scripts();
        }

        else {
            player_start();
        }
    } 
    
    else {
        debugLog("Source URL is not entered from video tag attributes");
        if(quality_use){
            quality_scripts();
        }

        else {
            player_start();
        }
    }
};