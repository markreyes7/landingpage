//naive method of playing our audio tracks based on id getting clicked on by user.

var arr = new Array(15);

var arr2 = new Array(1,1,1,2,3,3,3,4,5,5,5,6,7,7,7,1)
var totalNum = 0;
function playE(){
    var uniqueNum = 1;
    var audio = document.getElementById("e");
    audio.currentTime = 0;
    audio.play();
    insert(uniqueNum);
    isOkay();
    console.log(countRealNum());
}
function playE2(){
    var uniqueNum =2;
    var audio = document.getElementById("e2");
    audio.currentTime = 0;
    audio.play();
    insert(uniqueNum);
    totalNum += 2;
    isOkay();
  

}

function playEFlat(){
    var uniqueNum =3;
    var audio = document.getElementById("eFlat");
    audio.currentTime = 0;
    audio.play();
    insert(uniqueNum);
    totalNum += 3;
    isOkay();

}

function playEFlat2(){
    var uniqueNum = 4;
    var audio = document.getElementById("eFlat2")
    audio.currentTime = 0;
    audio.play();
    insert(uniqueNum);
    isOkay();
    
}

function playD(){
    var uniqueNum = 5;
    var audio = document.getElementById("d");
    audio.currentTime = 0;
    audio.play();
    insert(uniqueNum);
    isOkay();
}

function playDFlat(){
    var uniqueNum = 6;
    var audio = document.getElementById("d2");
    audio.currentTime = 0;
    audio.play();
    insert(uniqueNum);
    isOkay();
}

function playA(){
    var uniqueNum =7;
    var audio = document.getElementById("a");
    audio.currentTime = 0;
    audio.play();
    insert(uniqueNum);
    isOkay();
} //end of naive functions

function insert(param){
    var num =0;
    var flag = true;
    while(flag){
    if (arr[num] == undefined)  {
            console.log("it is undefined!");
            console.log("inserting now........")
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
    console.log("printing current num");
    return num;
}

function isOkay(){
    var x = countRealNum();
    for (i =0; i < x;i++){
        if (arr[i] == arr2[i] ){
            console.log("working good.")
        }
        else if(arr[i] != arr2[i]){
            console.log("the user keys do not match the secret key");
            arr.length =3;
            }
        else if(arr[14] == arr2[14]){
            console.log("the user found the way!")
        }
    }
}