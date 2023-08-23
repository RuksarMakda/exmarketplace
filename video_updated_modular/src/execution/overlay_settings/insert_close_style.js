import settings from "../../config/settings.json";
import { close_overlay } from "./close_overlay";


export const insert_close_style = (css, player) => {
    var style = document.createElement('style');
    if (style.styleSheet) {
        style.styleSheet.cssText = css;
    } 
    
    else {
        style.appendChild(document.createTextNode(css));
    }
    
    document.head.appendChild(style);

    var ele = document.querySelector('#cont-jwp');
    const appClose = document.createElement('div')
    appClose.innerHTML = `<p id="vidclose"><span class="vidclose-btn"></span><span class="vidclose-btn2"></span></p>`;
    ele.appendChild(appClose);

    document.getElementById('vidclose').style.display = 'block';

    appClose.querySelector("#vidclose").addEventListener("click", (event) => {
        document.querySelector("#vidclose").style.display = 'none'; // hide 
        close_overlay(player);
        settings.script_variables.close_clicked = true;
    })

}


