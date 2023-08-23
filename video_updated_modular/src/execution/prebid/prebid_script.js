import { debugLog } from "../../main.js";
import settings from "../../config/settings.json";
import { prebid_exec } from "./prebid_exec.js";

const preb = {
    src: settings.execution.prebid.prebid_source
}

export const prebid_script = () => {
    debugLog("Prebid is Enabled");
    var pbjsScript = document.createElement("script");
    pbjsScript.setAttribute("type", "text/javascript");
    pbjsScript.setAttribute("src", preb.src);
    pbjsScript.async = true;
    pbjsScript.onload = function () {
        debugLog("Prebid Script is Loaded");
        prebid_exec();
    };
    document.head.appendChild(pbjsScript);
}