let video = document.getElementById("video-bg");
let source = document.querySelector("source");



function switchVid(){
    video.pause();
    video.appendChild(video.firstElementChild);
    video.load();
    video.play();
}

setInterval(switchVid, 8000);

function fadeToBlack(){

}