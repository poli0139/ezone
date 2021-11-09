"use strict";

//SWIPPING OF STEPS
const intro = document.querySelector(".introSec");
const stepsNumbers = document.querySelector(".stepRow");
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
  stepsNumbers.style.left = "13rem";
};

//STEP 1
back1.onclick = function () {
  intro.style.left = "2.8rem";
  firstStep.style.left = "65rem";
  stepsNumbers.style.left = "65rem";
};

continue1.onclick = function () {
  firstStep.style.left = "-65rem";
  secondStep.style.left = "2.8rem";

  //COLOR CHANGES
  stepsNumbers.style.color = "#DFFCDF";
  document.querySelectorAll(".number").forEach((e) => {
    e.style.borderColor = "#DFFCDF";
  });
  document.querySelector(".stepOne").style.backgroundColor = "#DFFCDF";
  document.querySelector(".stepTwo").style.backgroundColor = "#DFFCDF";
  document.querySelector(".stepTwo").style.color = "#2b2e4b";
  document.querySelector(".stepThree").style.color = "#DFFCDF";
  document.querySelector(".stepFour").style.color = "#DFFCDF";
  document.querySelectorAll(".numberLine").forEach((e) => {
    e.style.backgroundColor = "#DFFCDF";
  });
};

//STEP 2
back2.onclick = function () {
  firstStep.style.left = "2.8rem";
  secondStep.style.left = "65rem";

  //COLOR CHANGES
  stepsNumbers.style.color = "#cacefc";
  document.querySelectorAll(".number").forEach((e) => {
    e.style.borderColor = "#cacefc";
  });
  document.querySelector(".stepOne").style.backgroundColor = "#cacefc";
  document.querySelector(".stepTwo").style.backgroundColor = "#2b2e4b";
  document.querySelector(".stepTwo").style.color = "#cacefc";
  document.querySelector(".stepThree").style.color = "#cacefc";
  document.querySelector(".stepFour").style.color = "#cacefc";
  document.querySelectorAll(".numberLine").forEach((e) => {
    e.style.backgroundColor = "#cacefc";
  });
};

continue2.onclick = function () {
  secondStep.style.left = "-65rem";
  thirdStep.style.left = "2.8rem";

  //COLOR CHANGES
  stepsNumbers.style.color = "#ffb591";
  document.querySelectorAll(".number").forEach((e) => {
    e.style.borderColor = "#ffb591";
  });
  document.querySelector(".stepOne").style.backgroundColor = "#ffb591";
  document.querySelector(".stepTwo").style.backgroundColor = "#ffb591";
  document.querySelector(".stepThree").style.backgroundColor = "#ffb591";
  document.querySelector(".stepThree").style.color = "#2b2e4b";
  document.querySelector(".stepFour").style.color = "#ffb591";
  document.querySelectorAll(".numberLine").forEach((e) => {
    e.style.backgroundColor = "#ffb591";
  });
};

//STEP 3
back3.onclick = function () {
  secondStep.style.left = "2.8rem";
  thirdStep.style.left = "65rem";

  //COLOR CHANGES
  stepsNumbers.style.color = "#DFFCDF";
  document.querySelectorAll(".number").forEach((e) => {
    e.style.borderColor = "#DFFCDF";
  });
  document.querySelector(".stepOne").style.backgroundColor = "#DFFCDF";
  document.querySelector(".stepTwo").style.backgroundColor = "#DFFCDF";
  document.querySelector(".stepTwo").style.color = "#2b2e4b";
  document.querySelector(".stepThree").style.backgroundColor = "#2b2e4b";
  document.querySelector(".stepThree").style.color = "#DFFCDF";
  document.querySelector(".stepFour").style.backgroundColor = "#2b2e4b";
  document.querySelector(".stepFour").style.color = "#DFFCDF";
  document.querySelectorAll(".numberLine").forEach((e) => {
    e.style.backgroundColor = "#DFFCDF";
  });
};

continue3.onclick = function () {
  thirdStep.style.left = "-65rem";
  fourthStep.style.left = "2.8rem";

  //COLOR CHANGES
  stepsNumbers.style.color = "#cacefc";
  document.querySelectorAll(".number").forEach((e) => {
    e.style.borderColor = "#cacefc";
  });
  document.querySelector(".stepOne").style.backgroundColor = "#cacefc";
  document.querySelector(".stepTwo").style.backgroundColor = "#cacefc";
  document.querySelector(".stepThree").style.backgroundColor = "#cacefc";
  document.querySelector(".stepFour").style.backgroundColor = "#cacefc";
  document.querySelector(".stepFour").style.color = "#2b2e4b";
  document.querySelectorAll(".numberLine").forEach((e) => {
    e.style.backgroundColor = "#cacefc";
  });
};

//STEP 4
back4.onclick = function () {
  thirdStep.style.left = "2.8rem";
  fourthStep.style.left = "65rem";

  //COLOR CHANGES
  stepsNumbers.style.color = "#ffb591";
  document.querySelectorAll(".number").forEach((e) => {
    e.style.borderColor = "#ffb591";
  });
  document.querySelector(".stepOne").style.backgroundColor = "#ffb591";
  document.querySelector(".stepTwo").style.backgroundColor = "#ffb591";
  document.querySelector(".stepThree").style.backgroundColor = "#ffb591";
  document.querySelector(".stepThree").style.color = "#2b2e4b";
  document.querySelector(".stepFour").style.color = "#ffb591";
  document.querySelector(".stepFour").style.backgroundColor = "#2b2e4b";
  document.querySelectorAll(".numberLine").forEach((e) => {
    e.style.backgroundColor = "#ffb591";
  });
};

continue4.onclick = function () {
  fourthStep.style.left = "-65rem";
  stepsNumbers.style.left = "-65rem";
  confirmation.style.left = "2.8rem";
};

//CONFIRMATION
back5.onclick = function () {
  intro.style.left = "2.8rem";
  stepsNumbers.style.left = "65rem";
  firstStep.style.left = "65rem";
  confirmation.style.left = "65rem";
  secondStep.style.left = "65rem";
  thirdStep.style.left = "65rem";
  fourthStep.style.left = "65rem";

  //COLOR CHANGES
  stepsNumbers.style.color = "#cacefc";
  document.querySelectorAll(".number").forEach((e) => {
    e.style.borderColor = "#cacefc";
  });
  document.querySelector(".stepOne").style.color = "#2b2e4b";
  document.querySelector(".stepOne").style.backgroundColor = "#cacefc";
  document.querySelector(".stepTwo").style.color = "#cacefc";
  document.querySelector(".stepTwo").style.backgroundColor = "#2b2e4b";
  document.querySelector(".stepThree").style.color = "#cacefc";
  document.querySelector(".stepThree").style.backgroundColor = "#2b2e4b";
  document.querySelector(".stepFour").style.color = "#cacefc";
  document.querySelector(".stepFour").style.backgroundColor = "#2b2e4b";
  document.querySelectorAll(".numberLine").forEach((e) => {
    e.style.backgroundColor = "#cacefc";
  });
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
