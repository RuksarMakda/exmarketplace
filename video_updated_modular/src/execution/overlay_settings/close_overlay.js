import settings from "../../config/settings.json";

export const close_overlay = (player) => {
    var aElement = document.querySelector("#cont-jwp"); 
    var bElement = document.querySelector("#cont-jwp-gh"); 
    aElement.setAttribute('style', ''); 
    bElement.setAttribute('style', ''); 
  
    if(((preroll) || (midroll) || (postroll))){
      var adsManager = player.ima.getAdsManager();
      if(adsManager != null){
        adsManager.resize(aElement.clientWidth, aElement.clientHeight, google.ima.ViewMode.NORMAL);
      }
    }
  
    if(document.getElementById('vidclose') != null){
      document.getElementById('vidclose').style.display = 'none'; // hide
    }
  
    settings.script_variables.overlay_status = false; // overlay closed
}