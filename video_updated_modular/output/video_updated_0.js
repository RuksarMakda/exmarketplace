(()=>{"use strict";var e={d:(o,t)=>{for(var a in t)e.o(t,a)&&!e.o(o,a)&&Object.defineProperty(o,a,{enumerable:!0,get:t[a]})},o:(e,o)=>Object.prototype.hasOwnProperty.call(e,o)};e.d({},{qu:()=>_});const o=JSON.parse('{"eM":false,"Wy":300,"Hj":{"H7":{"enabled":false,"sourceVideo":"//hls.exmarketplace.com/Valica/Good_Move_Srl/20230414_Tvserial_TopId/m2yMuY45/index.m3u8","sourceType":"application/x-mpegURL","sourceVideoAlt":"//hls.exmarketplace.com/ExMarketPlace_FZ_LLC/EXPO2020_IT/index.m3u8","sourceTypeAlt":"application/x-mpegURL","enable_audio":false,"enable_quality":false}},"kc":{"tZ":{"Hc":{"enabled":false,"preroll_type":"google","prerollAdUnit":"/42150330,21737146126/Tvserial/Tvserial_preroll","verizon_tag_url":"/42150330,21737146126/Tvserial/Tvserial_preroll","cust_keys":[],"cust_values":[]},"Un":{"enabled":false,"midroll_type":"google","midrollAdUnit":"/42150330,21737146126/Tvserial/Tvserial_midroll","verizon_midroll_tag_url":"/42150330,21737146126/Tvserial/Tvserial_midroll","midroll_time":50,"midroll_throughout":true,"midroll_run":false},"Zf":{"enabled":false,"postroll_type":"google","postrollAdUnit":"/42150330,21737146126/Tvserial/Tvserial_postroll","verizon_postroll_tag_url":"","postroll_can_run":true}},"kw":{"enabled":false,"prebid_source":"https://cdn.exmarketplace.com/bidder/prebid_adapters/pb_ap_ix_ya.js","auctionTimeout":750,"requestBidsTimeout":1000,"video_mime_types":["video/mp4","application/javascript","application/x-mpegURL","video/x-ms-wmv"],"config":{"cache":{"url":"https://prebid.adnxs.com/pbc/v1/cache"},"debug":"","enableSendAllBids":true,"targetingControls":{"alwaysIncludeDeals":true},"priceGranularity":"dense","deviceAccess":true,"timeoutBuffer":400,"bidderTimeout":3000,"pageUrl":"","ix":{"mode":"video"},"appnexus":{"mode":"video"},"yahoossp":{"mode":"video"},"consentManagement":{"gdpr":{"cmpApi":"iab","timeout":5000,"defaultGdprScope":true,"rules":[{"purpose":"storage","enforcePurpose":false,"enforceVendor":false},{"purpose":"basicAds","enforcePurpose":false,"enforceVendor":false}]},"usp":{"cmpApi":"iab","timeout":100}},"schain":{"validation":"off","config":{"ver":1,"complete":1,"nodes":[{"asi":"ExMarketplace.com","sid":0,"hp":1}]}},"userSync":{"iframeEnabled":true,"filterSettings":{"iframe":{"bidders":["ix"],"filter":"include"}}}},"bidderSettings":{"ix":{"storageAllowed":true},"appnexus":{"storageAllowed":false},"yahoossp":{"storageAllowed":false}},"bidders":[{"bidder":"ix","enabled":true,"params":{"siteId":""}},{"bidder":"appnexus","enabled":true,"params":{"placementId":0}},{"bidder":"yahoossp","enabled":true,"params":{"dcn":0,"pos":0}}]},"l6":{"overlay_mobile_ver":"top","overlay_mobile_ver_px":"10px","overlay_mobile_hor":"right","overlay_mobile_hor_px":"15%","overlay_mobile_width_ratio":70,"overlay_desktop_width_ratio":60,"overlay_desktop_ver":"top","overlay_desktop_ver_px":"110px","overlay_desktop_hor":"right","overlay_desktop_hor_px":"10px"},"a7":{"close_btn_mob_hor":"right","close_btn_mob_ver":"bottom","close_btn_mob_ver_px":"-25px","close_btn_mob_hor_px":"0px","close_btn_width_mob":"25px","close_btn_height_mob":"25px","close_btn_desk_hor":"left","close_btn_desk_ver":"bottom","desk_close_btn_desk_ver_px":"-25px","desk_close_btn_desk_hor_px":"0px","close_btn_color":"white","close_back_color":"#E13C87","close_btn_width_desk":"25px","close_btn_height_desk":"25px","close_btn_1_top":"6px","close_btn_1_left":"11.5px","close_btn_1_width":"2px","close_btn_1_height":"13px","close_btn_border_radius_top":"0px","close_btn_border_radius_bottom":"5px","overlay_close_btn_time_frame":0,"overlay_close_btn_delay":8000}},"q8":{"u":{"enabled":false,"website_link":"https://www.tvserial.it/","poster_img_url":"","css_enabled":false,"replay_player":false}},"B$":{"ad_paused":false,"vid_paused":false,"adsMode":false,"videoEnded":false,"endedStatus":false,"isVidMobile":false,"pod_called":false,"overlay_status":false,"close_can_exec":true,"close_clicked":false,"script_load":false,"script_reload":false,"params_string":"","ad_fill":false,"player_overlay_ends":false}}');window,encodeURIComponent(window.location),window,encodeURIComponent(window.location);window,encodeURIComponent(window.location),window,encodeURIComponent(window.location),window,encodeURIComponent(window.location);const t=(e,o,t)=>{0};const a=()=>{l("")},l=e=>{var a=videojs("videoDivPlayer",{autoplay:!0});if(a.fluid(!0),a.src({src:o.Hj.H7.sourceVideo,type:o.Hj.H7.sourceType}),o.Hj.H7.enable_quality){let e=a.qualityLevels();a.httpSourceSelector(),_("Quality Levels",e)}a.ready((function(){const e=a.play();void 0!==e&&e.then((()=>{a.muted("false"),a.play(),a.paused()&&(a.muted("true"),a.play())})).catch((e=>{_("Video cannot autoplay as its not muted, hence force mute to autoplay",e),a.paused()&&(a.muted("true"),a.play())}))})),(e=>{const a=document.getElementById("videoDivPlayer");var l=document.getElementById("cont-jwp-gh");e.on("loadedmetadata",(function(){o.kc.tZ.Hc.enabled||(_("No Preroll Case",!1),t(e,a,l))})),e.on("adsready",(function(){_("Ads Ready Event, may Fill or Not")})),e.on("ads-ad-started",(function(e){_("Ad has Started - Ad Response",e),o.kc.tZ.Zf.postroll_can_run||(o.B$.postroll_fill=!0),o.B$.ad_fill=!0})),e.on("adend",(function(){o.B$.ad_fill=!1})),/iPhone|iPad|iPod/i.test(navigator.userAgent)&&e.on("adended",(function(){o.B$.ad_fill=!1})),e.on("ended",(function(){e.currentTime()===e.duration()&&(_("Player Has Ended Playing - Confirmed"),o.B$.endedStatus=!0,_("Setting Video Ended Varable 1 as ",o.B$.endedStatus),_("Setting Video Ended Variable 2 as ",o.B$.videoEnded)),!o.B$.videoEnded&&o.B$.endedStatus&&(o.B$.videoEnded=!0,_("Video Ended Variable - ",o.B$.videoEnded))}))})(a)},d=o.Hj.H7;const r=()=>{console.log("CMP from webpack: ",!1),i(),s()},s=()=>{var e=document.head,o=document.createElement("script");o.setAttribute("type","text/javascript"),o.setAttribute("src","https://exmpstatic.com/vid/js/video.min.js"),o.async=!0,e.appendChild(o),o.onload=function(){_("Dependency Check - video.min.js loaded"),c()}},i=()=>{var e=document.head,o=document.createElement("link");o.type="text/css",o.rel="stylesheet",o.href="https://exmpstatic.com/vid/css/vcfg_second.css",e.appendChild(o)};var n=0;const c=()=>{var e=document.getElementById("videoDivPlayer");document.getElementById("cont-jwp-gh");if(n>200)return 1;e?(_("Video Element Loaded",e),o.Hj.H7.enable_audio||(e.muted=!0),(e=>{var o=e.getAttribute("data_source_url"),t=e.getAttribute("data_source_type");""!=o&&" "!=o&&""!=t&&" "!=t?(_("Source URL is entered from video tag attributes",o),d.sourceVideo=o,d.sourceType=t,a()):(_("Source URL is not entered from video tag attributes"),a())})(e)):(n++,setTimeout(c,10))};function _(e,t){o.eM&&console.log(e,t)}"loading"!==document.readyState?setTimeout((function(){r()}),o.Wy):document.addEventListener("DOMContentLoaded",(()=>{setTimeout((function(){r()}),o.Wy)}))})();