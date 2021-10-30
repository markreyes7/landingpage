let video = document.getElementById("video-bg");
let source = document.querySelector("source");
let text = document.getElementById("text");
let content = document.getElementById("content");
let header = document.getElementById("header");

let rightLine = document.getElementById("pos4");
let leftLine = document.getElementById("pos2");
let bottomLine = document.getElementById("pos3");
let topLine = document.getElementById("pos1");

let pages = new Array("/landing.html", "index.html");
let titles = new Array("SpotifyNStuff", "MapsAPI", "LandingPage");
let position = 1; // for incrementing through array.




text.textContent = titles[0];
function switchVid(){
    video.pause();
    video.appendChild(video.firstElementChild);
    video.load();
    video.play();
}

function changeTitle(){
   
    text.textContent = titles[position]
    
    position += 1;
    if (position == 3){
        position = 0;
    }
    console.log("i was called")
    
}

let changeText = setInterval(changeTitle, 4000);

let videoChange = setInterval(switchVid, 4000);

//we need to change the title name after 8 seconds.

function slideIn(){
    slideInRight();
    slideInLeft();

    video.pause();

    clearInterval(changeText);
    clearInterval(videoChange);
    fadeToBlack();

    changeHorizontalSize();
    getCurrVideo();
   setTimeout(transitionPage, 2800);
}

function slideInRight(){
    rightLine.style.right = `${50}%`;
    rightLine.classList.add("right-trans");
}

function slideInLeft(){
    leftLine.style.left = `${50}%`;
    leftLine.classList.add("left-trans");
}

function slideInTop(){
    topLine.style.top = `${47}%`;
    topLine.classList.add("top-trans");
}
function slideInBottom(){
    bottomLine.style.bottom = `${50}%`;
    bottomLine.classList.add("bottom-trans")
}

function fadeToBlack(){
    content.style.background = 'black'
    content.style.transition = 'background 3.5s 1.5s'
}

function changeHorizontalSize(){
    var horizontal = document.getElementsByClassName('horizontal');
    setTimeout(() => {  for(i = 0; i < horizontal.length; i++) {
        horizontal[i].style.width = `${209}px`;
        horizontal[i].style.transition = 'width 1.5s'
      }
    }, 2000
    )
}

function changeVerticalSize(){
    var vertical = document.getElementsByClassName('vertical');
    setTimeout(() => {
        for(i = 0; i < vertical.length; i++) {
            vertical[i].style.height = `${209}px`;
            vertical[i].style.transition = 'height 2s'
          }
        }, 1400
    )
}

function getCurrVideo(){
    var ele = video.firstElementChild.getAttribute("data-video");
    return ele;
}

function goToPage(){
    var videoStr = getCurrVideo();
    if (videoStr == "spotify"){
        window.location.href = '/spotifyProject.html'
    }
    else if(videoStr == "maps"){
        window.location.href = '/mapsProject.html'
    }
    else {
        window.location.href = '/landingPage.html'
    }
 
}

function transitionPage(){
    var horizontal = document.getElementsByClassName('horizontal');
    
    setTimeout(() => {
        leftLine.style.left =   "0";
        rightLine.style.right = "0";
        leftLine.style.width = `${100}%`;
        rightLine.style.width = `${100}%`;
        
    },1500)
    setTimeout(() => {  for(i = 0; i < horizontal.length; i++) {
        horizontal[i].style.transition = 'none';
        horizontal[i].style.height = `${100}%`;
      }
    }, 1500)

    setTimeout(() => {
        leftLine.style.transition = 'none';
        rightLine.style.transition = 'none';
        leftLine.style.top = `${0}`;
        rightLine.style.top = `${0}`;
        leftLine.style.transition = 'all 3.2s ';
        rightLine.style.transition = 'all 3.2s ';
    }, 1500)

    setTimeout(() => {
        header.style.background = 'white';
        header.style.color = 'black';
        header.style.transition = 'all 2s';
       
    }, 3600)

    
    
}