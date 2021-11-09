// import './style.css'

// document.querySelector('#app').innerHTML = `
//   <h1>Hello Vite!</h1>
//   <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
// `

//SWIPPING OF STEPS
const intro = document.querySelector(".introSec");
const firstStep = document.querySelector(".firstStep");
const secondStep = document.querySelector(".secondStep");
const thirdStep = document.querySelector(".thirdStep");
const fourthStep = document.querySelector(".fourthStep");
const confirmation = document.querySelector(".confirmationDiv");

const join = document.querySelector("#join");
const back1 = document.querySelector("#back1");
const continue1 = document.querySelector("#continue1");
const back2 = document.querySelector("#back2");
const continue2 = document.querySelector("#continue2");
const back3 = document.querySelector("#back3");
const continue3 = document.querySelector("#continue3");
const back4 = document.querySelector("#back4");
const continue4 = document.querySelector("#continue4");
const back5 = document.querySelector("#back5");

//INTRO
join.onclick = function () {
  intro.style.left = "-65rem";
  firstStep.style.left = "2.8rem";
};

//STEP 1
back1.onclick = function () {
  intro.style.left = "2.8rem";
  firstStep.style.left = "65rem";
};

continue1.onclick = function () {
  firstStep.style.left = "-65rem";
  secondStep.style.left = "2.8rem";
};

//STEP 2
back2.onclick = function () {
  firstStep.style.left = "2.8rem";
  secondStep.style.left = "65rem";
};

continue2.onclick = function () {
  secondStep.style.left = "-65rem";
  thirdStep.style.left = "2.8rem";
};

//STEP 3
back3.onclick = function () {
  secondStep.style.left = "2.8rem";
  thirdStep.style.left = "65rem";
};

continue3.onclick = function () {
  thirdStep.style.left = "-65rem";
  fourthStep.style.left = "2.8rem";
};

//STEP 4
back4.onclick = function () {
  thirdStep.style.left = "2.8rem";
  fourthStep.style.left = "65rem";
};

continue4.onclick = function () {
  fourthStep.style.left = "-65rem";
  confirmation.style.left = "2.8rem";
};

//CONFIRMATION
back5.onclick = function () {
  intro.style.left = "2.8rem";
  firstStep.style.left = "65rem";
  confirmation.style.left = "65rem";
  secondStep.style.left = "65rem";
  thirdStep.style.left = "65rem";
  fourthStep.style.left = "65rem";
};

//PASSWORD TOGGLE
document.querySelector("#eye").addEventListener("click", togglePW);
document.querySelector("#eye2").addEventListener("click", togglePW2);

function togglePW() {
  const password = document.querySelector("[name=password]");

  if (password.getAttribute("type") === "password") {
    password.setAttribute("type", "text");
    document.getElementById("eye").style.color = "white";
  } else {
    password.setAttribute("type", "password");
    document.getElementById("eye").style.color = "#6a678b";
  }
}

function togglePW2() {
  const repeatPassword = document.querySelector("[name=repeatPassword]");

  if (repeatPassword.getAttribute("type") === "password") {
    repeatPassword.setAttribute("type", "text");
    document.getElementById("eye2").style.color = "white";
  } else {
    repeatPassword.setAttribute("type", "password");
    document.getElementById("eye2").style.color = "#6a678b";
  }
}
