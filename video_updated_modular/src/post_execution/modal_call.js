import settings from "../config/settings.json";
import { replay_player } from "./replay_player";

const mod_set = {
    mod: settings.post_execution.modal_settings
}

export const modal_call = (player) => {
    var ele = document.querySelector('#videoDivPlayer');
    const modalOpen = document.createElement('div');
    modalOpen.innerHTML = `
    <div id="modal" class="vjs-tech">
      <a><button type="button" id="button1">Play Again</button></a>
      <a href="${mod_set.mod.website_link}" target="_blank"><button type="button" id="button2">Visit Website</button></a>
      <a><div id="replay-video"> <i class="fa fa-repeat"></i></div></a>
      <a href="${mod_set.mod.website_link}" target="_blank">
        <div id="arrow-video"><i class="fa fa-arrow-right"></i></div>
      </a>
    </div>`;
    ele.appendChild(modalOpen);

    if(modal_css){
        modal_style(player);
    }

    else {
        modal_func(player);
    }

}

const modal_style = (player) => {
    let myModal = document.querySelector("#modal");
    myModal.style.backgroundColor = "#424242";
    myModal.style.backgroundImage=`url(${mod_set.mod.poster_img_url})`;
    myModal.style.backgroundSize="cover";
    myModal.style.backgroundRepeat="no-repeat";
    myModal.style.width="100%";
    myModal.style.height="100%";
    myModal.style.fontFamily="open,sans-serif";
    myModal.style.opacity="0.97";
    myModal.style.position="absolute";
    myModal.style.zIndex="1";

    let myBtn1 = document.querySelector("#button1");
    myBtn1.style.display = "inline-block";
    myBtn1.style.fontSize="medium";
    myBtn1.style.position="absolute";
    myBtn1.style.top="40%";
    myBtn1.style.left="10%";
    myBtn1.style.padding="1% 2% 1% 2%";
    myBtn1.style.color="#fff";
    myBtn1.style.border="2px solid #fff";
    myBtn1.style.cursor="pointer";
     
    let myBtn2 = document.querySelector("#button2");
    myBtn2.style.display = "inline-block";
    myBtn2.style.fontSize="medium";
    myBtn2.style.position="absolute";
    myBtn2.style.top="40%";
    myBtn2.style.right="10%";
    myBtn2.style.padding="1% 2% 1% 2%";
    myBtn2.style.color="#fff";
    myBtn2.style.border="2px solid #fff";
    myBtn2.style.cursor="pointer";
     
    let myReplay = document.querySelector("#replay-video");
    myReplay.style.display = "inline-block";
    myReplay.style.fontSize="x-large";
    myReplay.style.position="absolute";
    myReplay.style.top="60%";
    myReplay.style.left="20%";
    myReplay.style.padding="2% 2% 2% 2%";
    myReplay.style.color="#fff";
    myReplay.style.border="1px #fff";
     
    let myArrow = document.querySelector("#arrow-video");
    myArrow.style.display = "inline-block";
    myArrow.style.fontSize="x-large";
    myArrow.style.position="absolute";
    myArrow.style.top="60%";
    myArrow.style.right="23%";
    myArrow.style.padding="2% 2% 2% 2%";
    myArrow.style.color="#fff";
    myArrow.style.border="1px #fff";
     
    modal_func(player);
}

const modal_func = (player) => {
    document.getElementById('replay-video').addEventListener('click', (event) => {
        if(replay_func){
            replay_player(player);
        }

        else {
            alert("Please enable the replay feature to use this function");
        }
    })
       
    document.getElementById('button1').addEventListener('click', (event) => {
        if(replay_func){
            replay_player(player);
        }

        else {
            alert("Please enable the replay feature to use this function");
        }    })
}