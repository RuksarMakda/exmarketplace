import { overlay_1 } from "./overlay_conditions/overlay_1";
import { overlay_2 } from "./overlay_conditions/overlay_2";
import { overlay_3 } from "./overlay_conditions/overlay_3";
import { overlay_3_scroll } from "./overlay_conditions/overlay_3";
import { overlay_4 } from "./overlay_conditions/overlay_4";
import { overlay_4_scroll } from "./overlay_conditions/overlay_4";
import { case_5 } from "./overlay_conditions/case_5";
import { case_5_no_ads } from "./overlay_conditions/case_5";
import { overlay_1_ends } from "./overlay_conditions/overlay_1";
import { debugLog } from "../main";
import settings from "../config/settings.json";
import { midroll_analysis } from "./midroll_data/midroll_analysis";
import { insert_postroll } from "../post_execution/insert_postroll";
import { close_overlay } from "./overlay_settings/close_overlay";
import { modal_analysis } from "../post_execution/modal_analysis";

export const player_events = (player) => {

    const videoelement = document.getElementById('videoDivPlayer');
    var contJWPGW = document.getElementById("cont-jwp-gh"); 

    var isMobile = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    var isAndroid = /Android/i.test(navigator.userAgent);

    debugLog("User Agent: ", isAndroid);


    player.on('loadedmetadata', function(){
        if(!settings.execution.ad_units.preroll.enabled){
            debugLog("No Preroll Case", preroll);
            if(videoelement){
                if(overlay_viewport_ads){
                    window.addEventListener('scroll', function(e) {
                        overlay_3_scroll(player, videoelement, contJWPGW); 
                    }, false);
                }
    
                else if(overlay_viewport_ads_content){
                    window.addEventListener('scroll', function(e) {
                        overlay_4_scroll(player, videoelement, contJWPGW); 
                    }, false);
                }

                else if(pause_play_case){
                    window.addEventListener('scroll', function(e) {
                        case_5_no_ads(player, videoelement, contJWPGW); 
                    }, false);
                }
            }

            ads_content_overlays(player, videoelement, contJWPGW);
        }

        if(midroll){
            if(isAndroid) {
                debugLog("Checking player ready state: ", player.readyState());
                checkReadyState(player);
            }

            else {
                debugLog("Not Android, Call to Midroll: ", player.duration());
                midroll_analysis(player);
            }
        }
    })


    player.on("adsready", function(){
        
        debugLog("Ads Ready Event, may Fill or Not");

        if(preroll){
            debugLog("Preroll Case", preroll);
            if(videoelement){
                if(overlay_viewport_ads){
                    window.addEventListener('scroll', function(e) {
                        overlay_3_scroll(player, videoelement, contJWPGW); 
                    }, false);
                }
    
                else if(overlay_viewport_ads_content){
                    window.addEventListener('scroll', function(e) {
                        overlay_4_scroll(player, videoelement, contJWPGW); 
                    }, false);
                }

                else if(pause_play_case){
                    window.addEventListener('scroll', function(e) {
                        case_5(player, videoelement, contJWPGW); 
                    }, false);
                }
            }

            
            var adsManager = player.ima.getAdsManager();
            adsManager.addEventListener(google.ima.AdEvent.Type.ALL_ADS_COMPLETED, onAdLoaded(player));

            ads_content_overlays(player, videoelement, contJWPGW);
        }
        
    })

    player.on('ads-ad-started', function(response){
        debugLog("Ad has Started - Ad Response", response);

        if(!settings.execution.ad_units.postroll.postroll_can_run){
            settings.script_variables.postroll_fill = true;
            debugLog("Postroll is filled - postroll_fill", settings.script_variables.postroll_fill);
        }

        settings.script_variables.ad_fill = true;

        if(overlay_ads){
            overlay_1(player);
        }

        else if(overlay_viewport_ads){
            overlay_3(player, videoelement, contJWPGW);
        }
    });

    player.on("adend", function(){
        if((overlay_ads) || (overlay_viewport_ads)){
            debugLog("Or or Is this firing ?");
            overlay_1_ends(player);
        }
        
        settings.script_variables.ad_fill = false;

        if((postroll) && (!settings.execution.ad_units.postroll.postroll_can_run)){
            debugLog("Postroll is filled and function ended - postroll_ended", settings.script_variables.postroll_ended);
            settings.script_variables.postroll_ended = true;
        }
    });

    if(isMobile){
        player.on("adended", function(){
            if((overlay_ads) || (overlay_viewport_ads)){
                debugLog("Or or Is this firing ?");
                overlay_1_ends(player);
            }
            
            settings.script_variables.ad_fill = false;

            if((postroll) && (!settings.execution.ad_units.postroll.postroll_can_run)){
                debugLog("Postroll is filled and function ended - postroll_ended", settings.script_variables.postroll_ended);
                settings.script_variables.postroll_ended = true;
            }
        });
    }    

    player.on("ended", function(){

        if(player.currentTime() === player.duration()){
            debugLog("Player Has Ended Playing - Confirmed"); // useful for modal case where we redefine player current time
            settings.script_variables.endedStatus = true;
            debugLog("Setting Video Ended Varable 1 as ", settings.script_variables.endedStatus);
            debugLog("Setting Video Ended Variable 2 as ", settings.script_variables.videoEnded);
        } 

        if((!settings.script_variables.videoEnded) && (settings.script_variables.endedStatus)){
            settings.script_variables.videoEnded = true;
            debugLog("Video Ended Variable - ", settings.script_variables.videoEnded);
    
            if(settings.script_variables.videoEnded) {

                if((postroll) && (settings.execution.ad_units.postroll.postroll_can_run)){
                    insert_postroll(player);
                }
                
                else if(overlay_ads_content) {
                    close_overlay(player);
                    settings.script_variables.player_overlay_ends = true;
                    if(modal){
                        modal_analysis(player);
                    }
                }

                else if(overlay_viewport_ads_content) {
                    close_overlay(player);
                    settings.script_variables.player_overlay_ends = true;
                    if(modal){
                        modal_analysis(player);
                    }
                }

                else if(modal){
                    modal_analysis(player);
                }
            }
        }
    });
}

