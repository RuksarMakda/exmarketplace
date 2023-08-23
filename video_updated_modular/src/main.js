import settings from "./config/settings.json";
import { viewport_analysis } from "./pre_execution/viewport_analysis.js";
import { source_analysis } from "./pre_execution/source_analysis";
import { add_cmp } from "./pre_execution/add_cmp";

const start = () => {

    console.log("CMP is from webpack: ", CMP);
    insertCSS();

    if((CMP) && (preroll)) {
        add_cmp();
    } 

    else {
        insertVideoJS();
    }

}

export const insertVideoJS = () => {
    var head = document.head;
    var script = document.createElement("script");
    script.setAttribute("type", "text/javascript");
    script.setAttribute("src", "https://exmpstatic.com/vid/js/video.min.js");
    script.async = true;
    head.appendChild(script);

    script.onload = function () {
        debugLog("Dependency Check - video.min.js loaded");
        if((preroll) || (midroll) || (postroll)){
            insertAdsJS();
        }

        else {
            assign_elements();
        }
    };
}

const insertAdsJS = () => {
    var head = document.head;
    var script = document.createElement("script");
    script.setAttribute("type", "text/javascript");
    script.setAttribute("src", "https://exmpstatic.com/vid/js/videojs.ads.js");
    script.async = true;
    head.appendChild(script);

    script.onload = function () {
        debugLog("Dependency Check - videojs.ads");
        insertImaJS();
    };
}

const insertImaJS = () => {
    var head = document.head;
    var script = document.createElement("script");
    script.setAttribute("type", "text/javascript");
    script.setAttribute("src", "https://exmpstatic.com/vid/js/videojs.ima.js");
    script.async = true;
    head.appendChild(script);

    script.onload = function () {
        debugLog("Dependency Check - videojs.ima.js loaded");
        assign_elements();
    };
}

const insertCSS = () => {
    var head = document.head;
    var link = document.createElement("link");

    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = "https://exmpstatic.com/vid/css/vcfg_second.css";

    head.appendChild(link);
}

var timeout_var = 0;
export const assign_elements = () => {
    var videoelement = document.getElementById('videoDivPlayer');
    var contJWPGW = document.getElementById("cont-jwp-gh"); 
    
    if(timeout_var > 200){
    return 1;
    }
    
    if(videoelement){
        debugLog("Video Element Loaded", videoelement);

        if(!settings.pre_execution.video_source.enable_audio){
            videoelement.muted = true;
        }

        if(viewport_var){
            viewport_analysis(videoelement, contJWPGW);
        } 
        else {
            source_analysis(videoelement, contJWPGW);
        } 
    }
        
    else {
        timeout_var++;
        setTimeout(assign_elements, 10);
    }
};

export function debugLog(logMessage, args) {
    if (settings.DEBUG) {
        console.log(logMessage, args);
    }
}

if (document.readyState !== "loading") {
    setTimeout(function() { 
        start();
    }, settings.load_time);
}

else {
    document.addEventListener("DOMContentLoaded", () => {
        setTimeout(function() { 
            start();
        }, settings.load_time); 
    });
}
