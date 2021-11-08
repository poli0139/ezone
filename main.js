// import './style.css'

// document.querySelector('#app').innerHTML = `
//   <h1>Hello Vite!</h1>
//   <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
// `

//SWIPPING OF STEPS
const firstStep = document.querySelector(".firstStep");
const secondStep = document.querySelector(".secondStep");

const back1 = document.querySelector("#back1");
const continue1 = document.querySelector("#continue1");
const back2 = document.querySelector("#back2");
const continue2 = document.querySelector("#continue2");

continue1.onclick = function () {
  firstStep.style.left = "-65rem";
  secondStep.style.left = "2.8rem";
};

back2.onclick = function () {
  firstStep.style.left = "2.8rem";
  secondStep.style.left = "65rem";
};

//PASSWORD TOGGLE
