import settings from "../config/settings.json";
import { debugLog } from "../main.js";
import { player_start_ads } from "./player_start_ads";
import { player_events } from "./player_events";

export const player_start = () => {

    if(preroll){ // if preroll is enabled
        player_start_ads();
    }

    else {
        var url = "";
        invokeVideoPlayer(url);
    } 
}

 export const invokeVideoPlayer = (url) => {
    var vjsOptions = { 
        autoplay: true
    }
    
    var player = videojs('videoDivPlayer', vjsOptions);
    player.fluid(true);
    
    player.src({
        src: settings.pre_execution.video_source.sourceVideo,
        type: settings.pre_execution.video_source.sourceType
    });

     
    if(settings.pre_execution.video_source.enable_quality){
        let qualityLevels = player.qualityLevels();
        player.httpSourceSelector();
        debugLog("Quality Levels", qualityLevels);
    }


    if(preroll){
        var imaOptions = {
            id: 'videoDivPlayer',
            adTagUrl: url
        }
    }

    else if((midroll) || (postroll)){
        var imaOptions = {
            id: 'videoDivPlayer',
            adTagUrl: url,
            disablePreroll: true
        }
    }
        
    if((preroll) || (midroll) || (postroll)){
        player.ima(imaOptions);
    }

    player.ready(function() {
        const promise = player.play();
        if(promise !== undefined){
            promise.then(() => {
                player.muted('false');
                player.play();
                if(player.paused()){
                player.muted('true');
                player.play();
                } 
            }).catch(error => {
                debugLog("Video cannot autoplay as its not muted, hence force mute to autoplay", error);
                if(player.paused()){
                    player.muted('true');
                    player.play();
                }
            });
        }
    })

    player_events(player);
}
