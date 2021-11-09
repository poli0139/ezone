// import './style.css'

// document.querySelector('#app').innerHTML = `
//   <h1>Hello Vite!</h1>
//   <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
// `

//SWIPPING OF STEPS
const firstStep = document.querySelector(".firstStep");
const secondStep = document.querySelector(".secondStep");
const thirdStep = document.querySelector(".thirdStep");

const back1 = document.querySelector("#back1");
const continue1 = document.querySelector("#continue1");
const back2 = document.querySelector("#back2");
const continue2 = document.querySelector("#continue2");
const back3 = document.querySelector("#back3");
const continue3 = document.querySelector("#continue3");

continue1.onclick = function () {
  firstStep.style.left = "-65rem";
  secondStep.style.left = "2.8rem";
};

back2.onclick = function () {
  firstStep.style.left = "2.8rem";
  secondStep.style.left = "65rem";
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
