//naive method of playing our audio tracks based on id getting clicked on by user.y

var arr = new Array(15);

// const arr2 = new Array(1,1,1,2,3,3,3,4,5,5,5,6,7,7,7,1)

const arr2 = new Array('p','p','p','l','a','a','a','y','t',
                        't','t','h','e0','e0','e0','p');
let center = document.getElementById("center");
let position = 0;

let attempts = 0;

/*CREATE FUNCTION THAT WILL ADD HOVER EFFECT ON ALL OUR CENTERFLEX KEYS SO WE CAN TURN IT OFF
DONE !!!!
*/ 

function checker(clickedID){
    
    if (clickedID === arr2[position]){
        console.log("ready to be green!");
        arr[position] = arr2[p];
        
        
        let num = 0;
        let curr = document.getElementById(clickedID);
        let id = setInterval(frameGreen, 10)
        

        function frameGreen(){
            if (num === 30){
                clearInterval(id);
            }
            else{
                num++;
                curr.style.boxShadow = '0px 0px '+ num + 'px 9px green'
            }
        }
        

     
        

        if (position === arr2.length){
        /*transition should go here*/
            position = 0;
            
        }
        if (attempts > 5){
        setTimeout(function(){document.getElementById(arr2[position]).style.boxShadow = ' 0 0 5px 2px green inset , 0px 0px '+ '12px ' +'12px ' + 'green'}, 850);
        console.log("you reached me");
        }
        

        else{
            console.log("correct!")
        }
        position+=1;
    }

    
    else if(clickedID !== arr2[position]){

        let num = 0;
        let curr = document.getElementById(clickedID);
        let id = setInterval(frameRed, 30)
        
        console.log("current position is " + position);
        function frameRed(){
            if (num === 30){
                clearInterval(id);
            }
            else{

                num++;
                curr.style.boxShadow = ' 0px 0px '+ num + 'px ' +'9px ' + 'red';
                setTimeout(function(){document.getElementById(clickedID).style.boxShadow = 'none'}, 810);
            }
        }
        
        attempts +=1;

        if(attempts > 5){
            alert('FOLLOW THE GREEN');
            let btn = document.createElement('div');
            btn.textContent = 'Skip the secret';
            btn.setAttribute('id', 'buttonStyle');
            center.appendChild(btn);
            setTimeout(function(){document.getElementById(arr2[position]).style.boxShadow = ' 0 0 5px 2px green inset ,0px 0px '+ '12px ' +'12px ' + 'green'}, 850);
            /* add the help button*/
        }
        return;
    }
    
}

function whiteHover(x){
    x.style.boxShadow = '0 0 5px 2px rgb(131, 130, 130) inset, 0 0 10px 5px rgb(184, 181, 181)';
    x.style.border = '1px transparent rgb(184, 181, 181)';

}

function removeHover(x){
    x.style.boxShadow = 'none';
    x.style.border = 'none';
}

function playE1(){
    var uniqueNum = 1;
    var audio = document.getElementById("e1");
    audio.currentTime = 0;
    audio.play();
    insert(uniqueNum);

    
}
function playE2(){
    var uniqueNum =2;
    var audio = document.getElementById("e2");
    audio.currentTime = 0;
    audio.play();
    
}

function playEFlat(){
    var uniqueNum =3;
    var audio = document.getElementById("eFlat");
    audio.currentTime = 0;
    audio.play();
 
    
}

function playEFlat2(){
    var uniqueNum = 4;
    var audio = document.getElementById("eFlat2")
    audio.currentTime = 0;
    audio.play();
   
    
}

function playD(){
    var uniqueNum = 5;
    var audio = document.getElementById("d");
    audio.currentTime = 0;
    audio.play();
  
}

function playDFlat(){
    var uniqueNum = 6;
    var audio = document.getElementById("d2");
    audio.currentTime = 0;
    audio.play();
   
}

function playA(){
    var uniqueNum =7;
    var audio = document.getElementById("aChord");
    audio.currentTime = 0;
    audio.play();
   
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


