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
const formSection = document.querySelector(".formSteps");

const firstName = document.querySelector(
  "form[name='info'] input[name='firstName']"
);
const toImproveCheckbox = document.querySelectorAll(
  "form[name='firstStep'] input[name='toImprove']"
);
const gameTypeCheckbox = document.querySelectorAll(
  "form[name='secondStep'] input[name='gameType']"
);
const gameCheckbox = document.querySelectorAll(
  "form[name='thirdStep'] input[name='game']"
);

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
  let result = checkIfValid(firstName);
  // console.log(result);
  if (result == true) {
    document
      .querySelector("form[name='info']")
      .addEventListener("submit", function (e) {
        e.preventDefault();
      });
    intro.style.left = "-65rem";
    firstStep.style.left = "2.8rem";
    formSection.classList.remove("themeGreen");
    formSection.classList.remove("themeOrange");
    formSection.classList.add("themeBlue");
  } else {
    document.querySelector("form[name='info'] p").classList.remove("hidden");
  }
};

//STEP 1
back1.onclick = function () {
  intro.style.left = "2.8rem";
  firstStep.style.left = "65rem";
  formSection.classList.remove("themeGreen");
  formSection.classList.remove("themeOrange");
  formSection.classList.remove("themeBlue");
};

continue1.onclick = function () {
  // let selected = document.querySelectorAll(
  //   "input[name=toImptove]:checked"
  // ).length;
  // console.log(selected);
  getCheckboxCount();
  if (getCheckboxCount() == 0) {
    document
      .querySelector("form[name=firstStep] .err-message")
      .classList.remove("hidden");
  } else {
    firstStep.style.left = "-65rem";
    secondStep.style.left = "2.8rem";
    formSection.classList.remove("themeBlue");
    formSection.classList.remove("themeOrange");
    formSection.classList.add("themeGreen");
  }
};

//STEP 2
back2.onclick = function () {
  firstStep.style.left = "2.8rem";
  secondStep.style.left = "65rem";
  formSection.classList.remove("themeGreen");
  formSection.classList.remove("themeOrange");
  formSection.classList.add("themeBlue");
};

continue2.onclick = function () {
  getCheckboxCount();
  if (getCheckboxCount() == 0) {
    document
      .querySelector("form[name=secondStep] .err-message")
      .classList.remove("hidden");
  } else {
    secondStep.style.left = "-65rem";
    thirdStep.style.left = "2.8rem";
    formSection.classList.remove("themeGreen");
    formSection.classList.remove("themeBlue");
    formSection.classList.add("themeOrange");
  }
};

//STEP 3
back3.onclick = function () {
  secondStep.style.left = "2.8rem";
  thirdStep.style.left = "65rem";
  formSection.classList.remove("themeBlue");
  formSection.classList.remove("themeOrange");
  formSection.classList.add("themeGreen");
};

continue3.onclick = function () {
  getCheckboxCount();
  if (getCheckboxCount() == 0) {
    document
      .querySelector("form[name=thirdStep] .err-message")
      .classList.remove("hidden");
  } else {
    thirdStep.style.left = "-65rem";
    fourthStep.style.left = "2.8rem";
    formSection.classList.remove("themeGreen");
    formSection.classList.remove("themeOrange");
    formSection.classList.add("themeBlue");
  }
};

//STEP 4
back4.onclick = function () {
  thirdStep.style.left = "2.8rem";
  fourthStep.style.left = "65rem";
  formSection.classList.remove("themeGreen");
  formSection.classList.remove("themeBlue");
  formSection.classList.add("themeOrange");
};

continue4.onclick = function () {
  fourthStep.style.left = "-65rem";
  confirmation.style.left = "2.8rem";
  formSection.classList.remove("themeGreen");
  formSection.classList.remove("themeBlue");
  formSection.classList.add("themeOrange");
};

//CONFIRMATION
back5.onclick = function () {
  intro.style.left = "2.8rem";
  firstStep.style.left = "65rem";
  confirmation.style.left = "65rem";
  secondStep.style.left = "65rem";
  thirdStep.style.left = "65rem";
  fourthStep.style.left = "65rem";
  formSection.classList.remove("themeGreen");
  formSection.classList.remove("themeOrange");
  formSection.classList.remove("themeBlue");
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

//VALIDATION FUNCTIONS

function checkIfValid(input) {
  return input.checkValidity();
}
toImproveCheckbox.forEach((e) => {
  e.addEventListener("click", checkboxCounter);
});
gameTypeCheckbox.forEach((e) => {
  e.addEventListener("click", checkboxCounter);
});
gameCheckbox.forEach((e) => {
  e.addEventListener("click", checkboxCounter);
});

function checkboxCounter(e) {
  document.querySelectorAll(".err-message").forEach((e) => {
    e.classList.add("hidden");
  });
  let currentlySelected = document.querySelectorAll(
    `input[name=${e.target.name}]:checked`
  ).length;
  console.log(currentlySelected);
  if (currentlySelected == 3) {
    console.log("too many");
    document
      .querySelectorAll(`input[name=${e.target.name}]:not(:checked)`)
      .forEach((e) => {
        e.setAttribute("disabled", true);
      });
  } else if (currentlySelected != 3) {
    console.log("else");
    document
      .querySelectorAll(`input[name=${e.target.name}]:not(:checked)`)
      .forEach((e) => {
        e.removeAttribute("disabled");
      });
  }
}

function getCheckboxCount() {
  return document.querySelectorAll("input[name=toImprove]:checked").length;
}
