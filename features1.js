let section =  document.getElementById("sect");
let list = document.getElementById("list")
let root = document.documentElement;
let progressValue = document.getElementById("progress-value");
let locations = document.querySelectorAll('li[data-location]');
console.log(locations[0].getAttribute('data-location'))


var scrollingDirection = 0; //idle
var lastScroll = 9999;
var scrollIdleTime = 300; // time interval that we consider a new scroll event
let maxProgress = 99.9;
let currProgress = 33.3
let nIntervId;
let position = 0;     //for which piece of content we are on
let amountMoved = 0;  //defines the amount we have scrolled up. 
let running =  false;


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

//window resize

window.onresize = function (){
    var ourEle = locations[position];
    
    if (position === 0 ){
        amountMoved = 0;
    }
    else if (position === 1){
        amountMoved = ourEle.clientHeight;
    }
    else if (position ===2){
        amountMoved = ourEle.clientHeight * 2
    }

} 

function scrollUp(amount){
    //TODO: CHECK RESIZE OF BROWSER.

    if (running === true ){
        return;
    }
    if (position == locations[2].getAttribute('data-location')){
        console.log('end of proj')
        return;
    }
    let height = list.clientHeight; // to change scroll based on users viewport.
    console.log(height)
    let num = 0;
    running = true;
    
    nIntervId = setInterval(function(){
        num += 1;
        amountMoved += 1;
        list.style.transform = 'translateY(-' +  amountMoved + 'px)';
        if (Math.round(num) === Math.round(height) ){
            console.log("hi")
            running = false
            clearInterval(nIntervId);
        }
    }, 1)
    progression();
    position+=1
    
}

function scrollDown(){
    if (running === true){
        return;
    }

    if (position == locations[0].getAttribute('data-location')){
        console.log('top of proj');
        return;
    }
    let height = list.clientHeight;
    console.log(height);
    let num = 0;
    running = true;
    nIntervId = setInterval(function(){
        num+=1;
        amountMoved-=1;
        list.style.transform = 'translateY(' + Math.abs(amountMoved) *-1 + 'px)';
        if (Math.round(num) === Math.round(height)){
            console.log("hi");
            running = false;
            clearInterval(nIntervId);
        }
    }, 1)
    regression();
    position -=1;
   
}

function progression(){
    currProgress += 33.3;
    console.log('curr progress is ' + currProgress);
    if(Math.round(currProgress) === Math.round(maxProgress) ){        //needs work. Math.round() is used since 33.3 + 66.6 == about 99.89.....
        progressValue.style.height = 100 + '%'
        return;

    }
    progressValue.style.height = currProgress + '%';
}

function regression(){
    currProgress -= 33.3;
    console.log('curr progress is ' + currProgress);
    if (Math.round(currProgress) === 0){
        progressValue.style.height = 0;
        return;
      }
    progressValue.style.height = currProgress +'%';
}

function youClicked(obj){
    position = obj.getAttribute('data-project');
    console.log(position + " >")
    if ((position == 0) ){
        currProgress = 33.3;
       
        root.style.setProperty('--pixel-count', amountMoved *-1 + 'px');
        list.style.animation = 'jumpTo 1.5s';
        progressValue.style.height = 33.3 + '%';
       
        setTimeout(() =>{
            amountMoved = 0;
            root.style.setProperty('--pixel-count', amountMoved);
            list.style.transform = 'translateY('+ amountMoved + ')';
            console.log("moved")
            list.style.animation = 'none'
        }, 1500) ;
        
    }
    else if(position == 1){ 
        //set a new position. subtract or add the client height by the amount moved.
        position = obj.getAttribute('data-project');

            currProgress = 66.6;
            root.style.setProperty('--pixel-count', amountMoved *-1 + 'px');
            list.style.animation = 'jumpTo 1.5s';
            progressValue.style.height = 66.6 + '%';

            setTimeout(() =>{
                amountMoved 
                root.style.setProperty('--pixel-count', amountMoved);
                list.style.transform = 'translateY('+ amountMoved + ')';
                console.log("moved")
                list.style.animation = 'none'
            }, 1500);
        
    }
    else if(position == 2){

    }
}