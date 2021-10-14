let section =  document.getElementById("sect");
let list = document.getElementById("list")
let root = document.documentElement;

var scrollingDirection = 0; //idle
var lastScroll = 9999;
var scrollIdleTime = 300; // time interval that we consider a new scroll event
let maxProgress = 99.9;
let currProgress = 33.3
let nIntervId;

section.addEventListener('wheel',wheel);

function wheel(e){
    var delta = e.deltaY;
    var timeNow = performance.now();
    if (delta > 0 && ( scrollingDirection != 1 || timeNow > lastScroll + scrollIdleTime) ) {
        scrollUp();
        scrollingDirection = 1;
    } else if (delta < 0 && ( scrollingDirection != 2 || timeNow > lastScroll + scrollIdleTime)) {
        scrollDown();
        scrollingDirection = 2;
    }
    lastScroll = timeNow;
}

function scrollUp(){
    console.log("scrolly poly")
    let num = 0 ; 
    nIntervId = setInterval(function(){
        num-= 2;
        list.style.transform = 'translateY(' + num + 'px)';
        if (num === -500 ){
            clearInterval(nIntervId);
        }
    }, 5)

    
    root.style.setProperty('--pixel-count', num +'px');
    list.style.transform = 'translateY(var(--pixel-count))'
}