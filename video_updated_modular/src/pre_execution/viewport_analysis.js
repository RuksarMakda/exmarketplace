import { inViewport } from "./overlay_check.js";
import { debugLog } from "../main.js";
import { source_analysis } from "./source_analysis.js";

export const viewport_analysis = (videoelement, contJWPGW) => {
    if(inViewport(videoelement, contJWPGW)){
        window.removeEventListener('scroll', viewport_analysis);
        debugLog("Player Elements are in Viewport, We can Start Player");
        source_analysis(videoelement, contJWPGW);
    } 
    
    else {
        window.addEventListener("scroll", viewport_analysis, false);
        debugLog("Player Elements are not in Viewport");
    }
};