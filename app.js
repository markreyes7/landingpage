const description = document.querySelector('.description')
const sunBurn = document.querySelector('.sunburn');
const title = document.querySelector('.title');

const bold = document.querySelector('.bold');

let messageArray = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Libero nunc consequat interdum varius sit amet mattis. Eu sem integer vitae justo eget magna fermentum. Amet purus gravida quis blandit turpis cursus in hac. Velit ut tortor pretium viverra. Nunc sed augue lacus viverra vitae congue eu consequat. Ut aliquam purus sit amet luctus. Justo nec ultrices dui sapien eget mi. Fringilla phasellus faucibus scelerisque eleifend. Sed odio morbi quis commodo odio. Mattis vulputate enim nulla aliquet."]
let textPos = 0;
let speed = 70;
let clicked = false;
let num;

function typeWriter(){
    let p = document.querySelector('div.description p');
    if(clicked && textPos == messageArray[0].length){
        console.log("the count is " + textPos);
        displayNew();
        return;
    }
    
    p.innerHTML = messageArray[0].substring(0,textPos) + "<span>\u25ae</span>";
    p.style.animation = 'none';
    if (textPos++ != messageArray[0].length){
        clicked = true;
        setTimeout(typeWriter, speed);
    }

    console.log(textPos);
    
    
}

function displayNew(){
    let bold = document.querySelector('.bold');
    bold.style.animation = 'blink 1.0s linear infinite';
}

/*function removeText(){
    let fastRemove = 10;
    let p = document.querySelector('div.description p');
    p.innerHTML = messageArray[0].substring(textPos,0) + "<span>\u25ae</span>";
    if(textPos-- != 0 ){
        setTimeout(removeText, fastRemove);
    }
}*/



function removeText(parent){
    let fastRemove = 100;
    let element = parent.firstElementChild;
    let currText = element.innerHTML;
    console.log(currText);

    
    let textArr = currText.split();
    let fullText = textArr[0].length; // thiws is the problem
    console.log(fullText);
    console.log(textArr);

        function inner(){
        if (fullText-- != 0 ){
            element.innerHTML = textArr[0].substring(fullText,0) + "<span>\u25ae</span>";
            setTimeout(inner, fastRemove);
        }

    }
    inner();
    


    /*if(fullText-- != 0 ){
        setTimeout(removeText(parent), fastRemove);
    }*/
} 


description.addEventListener('click', typeWriter);
bold.addEventListener('click', () => {
     removeText(title);
     removeText(description);
    });