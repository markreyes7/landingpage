const description = document.querySelector('.description')
const sunBurn = document.querySelector('.sunburn');
const title = document.querySelector('.title');
const pageNum = document.querySelector('.num');
const continued = document.querySelector('.continue');
const kodak = document.getElementById('kodak');

let messageArray = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Sed odio morbi quis commodo odio. Mattis vulputate enim nulla aliquet.",
                    "PYTHON\n \nI used python\n \nPOSTGRESQL\n \nI used POSTGRESQL"
]
let textPos = 0;
let speed = 70;
let clicked = false;
let number = 0; //this will be used for keeping track of array position.
let ele;

function typeWriter(parent){
   if (clicked){
       return;
   }

    ele = parent.firstElementChild;
    function inner(){
    
        if (textPos++ != messageArray[number].length){
            clicked = true;
            console.log("text pos is " + textPos);
             console.log("the numb is" + number)
            console.log("the message arr is " + messageArray[number].length)
            ele.innerHTML = messageArray[number].substring(0,textPos) + "<span>\u25ae</span>";
            ele.style.animation = 'none';
            
            
            if(clicked && textPos == messageArray[number].length){
                console.log("this is the ending of this function");
                indicateNext();
                return;
             }
              setTimeout(inner, speed);   
        }
    }
    
inner();

}

function indicateNext(){
    let text = document.querySelector('.continue');
   
    text.style.animation = 'blink 1.0s linear infinite';
}


function removeText(parent){
    let fastRemove = 20;
    let element = parent.firstElementChild;
    let currText = element.innerHTML;
    console.log(currText);

    let textArr = currText.split();
    let fullText = textArr[0].length; // this was the problem
    console.log(fullText);
    console.log(textArr);
    
    /*DELETE HAPPENS HERE*/
    function inner(){
        if (fullText-- != 0 ){
            element.innerHTML = textArr[0].substring(fullText,0) + "<span>\u25ae</span>";
            console.log( "rn the number is " + number)
            setTimeout(inner, fastRemove);
            //THIS WILL CHECK IF THE DELETE IS COMPLETE 
            if((number == 1 ) && (fullText == 0)){
                number = 0;
                clicked = false;
                pageNum.firstElementChild.innerHTML = '1';
                continued.firstElementChild.innerHTML = '(CONTINUED)'
                delayTypeWriter();
                return;
            }
            if (fullText == 0 && parent == description){
                console.log("rewind time")
                pageNum.firstElementChild.innerHTML = '2';
                number = 1;
                clicked = false;
                textPos = 0;
                delayTypeWriter();
                continued.firstElementChild.innerHTML = '(END)';
            }
          
        }
    }


    inner();
} 


description.addEventListener('click', delayTypeWriter)
continued.addEventListener('click', () => {
    removeText(description)
    });


function delayTypeWriter(){
   typeWriter(description);
}


/*function removeText(){
    let fastRemove = 10;
    let p = document.querySelector('div.description p');
    p.innerHTML = messageArray[0].substring(textPos,0) + "<span>\u25ae</span>";
    if(textPos-- != 0 ){
        setTimeout(removeText, fastRemove);
    }
}*/


/*function typeWriter(){
  
    let p = document.querySelector('div.description p');
    if(clicked && textPos == messageArray[number].length){
        console.log("this is the ending of this function");
        indicateNext();
        textPos=0;
        return;
    }
    
    p.innerHTML = messageArray[number].substring(0,textPos) + "<span>\u25ae</span>";
    p.style.animation = 'none';
    if (textPos++ != messageArray[number].length){
        clicked = true;
        setTimeout(typeWriter, speed);
    }

    console.log(textPos);
    
    
} */