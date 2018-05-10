var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/IMG_6569.jpg') {
      myImage.setAttribute ('src','images/照片 1314_副本.jpg');
    } else {
      myImage.setAttribute ('src','images/IMG_6569.jpg');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mylove, ' + myName;
  }
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    //var storedName = localStorage.getItem('name');
    //myHeading.innerHTML = 'My Love, ' + storedName;
    setUserName();
  }
  myButton.onclick = function() {
    setUserName();
  }