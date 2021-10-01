var start;
var stopId;
var progress;
var toggle = false;

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

function displayProjects(timestamp){
    var main = document.getElementById("main");
    if (!start || progress > 1200) start = timestamp;
    progress = (timestamp - start)/2;
    main.style.right = progress + 'px';

    if (progress == 600){
        
    }
    stopId = window.requestAnimationFrame(displayProjects);
}

function toggleAnimation(){
    if (!toggle){
        toggle = true;
        window.requestAnimationFrame(displayProjects);
    }
    else{
        toggle = false;
        cancelAnimationFrame(stopId);
    }
}