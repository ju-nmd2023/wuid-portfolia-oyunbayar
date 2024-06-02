// Defining variables for later use
var myElement = document.getElementById('nav-menu-mobile');
var addButton = document.getElementById('menu');
var Addoverlay = document.getElementById("overlay");
var body = document.getElementById("body");

// Add an event listener to the menu button
addButton.addEventListener('click', function() {
    
  // Add both nav-menu-mobile and nav-menu-mobile-active to the existing classes when the button is clicked
  myElement.classList.add('nav-menu-mobile-active');
});

function showImg(){
    Addoverlay.style.display="grid";
    body.style.overflow="hidden";
}

function closeOverlay(){
    Addoverlay.style.display="none";
    body.style.overflow="visible";
}
function closeMenu() {
    myElement.classList.remove('nav-menu-mobile-active');
}
  