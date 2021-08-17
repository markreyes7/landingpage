//naive method of playing our audio tracks based on id getting clicked on by user.y

var arr = new Array(15);

// const arr2 = new Array(1,1,1,2,3,3,3,4,5,5,5,6,7,7,7,1)

const arr2 = new Array('p','p','p','l','a','a','a','y','t',
                        't','t','h','e0','e0','e0','p');

let position = 0;

let attempts = 0;


/*const toChange = document.querySelector(".centerkeys");

toChange.addEventListener("mouseover", function (e){
    e.target.style.backgroundColor = 'blue';
    console.log('im the bluey')
}); */

function checker(clickedID){
    if (clickedID === arr2[position]){
        console.log("ready to be green!");
        document.getElementById(clickedID).style.color = 'green';
        position+=1;

        if (position === arr2.length){
            console.log("puzzle solved")
            console.log("animation time!!!!!!")
            position = 0;
        }
    }
    else if((clickedID !== arr2[position]) && (document.getElementById(clickedID).style.color === 'green')){
        console.log("you played this already!!!!!!")
    }
    else if(clickedID !== arr2[position]){
        
        console.log("current position is " + position);
        document.getElementById(clickedID).style.color = 'red';
        setTimeout(function(){document.getElementById(clickedID).style.color = '#acb1b1'}, 1500);
        attempts +=1;

        if(attempts > 8){
            alert('do you need help learning the way?');  /// this will instead create a button element on screen where it will direct users to get help.
            /*let mainDiv = document.createElement('div');
            let sideDiv = document.createElement('div');
            let otherSideDiv = document.createElement('div');
            let grid = document.getElementById('grid');
            mainDiv.appendChild(sideDiv);
            mainDiv.appendChild(otherSideDiv);
            mainDiv.classList.add('arrow');
            sideDiv.classList.add('line');
            otherSideDiv.classList.add('line');
            grid.appendChild(mainDiv);*/
        }
        return;
    }
    
    
}

function playE1(){
    var uniqueNum = 1;
    var audio = document.getElementById("e1");
    audio.currentTime = 0;
    audio.play();
    insert(uniqueNum);
    isOkay();
    
}
function playE2(){
    var uniqueNum =2;
    var audio = document.getElementById("e2");
    audio.currentTime = 0;
    audio.play();
    isOkay();
}

function playEFlat(){
    var uniqueNum =3;
    var audio = document.getElementById("eFlat");
    audio.currentTime = 0;
    audio.play();
 
    isOkay();
}

function playEFlat2(){
    var uniqueNum = 4;
    var audio = document.getElementById("eFlat2")
    audio.currentTime = 0;
    audio.play();
    isOkay();
    
}

function playD(){
    var uniqueNum = 5;
    var audio = document.getElementById("d");
    audio.currentTime = 0;
    audio.play();
    isOkay();
}

function playDFlat(){
    var uniqueNum = 6;
    var audio = document.getElementById("d2");
    audio.currentTime = 0;
    audio.play();
    isOkay();
}

function playA(){
    var uniqueNum =7;
    var audio = document.getElementById("aChord");
    audio.currentTime = 0;
    audio.play();
    isOkay();
} //end of naive functions

function insert(param){
    var num = 0;
    var flag = true;
    while(flag){
    if (arr[num] == undefined)  {
            console.log("it is undefined!");
            console.log("inserting now at........" + num);
            arr[num] = param;
            flag = false;
        }
    else{
        console.log("index is full at " + num);
        num++;
     }
    }
}

function countRealNum(){
    var num = 0;
    for (i=0;i<arr.length;i++){
        if(arr[i] != undefined){
            num+=1;
        }
    }
    console.log("printing current num " + num);
    return num;
}
/* uses the global array to check every iTh index. 
Can be updated in the future to optimize performance on browser */
function isOkay(){
    var x = countRealNum();
    for (i =0; i < x;i++){
        if (arr[15] == arr2[15] ){
            console.log("the user found the way!");
           //ADD JS METHOD TO PRESENT THE NEW LANDING PAGE
        }
        else if(arr[i] != arr2[i]){
            console.log("the user keys do not match the secret key at the index " + i);
            arr.length =0;          //DON'T MAKE THE USER RESTART?
            
            }
     else if(arr[i] == arr2[i]){
            console.log("working good at index " + i);
            //GET THE CURRENT ELEMENT CLICKED AND GIVE IT THE GREEN JS EFFECT
        }
    }
}