const ads_content_overlays = (player, videoelement, contJWPGW) => {
    if(overlay_ads_content){
        overlay_2(player);
    }

    else if(overlay_viewport_ads_content){
        overlay_4(player, videoelement, contJWPGW);
    }
}

export const player_end_events = (player) => {
    if(overlay_ads_content){
        if(modal){
            modal_analysis(player);
        }
        close_overlay(player);
    }

    else if(overlay_viewport_ads){
        if(modal){
            modal_analysis(player);
        }
        close_overlay(player);
    }

    else if(overlay_viewport_ads_content){
        if(modal){
            modal_analysis(player);
        }
        close_overlay(player);
    }

    else if(modal){
        modal_analysis(player);
    }
}

function onAdLoaded(player) {
    return function(event) {        
        debugLog('All ads are completed');
        
        if(!settings.execution.ad_units.postroll.postroll_can_run){ // postroll has run so comes here
            debugLog("Postroll has run");
            settings.script_variables.player_overlay_ends = true;
            player_end_events(player);

            debugLog("postroll fill: ", settings.script_variables.postroll_fill);
            if(!settings.script_variables.postroll_fill){
                debugLog("Postroll is not filled - postroll_fill", settings.script_variables.postroll_fill);
                settings.script_variables.postroll_ended = true;
                debugLog("Postroll is not filled and function ended - postroll_ended", settings.script_variables.postroll_ended);
            }
        }
      };
}

function checkReadyState(player){
    if (player.readyState() >= 2) {
        debugLog("Player ready state 2: ", player.readyState());
        debugLog("Ready State is true", player.duration());
        midroll_analysis(player);
    }

    else {
        debugLog("Player ready state less: ", player.readyState);
        setTimeout(function() { 
            checkReadyState(player);
        }, 5000); 
    }
}

