let start, previousTimeStamp;

let list = document.getElementById("list");
let content = document.getElementById("main-content");
let allList = list.querySelectorAll("li");
let progressValue = document.getElementById("progress-value")


let arr = [allList[0].dataset.location, allList[1].dataset.location, allList[2].dataset.location];
let root = document.documentElement;
var position = 0;   //position to be changed in keeping track of scrolling up or down.



var scrollingDirection = 0; //idle
var lastScroll = 9999;
var scrollIdleTime = 300; // time interval that we consider a new scroll event
let maxProgress = 99.9;
let currProgress = 33.3





list.addEventListener('wheel',wheel);



function popup(){
    var mainDiv = document.getElementById("main");
    var contentDiv = document.getElementById("content");
    if (checkExistance()){
        console.log("Exists");
    }
    else{
    var btnDiv = document.createElement("div");
    btnDiv.setAttribute("id","buttonStyle");
    var btn = document.createElement("button");
    btn.setAttribute("id","proj" )
    btn.textContent = "SpotifyNStuff";
    btn.style.fontFamily = "Didot";
    btnDiv.appendChild(btn);
    console.log("making the button")
    mainDiv.appendChild(btnDiv);
    contentDiv.style.filter = 'blur(2px)'
    }
} 

function slideOut(){
    var btn = document.getElementById("buttonStyle");
    var contentDiv = document.getElementById("content");
    var proj = document.getElementById("proj");
    proj.style.textContent = ''
    btn.style.animation = 'slideDown 1.0s';
    setTimeout(function(){contentDiv.style.filter = 'blur(0)'},600);
    setTimeout(function(){btn.remove();}, 900);
}

function checkExistance(){
    var checker = !!document.getElementById("buttonStyle");
    return checker;
}



/*    -----------      from sketch    ----------------       */






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

function scrollUp(){           //function for going up
    if (position == 0){
        root.style.setProperty('--pixel-count', arr[position +1] + 'px');
        list.style.animation = 'moveDown 1.4s';
        list.style.transform = 'translateY(var(--pixel-count))';
        console.log("uppies");
        progression();
        position +=1;
    }
    else if(position == 1){
        root.style.setProperty('--pixel-count', arr[position +1] + 'px');
        list.style.animation = 'moveDownFurther 1.4s';
        list.style.transform = 'translateY(var(--pixel-count))';
        console.log("uppies part 2");
        progression();
        position +=1;
    }
}

function scrollDown(){
    if (position == 2){
        root.style.setProperty('--pixel-count', arr[position-1]+'px');
        list.style.animation = 'moveUp 1.4s';
        list.style.transform = 'translateY(var(--pixel-count))';
        console.log("downies")
        regression();
        position -=1;
    }
    else if (position == 1){
        root.style.setProperty('--pixel-count', arr[position-1]+'px');
        list.style.animation = 'moveUpFurther 1.4s';
        list.style.transform = 'translateY(var(--pixel-count))';
        console.log("downies part 2");
        regression();
        position -=1;
    }
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