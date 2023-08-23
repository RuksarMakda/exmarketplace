import settings from "../config/settings.json";
import { debugLog } from "../main.js";
import { custom_keys} from "./custom_keys.js";
import { invokeVideoPlayer } from "./player_start";
import { prebid_script } from "./prebid/prebid_script";

const video_settings = {
    ExMp_VidCurrentLocation: window.location,
    ExMp_VidCurrentLocationEncoded: encodeURIComponent(window.location),
    preroll: settings.execution.ad_units.preroll,
    prebid: settings.execution.prebid,
    prerollTag: '',
    video_source: settings.pre_execution.video_source
};

export function player_start_ads(){
  if(cust_key_status){
      custom_keys();
  }

  else if(prebid){
    prebid_script();
  }

  else {
    assign_tag();
  }
}


export function assign_tag(){
  debugLog("New Params String 2: ", settings.script_variables.params_string);

  if(video_settings.preroll.preroll_type === "google"){
      video_settings.prerollTag = 'https://pubads.g.doubleclick.net/gampad/ads?iu='+ video_settings.preroll.prerollAdUnit +
      '&url='+video_settings.ExMp_VidCurrentLocationEncoded+'&description_url='+video_settings.ExMp_VidCurrentLocationEncoded+
      '&tfcd=0&npa=0&sz=1x1%7C400x300%7C640x360%7C640x480%7C1280x720&gdfp_req=1&output=vast'+
      '&unviewed_position_start=1&env=vp&impl=s&correlator='+settings.script_variables.params_string;
  } 
    
  else if(video_settings.preroll.preroll_type === "yahoo"){
      video_settings.prerollTag = video_settings.preroll.verizon_tag_url;
  }
  
  else if(video_settings.preroll.preroll_type === "general_vast"){
      video_settings.prerollTag = video_settings.preroll.prerollAdUnit+settings.script_variables.params_string;
  }

  debugLog("Preroll Ad Tag: ", video_settings.prerollTag);
  invokeVideoPlayer(video_settings.prerollTag);
}


