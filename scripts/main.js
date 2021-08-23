var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello!';

// document.querySelector('html').onclick = function (){
//     alert('Test123');
// }

var myImage = document.querySelector('img');
var myButton = document.querySelector('button');

function setUserName() {
    let myName = prompt('Please enter your name.');
   
    if(!myName || myName === null) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'Hello, ' + myName;
    }
}
if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'Hello, ' + storedName;
}

myButton.onclick = function() {
    setUserName()
}

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/test.png') {
        myImage.setAttribute('src','images/other.png');
    } else {
        myImage.setAttribute('src','images/test.png');
    }
}


