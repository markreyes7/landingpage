let section =  document.getElementById("sect");
let list = document.getElementById("list")
let root = document.documentElement;
let locations = document.querySelectorAll('li[data-location]');
console.log(locations[0].getAttribute('data-location'))

var scrollingDirection = 0; //idle
var lastScroll = 9999;
var scrollIdleTime = 300; // time interval that we consider a new scroll event
let maxProgress = 99.9;
let currProgress = 33.3
let nIntervId;
let position = 0;     //for which piece of content we are on
let currentDisplay = 0;  //defines the amount we have scrolled up. 
let scrolls = 0;


section.addEventListener('wheel',wheel);

function wheel(e){
    var delta = e.deltaY;
    var timeNow = performance.now();
    if (delta > 0 && ( scrollingDirection != 1 || timeNow > lastScroll + scrollIdleTime) ) {
        scrollUp();
        setTimeout(() => {console.log("after " + scrolls +" current display is " + currentDisplay)},4000);
        scrollingDirection = 1;
    } else if (delta < 0 && ( scrollingDirection != 2 || timeNow > lastScroll + scrollIdleTime)) {
        scrollDown();
        scrollingDirection = 2;
    }
    lastScroll = timeNow;
}

function scrollUp(){
    //TODO: CHECK RESIZE OF BROWSER.
    if (position == locations[2].getAttribute('data-location')){
        console.log('end of proj')
        return;
    }
    let height = list.clientHeight; // to change scroll based on users viewport.
    console.log(height)
    let num = 0;
    
    nIntervId = setInterval(function(){
        num += 2;
        currentDisplay += 2;
        list.style.transform = 'translateY(-' +  currentDisplay + 'px)';
        if (Math.round(num) === Math.round(height) ){
            console.log("hi")
            clearInterval(nIntervId);
        }
    }, 1)
    
    position+=1
    scrolls+=1;
}

function scrollDown(){
    if (position == locations[0].getAttribute('data-location')){
        console.log('top of proj');
        return;
    }
    let height = list.clientHeight;
    console.log(height);
    let num = 0;

    nIntervId = setInterval(function(){
        num+=1;
        currentDisplay-=1;
        list.style.transform = 'translateY(' + Math.abs(currentDisplay) *-1 + 'px)';
        if (Math.round(num) === Math.round(height)){
            console.log("hi");
            clearInterval(nIntervId);
        }
    }, 1)
    position -=1;
    scrolls +=1;
}
