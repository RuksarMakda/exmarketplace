import { debugLog } from "../main.js";
import { insertVideoJS } from "../main.js";
import settings from "../config/settings.json";

const checkCMPVideo = () => {
    debugLog("CMP Check - Start");

    if (typeof __tcfapi === "undefined") {
        debugLog("CMP Check - TCF is undefined, starting TCF interval check");
        let maxIntervals = settings.pre_execution.consent_management.cmp_timeout / settings.pre_execution.consent_management.cmp_frequency;
        let intervalCount = 0;

        let tcfIntervalCheck = setInterval(() => {
            if (intervalCount < maxIntervals) {
                if (typeof __tcfapi !== "undefined") {
                    clearInterval(tcfIntervalCheck);
                    debugLog("CMP Check - TCF is defined");
                    registerTCFEventListenerVideo();
                }
            } 
            
            else {
                clearInterval(tcfIntervalCheck);
                debugLog("CMP Check - TCF interval check - Timeout");
                insertVideoJS();
            }
            intervalCount++;
        }, settings.pre_execution.consent_management.cmp_frequency);
    } 
        
    else {
        debugLog("CMP Check - TCF is defined");
        registerTCFEventListenerVideo();
    }
}


const registerTCFEventListenerVideo = () => {
    __tcfapi("addEventListener", 2, (tcData, success) => {
        if (success) {
            debugLog("CMP Check - TCF event listener registered successfully");
            checkIfGdprAppliesVideo(tcData);
        } 
        
        else {
            debugLog("CMP Check - Could not register TCF event listener");
            debugLog("CMP Check - Done");
        }
    });
};

const checkIfGdprAppliesVideo = (tcData) => {
    debugLog("CMP Check - Checking if GDPR applies");
    if (tcData.gdprApplies === true) {
        debugLog("CMP Check - GDPR applies, checking event status");
        checkEventStatusVideo(tcData);
    } 
    
    else {
        debugLog("CMP Check - GDPR does not apply");
        insertVideoJS();
        debugLog("CMP Check - Done");
    }
};

const checkEventStatusVideo = (tcData) => {
    if (tcData.eventStatus === "cmpuishown") {
        debugLog("CMP Check - [cmpuishown] - awaiting user consent choices");
    } 
    
    else if (tcData.eventStatus === "useractioncomplete") {
        debugLog("CMP Check - [useractioncomplete] - TC String available");
        insertVideoJS();
        debugLog("CMP Check - Done");
    } 
    
    else if (tcData.eventStatus === "tcloaded") {
        debugLog("CMP Check - [tcloaded] - TC String available");
        __tcfapi("removeEventListener", 2, (success) => {
            if (success) {
                debugLog("CMP Check - TCF event listener unregistered successfully");
            }
        }, tcData.listenerId
        );
    
        insertVideoJS();
        debugLog("CMP Check - Done");
    }
};

export function add_cmp() {
        checkCMPVideo();
}

// CMP Check -- END