import settings from "../config/settings.json";
import { debugLog } from "../main.js";
import { assign_tag } from "./player_start_ads";

const keys_settings = {
    preroll: settings.execution.ad_units.preroll
};

export function custom_keys(){
  settings.script_variables.params_string = "&cust_params=";

    for (var i = 0; i < keys_settings.preroll.cust_keys.length; i++) {

      var custom_value = keys_settings.preroll.cust_values[i];
      debugLog("custom string value attribute", custom_value);

      // const data_details = document.querySelector("body");
      // custom_value = data_details.getAttribute(custom_value);

      debugLog("custom string value read from attribute - before format", custom_value);

      if(typeof custom_value === 'string'){
        custom_value = custom_value.replace(" ", "");

        if(custom_value.includes(",")){
          debugLog("custom string has a comma separated value 1", custom_value);
          custom_value = custom_value.replace(",", "%2C");
        }
      }

      debugLog("custom string value read from attribute - after format", custom_value);

      settings.script_variables.params_string += keys_settings.preroll.cust_keys[i] + "%3D" + custom_value + "%26";
   }
      debugLog("custom string has a length", keys_settings.preroll.cust_keys.length);
      settings.script_variables.params_string = settings.script_variables.params_string.slice(0,-3);

      debugLog("Params String", settings.script_variables.params_string);

   assign_tag();
  }