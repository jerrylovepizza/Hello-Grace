window.onload=function(){
    let myImage = document.querySelector('img');
    myImage.onclick = function(){
        let mySrc = myImage.getAttribute('src');
        if(mySrc === 'images/pic1.jpg'){
            myImage.setAttribute('src','images/pic3.jpg');
        }else{
            myImage.setAttribute('src','images/pic1.jpg');
        }
    }
}
function setHeading(Jerry){
    let myHeading = document.querySelector('h1');
    myHeading.textContent = 'Hello!' + Jerry + '!'; 
}
function setuserName(){
    let myName = prompt('Please enter your name');
    localStorage.setItem('name',myName);
    setHeading(myName);
}
let storedName = localStorage.getItem('name');
if(!storedName){
    setUserName();
}else {
    setHeading(storedName);
}
let myButton = document.querySelector('button');
myButton.onclick = setUserName;
