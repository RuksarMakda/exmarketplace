(()=>{"use strict";var e={d:(t,o)=>{for(var l in o)e.o(o,l)&&!e.o(t,l)&&Object.defineProperty(t,l,{enumerable:!0,get:o[l]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{q:()=>P});const t=JSON.parse('{"eM":false,"Wy":1000,"Hj":{"Zd":{"cS":100,"Bn":5000},"H7":{"enabled":true,"sourceVideo":"//hls.exmarketplace.com/Valica/Good_Move_Srl/20230414_Tvserial_TopId/m2yMuY45/index.m3u8","sourceType":"application/x-mpegURL","sourceVideoAlt":"//hls.exmarketplace.com/ExMarketPlace_FZ_LLC/EXPO2020_IT/index.m3u8","sourceTypeAlt":"application/x-mpegURL","enable_audio":false,"enable_quality":false}},"kc":{"tZ":{"Hc":{"enabled":true,"preroll_type":"google","prerollAdUnit":"/42150330,21737146126/Tvserial/Tvserial_preroll","verizon_tag_url":"/42150330,21737146126/Tvserial/Tvserial_preroll","cust_keys":[],"cust_values":[]},"Un":{"enabled":false,"midroll_type":"google","midrollAdUnit":"/42150330,21737146126/Tvserial/Tvserial_midroll","verizon_midroll_tag_url":"/42150330,21737146126/Tvserial/Tvserial_midroll","midroll_time":20,"midroll_throughout":true,"midroll_run":false},"Zf":{"enabled":false,"postroll_type":"google","postrollAdUnit":"","verizon_postroll_tag_url":"","postroll_can_run":true}},"kw":{"enabled":false,"prebid_source":"https://cdn.exmarketplace.com/bidder/prebid_adapters/pb_ap_ix_ya.js","auctionTimeout":750,"requestBidsTimeout":1000,"video_mime_types":["video/mp4","application/javascript","application/x-mpegURL","video/x-ms-wmv"],"config":{"cache":{"url":"https://prebid.adnxs.com/pbc/v1/cache"},"debug":"","enableSendAllBids":true,"targetingControls":{"alwaysIncludeDeals":true},"priceGranularity":"dense","deviceAccess":true,"timeoutBuffer":400,"bidderTimeout":3000,"pageUrl":"","ix":{"mode":"video"},"appnexus":{"mode":"video"},"yahoossp":{"mode":"video"},"consentManagement":{"gdpr":{"cmpApi":"iab","timeout":5000,"defaultGdprScope":true,"rules":[{"purpose":"storage","enforcePurpose":false,"enforceVendor":false},{"purpose":"basicAds","enforcePurpose":false,"enforceVendor":false}]},"usp":{"cmpApi":"iab","timeout":100}},"schain":{"validation":"off","config":{"ver":1,"complete":1,"nodes":[{"asi":"ExMarketplace.com","sid":0,"hp":1}]}},"userSync":{"iframeEnabled":true,"filterSettings":{"iframe":{"bidders":["ix"],"filter":"include"}}}},"bidderSettings":{"ix":{"storageAllowed":true},"appnexus":{"storageAllowed":false},"yahoossp":{"storageAllowed":false}},"bidders":[{"bidder":"ix","enabled":true,"params":{"siteId":""}},{"bidder":"appnexus","enabled":true,"params":{"placementId":0}},{"bidder":"yahoossp","enabled":true,"params":{"dcn":0,"pos":0}}]},"l6":{"overlay_mobile_ver":"bottom","overlay_mobile_ver_px":"2px","overlay_mobile_hor":"right","overlay_mobile_hor_px":"2.5%","overlay_mobile_width_ratio":95,"overlay_desktop_width_ratio":80,"overlay_desktop_ver":"top","overlay_desktop_ver_px":"94px","overlay_desktop_hor":"right","overlay_desktop_hor_px":"0px"},"a7":{"close_btn_mob_hor":"left","close_btn_mob_ver":"top","close_btn_mob_ver_px":"-45px","close_btn_mob_hor_px":"0px","close_btn_width_mob":"25px","close_btn_height_mob":"25px","close_btn_desk_hor":"left","close_btn_desk_ver":"top","desk_close_btn_desk_ver_px":"-42px","desk_close_btn_desk_hor_px":"0px","close_btn_color":"white","close_back_color":"#00486C","close_btn_width_desk":"25px","close_btn_height_desk":"25px","close_btn_1_top":"6px","close_btn_1_left":"11.5px","close_btn_1_width":"2px","close_btn_1_height":"13px","close_btn_border_radius_top":"0px","close_btn_border_radius_bottom":"0px","overlay_close_btn_time_frame":3000,"overlay_close_btn_delay":5000}},"q8":{"u":{"enabled":false,"website_link":"","poster_img_url":"","css_enabled":true,"replay_player":false}},"B$":{"ad_paused":false,"vid_paused":false,"adsMode":false,"videoEnded":false,"endedStatus":false,"isVidMobile":false,"pod_called":false,"overlay_status":false,"close_can_exec":true,"close_clicked":false,"cmp_check":false,"params_string":"","ad_fill":false,"postroll_fill":false,"postroll_ended":false}}');window,encodeURIComponent(window.location);const o={ExMp_VidCurrentLocation:window.location,ExMp_VidCurrentLocationEncoded:encodeURIComponent(window.location),preroll:t.kc.tZ.Hc,prebid:t.kc.kw,prerollTag:"",video_source:t.Hj.H7};function l(){(function(){P("New Params String 2: ",t.B$.params_string),"google"===o.preroll.preroll_type?o.prerollTag="https://pubads.g.doubleclick.net/gampad/ads?iu="+o.preroll.prerollAdUnit+"&url="+o.ExMp_VidCurrentLocationEncoded+"&description_url="+o.ExMp_VidCurrentLocationEncoded+"&tfcd=0&npa=0&sz=1x1%7C400x300%7C640x360%7C640x480%7C1280x720&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s&correlator="+t.B$.params_string:"yahoo"===o.preroll.preroll_type?o.prerollTag=o.preroll.verizon_tag_url:"general_vast"===o.preroll.preroll_type&&(o.prerollTag=o.preroll.prerollAdUnit+t.B$.params_string);P("Preroll Ad Tag: ",o.prerollTag),m(o.prerollTag)})()}const r=e=>{var o=document.querySelector("#cont-jwp"),l=document.querySelector("#cont-jwp-gh");o.setAttribute("style",""),l.setAttribute("style","");var r=e.ima.getAdsManager();null!=r&&r.resize(o.clientWidth,o.clientHeight,google.ima.ViewMode.NORMAL),null!=document.getElementById("vidclose")&&(document.getElementById("vidclose").style.display="none"),t.B$.overlay_status=!1},n=t.kc.a7,d=e=>{if("left"===n.close_btn_desk_hor)var o="left";else if("right"===n.close_btn_desk_hor)o="right";if("top"===n.close_btn_desk_ver)var l="top";else if("bottom"===n.close_btn_desk_ver)l="bottom";((e,o)=>{var l=document.createElement("style");l.styleSheet?l.styleSheet.cssText=e:l.appendChild(document.createTextNode(e)),document.head.appendChild(l);var n=document.querySelector("#cont-jwp");const d=document.createElement("div");d.innerHTML='<p id="vidclose"><span class="vidclose-btn"></span><span class="vidclose-btn2"></span></p>',n.appendChild(d),document.getElementById("vidclose").style.display="block",d.querySelector("#vidclose").addEventListener("click",(e=>{document.querySelector("#vidclose").style.display="none",r(o),t.B$.close_clicked=!0}))})("#vidclose{display:none;margin-bottom:0px;width:"+n.close_btn_width_desk+";height:"+n.close_btn_height_desk+";"+l+":"+n.desk_close_btn_desk_ver_px+";"+o+":"+n.desk_close_btn_desk_hor_px+";position:absolute;background-color:"+n.close_back_color+";box-shadow:rgba(0,0,0,.2) 0 -1px 1px 0;border-width:initial;border-style:none;border-color:initial;border-image:initial;border-radius:"+n.close_btn_border_radius_top+" "+n.close_btn_border_radius_top+" "+n.close_btn_border_radius_bottom+" "+n.close_btn_border_radius_bottom+"}#vidclose .vidclose-btn{transform:rotate(-45deg);display:block;height:"+n.close_btn_1_height+";width:"+n.close_btn_1_width+";left:"+n.close_btn_1_left+";top:"+n.close_btn_1_top+";background-color:"+n.close_btn_color+";position:absolute;}#vidclose .vidclose-btn2{transform:rotate(45deg);display:block;height:"+n.close_btn_1_height+";width:"+n.close_btn_1_width+";left:"+n.close_btn_1_left+";top:"+n.close_btn_1_top+";background-color:"+n.close_btn_color+";position:absolute;}.cam_video{object-fit: fill;}",e)},s={over_close:t.kc.a7},a=e=>{t.B$.close_can_exec=!1,t.B$.overlay_status=!0,setTimeout((function(){t.B$.overlay_status&&!t.B$.close_clicked&&(P("Overlay Status - if true, i.e. player is in overlay AND close button is not clicked, then show close button, ",t.B$.overlay_status),(e=>{d(e)})(e))}),s.over_close.overlay_close_btn_delay)},i={over_cont:t.kc.l6},c=e=>{var o=document.getElementById("cont-jwp"),l=document.querySelector("#cont-jwp-gh"),r=l.offsetWidth,n=o.clientHeight;o.style.position="fixed",P("Inside check screen",!1),Math.min(window.screen.width,window.innerWidth)<650&&(t.B$.isVidMobile=!0),o.style.zIndex="1000001",l.style.width=r+"px",l.style.height=n+"px",l.style.border="2px dotted #ccc",((e,t,o,l)=>{var r=i.over_cont.overlay_desktop_width_ratio/100,n=t*r;"right"===i.over_cont.overlay_desktop_hor?o.style.right=i.over_cont.overlay_desktop_hor_px:"left"===i.over_cont.overlay_desktop_hor&&(o.style.left=i.over_cont.overlay_desktop_hor_px),"top"===i.over_cont.overlay_desktop_ver?o.style.top=i.over_cont.overlay_desktop_ver_px:"bottom"===i.over_cont.overlay_desktop_ver&&(o.style.bottom=i.over_cont.overlay_desktop_ver_px),o.style.width=n+"px";var d=e.ima.getAdsManager();null!=d&&d.resize(l.offsetWidth*r,o.clientHeight,google.ima.ViewMode.NORMAL),a(e)})(e,r,o,l)};const _=(e,o,l)=>{t.B$.videoEnded||(!function(e,t){const o=t.getBoundingClientRect();var l=e.clientHeight;return l/2+o.top>0&&o.top+l-l/2<=(window.innerHeight||document.documentElement.clientHeight)&&o.bottom-l/2<=(window.innerHeight||document.documentElement.clientHeight)}(o,l)?t.B$.close_clicked||t.B$.overlay_status||(c(e),t.B$.overlay_status=!0):(t.B$.overlay_status=!1,P("Overlay end"),r(e)))},p=(window,encodeURIComponent(window.location),window,encodeURIComponent(window.location),window,encodeURIComponent(window.location),(e,o,l)=>{(e=>{t.B$.overlay_status||(P("Overlay 2: Ads and Content"),P("Call to Overlay Function: "),c(e))})(e)}),u=(e,t,o)=>{r(e)},v=()=>{l()},m=e=>{var o=videojs("videoDivPlayer",{autoplay:!0});if(o.fluid(!0),o.src({src:t.Hj.H7.sourceVideo,type:t.Hj.H7.sourceType}),t.Hj.H7.enable_quality){let e=o.qualityLevels();o.httpSourceSelector(),P("Quality Levels",e)}o.ima({id:"videoDivPlayer",adTagUrl:e}),o.ready((function(){const e=o.play();void 0!==e&&e.then((()=>{o.muted("false"),o.play(),o.paused()&&(o.muted("true"),o.play())})).catch((e=>{P("Video cannot autoplay as its not muted, hence force mute to autoplay",e),o.paused()&&(o.muted("true"),o.play())}))})),(e=>{const o=document.getElementById("videoDivPlayer");var l=document.getElementById("cont-jwp-gh");e.on("loadedmetadata",(function(){t.kc.tZ.Hc.enabled||(P("No Preroll Case",!0),o&&window.addEventListener("scroll",(function(t){_(e,o,l)}),!1),p(e,o,l))})),e.on("adsready",(function(){P("Ads Ready Event, may Fill or Not"),P("Preroll Case",!0),o&&window.addEventListener("scroll",(function(t){_(e,o,l)}),!1),p(e,o,l)})),e.on("ads-ad-started",(function(e){P("Ad has Started - Ad Response",e),t.kc.tZ.Zf.postroll_can_run||(t.B$.postroll_fill=!0),t.B$.ad_fill=!0})),e.on("adend",(function(){t.B$.ad_fill=!1})),/iPhone|iPad|iPod/i.test(navigator.userAgent)&&e.on("adended",(function(){t.B$.ad_fill=!1})),e.on("ended",(function(){e.currentTime()===e.duration()&&(P("Player Has Ended Playing - Confirmed"),t.B$.endedStatus=!0,P("Setting Video Ended Varable 1 as ",t.B$.endedStatus),P("Setting Video Ended Variable 2 as ",t.B$.videoEnded)),!t.B$.videoEnded&&t.B$.endedStatus?(t.B$.videoEnded=!0,P("Video Ended Variable - ",t.B$.videoEnded),t.B$.videoEnded&&r(e)):t.kc.tZ.Zf.postroll_can_run||(P("Postroll has run"),t.B$.postroll_ended=!0,u(e))}))})(o)},b=t.Hj.H7,h=()=>{__tcfapi("addEventListener",2,((e,t)=>{t?(P("CMP Check - TCF event listener registered successfully"),y(e)):(P("CMP Check - Could not register TCF event listener"),P("CMP Check - Done"))}))},y=e=>{P("CMP Check - Checking if GDPR applies"),!0===e.gdprApplies?(P("CMP Check - GDPR applies, checking event status"),f(e)):(P("CMP Check - GDPR does not apply"),t.B$.cmp_check=!0,P("CMP Check - Done"))},f=e=>{"cmpuishown"===e.eventStatus?P("CMP Check - [cmpuishown] - awaiting user consent choices"):"useractioncomplete"===e.eventStatus?(P("CMP Check - [useractioncomplete] - TC String available"),t.B$.cmp_check=!0,P("CMP Check - Done")):"tcloaded"===e.eventStatus&&(P("CMP Check - [tcloaded] - TC String available"),__tcfapi("removeEventListener",2,(e=>{e&&P("CMP Check - TCF event listener unregistered successfully")}),e.listenerId),t.B$.cmp_check=!0,P("CMP Check - Done"))};function g(){(()=>{if(P("CMP Check - Start"),"undefined"==typeof __tcfapi){P("CMP Check - TCF is undefined, starting TCF interval check");let e=t.Hj.Zd.Bn/t.Hj.Zd.cS,o=0,l=setInterval((()=>{o<e?"undefined"!=typeof __tcfapi&&(clearInterval(l),P("CMP Check - TCF is defined"),h()):(clearInterval(l),P("CMP Check - TCF interval check - Timeout"),t.B$.cmp_check=!0),o++}),t.Hj.Zd.cS)}else P("CMP Check - TCF is defined"),h()})()}const k=()=>{g(),w(),B()},w=()=>{var e=document.head,t=document.createElement("script");t.setAttribute("type","text/javascript"),t.setAttribute("src","https://www.cadslist.com/assets/hadaya/video.min.js"),t.async=!0,e.appendChild(t),t.onload=function(){P("Dependency Check - video.min.js loaded"),C()}},C=()=>{var e=document.head,t=document.createElement("script");t.setAttribute("type","text/javascript"),t.setAttribute("src","https://www.cadslist.com/assets/hadaya/videojs.ads.js"),t.async=!0,e.appendChild(t),t.onload=function(){P("Dependency Check - videojs.ads"),x()}},x=()=>{var e=document.head,t=document.createElement("script");t.setAttribute("type","text/javascript"),t.setAttribute("src","https://www.cadslist.com/assets/hadaya/videojs.ima.js"),t.async=!0,e.appendChild(t),t.onload=function(){P("Dependency Check - videojs.ima.js loaded"),T()}},B=()=>{var e=document.head,t=document.createElement("link");t.type="text/css",t.rel="stylesheet",t.href="https://cdn.exmarketplace.com/bidder/video_update/vcfg_second.css",e.appendChild(t)};var E=0;const T=()=>{var e=document.getElementById("videoDivPlayer");document.getElementById("cont-jwp-gh");if(E>200)return 1;e?(P("Video Element Loaded",e),t.Hj.H7.enable_audio||(e.muted=!0),(e=>{var t=e.getAttribute("data_source_url"),o=e.getAttribute("data_source_type");""!=t&&" "!=t&&""!=o&&" "!=o?(P("Source URL is entered from video tag attributes",t),b.sourceVideo=t,b.sourceType=o,v()):(P("Source URL is not entered from video tag attributes"),v())})(e)):(E++,setTimeout(T,10))};function P(e,t){}"loading"!==document.readyState?setTimeout((function(){k()}),t.Wy):document.addEventListener("DOMContentLoaded",(()=>{setTimeout((function(){k()}),t.Wy)}))})();