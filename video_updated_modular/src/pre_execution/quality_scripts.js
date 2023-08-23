import { player_start } from "../execution/player_start";
import { debugLog } from "../main";

export const quality_scripts = () => {
    insertCSSQuality();
    insertJSQuality();
}


const insertJSQuality = () => {
    var head = document.head;
    var script = document.createElement("script");
    script.setAttribute("type", "text/javascript");
    script.setAttribute("src", "https://exmpstatic.com/vid/js/videojs-contrib-quality-levels.js");
    script.async = true;
    head.appendChild(script);

    script.onload = function () {
        debugLog("Quality Script 1 Loaded");
        insertJSQuality2();
    };
}

const insertJSQuality2 = () => {
    var head = document.head;
    var script2 = document.createElement("script");
    script2.setAttribute("type", "text/javascript");
    script2.setAttribute("src", "https://exmpstatic.com/vid/js/videojs-http-source-selector.js");
    script2.async = true;
    head.appendChild(script2);

    script2.onload = function () {
        debugLog("Quality Script 2 Loaded");
        player_start();
    };
}

const insertCSSQuality = () => {
    var head = document.head;
    var link = document.createElement("link");

    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = "https://cdn.exmarketplace.com/bidder/video_update/videojs-quality-menu.css";

    head.appendChild(link);
}