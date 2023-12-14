let interaction = document.querySelector('a:nth-of-type(12)')

interaction.addEventListener('click', jumpHandler)
interaction.addEventListener('animationend', jumpHandler)

function jumpHandler() {
  interaction.classList.toggle('jump')
}

let knop = document.querySelector("a:nth-of-type(1)");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

knop.addEventListener("click", () => {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
});





let password = document.querySelector("a:nth-of-type(2)");

password.addEventListener("focus", (event) => {
  event.target.style.background = "pink";
});

password.addEventListener("blur", (event) => {
  event.target.style.background = "";
});





function zoom(event) {
  event.preventDefault();

  scale += event.deltaY * -0.01;

  // Restrict scale
  scale = Math.min(Math.max(0.125, scale), 4);

  // Apply scale transform
  el.style.transform = `scale(${scale})`;
}

let scale = 1;
const el = document.querySelector("a:nth-of-type(3)");
el.onwheel = zoom;






let test = document.querySelector("a:nth-of-type(4)");

// This handler will be executed only once when the cursor
// moves over the unordered list
test.addEventListener(
  "mouseenter",
  (event) => {
    // highlight the mouseenter target
    event.target.style.color = "purple";

    // reset the color after a short delay
    setTimeout(() => {
      event.target.style.color = "";
    }, 500);
  },
  false,
);

// This handler will be executed every time the cursor
// is moved over a different list item
test.addEventListener(
  "mouseover",
  (event) => {
    // highlight the mouseover target
    event.target.style.color = "orange";

    // reset the color after a short delay
    setTimeout(() => {
      event.target.style.color = "";
    }, 500);
  },
  false,
);







let frontend = document.querySelector('a:nth-of-type(5)')

frontend.addEventListener('dblclick' ,

function () {
  window.open('https://www.pexels.com/search/hd/',
      'width=400,height=400 top=200,left=600');
});








let evenement = document.querySelector('a:nth-of-type(6)')

evenement.addEventListener("click", moveWithMouse, false); 

window.onmousemove = function (e) { 
  var x = e.pageX,
   y = e.pageY;
  evenement.style.top = (y) + 'px';
  evenement.style.left = (x) + 'px';
};


function moveWithMouse() {
  this.classList.add('absolute');
  this.innerHTML = "states";
  console.log('hi')
}






let design = document.querySelector('a:nth-of-type(7)')

design.addEventListener('click', groter)

function random(number) {
  return Math.floor(Math.random() * number); 
}

function randomDeg() {
  return `${random(360)}deg`; 
}

function groter() {
  this.style.rotate = randomDeg(); 
  console.log(randomDeg())
}




let button = document.querySelector('a:nth-of-type(8)')
// Selects the FIRST occurance of <button>;
let element = document.querySelector("div");

button.addEventListener("click", function() {
  element.classList.toggle("yay");
});






let object = document.querySelector('a:nth-of-type(9)')

object.addEventListener("keydown", user);

function user (m) {
  if (m.key === 'm') {
    object.classList.toggle('objecter')
  }
}







let oneclick = document.querySelector('a:nth-of-type(10)');

oneclick.addEventListener("click", (event) => {
  button.textContent = `Click count: ${event.detail}`;
});