function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalBtnClose = document.querySelector(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form

modalBtnClose.addEventListener("click", function () {
  modalbg.style.display = "none";
  console.log("Réussi");
}, false);

// test formulaire valide

function validate() {
  const firstName = document.forms["reserve"]["first"].value;
  const lastName = document.forms["reserve"]["last"].value;
  const email = document.forms["reserve"]["email"].value;
  const birthDate = document.forms["reserve"]["birthdate"].value;
  const quantity = document.forms["reserve"]["quantity"].value;
  const location = document.forms["reserve"]["location"].value;
  const checkbox1 = document.forms["reserve"]["checkbox1"].checked;

  console.log(typeof location);

  if (validateName(firstName) && validateName(lastName) && validateEmail(email) && validateQuantity(quantity) && validateBirthDate(birthDate) && validateCheckBox(checkbox1) && validateLocation(location)) {
    console.log("reussi");
    return true;
  }
  else {
    return false;
  }
}

// fonctions de test pour les champs

function validateName(stringToTest) {
  if(stringToTest.length >= 2) {
    if(stringToTest.replace(/\s/g, '').length != 0) {
      // trimStart et trimEnd vont retirer les espaces respectivement à l'avant et l'arrière d'une chaine de caractère
      // permet de tester si aucun white space n'est présent à l'avant ou la fin du nom
      if((stringToTest.length === stringToTest.trimStart().length) && (stringToTest.length === stringToTest.trimEnd().length)) {
        return true;
      }
      else {
        return false;
      }
    }
    else {
      return false;
    }
  }
  else {
    return false;
  }
}

function validateEmail(emailToTest) {
  const regex = new RegExp("^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$");
  if(emailToTest.match(regex)) {
    return true;
  }
  else {
    return false;
  }
}

function validateBirthDate(dateToTest) {
  
  if(!isNaN(Date.parse(dateToTest))) {
    return true;
  }
  else {
    return false;
  }
}

function validateQuantity(numberToTest) {
  //passage d'une string à un entier
  const number = Number(numberToTest);
  //si ce qui a été rentré n'est pas un entier, Number retournera NaN donc on test ce retour avec is NaN
  if(!(isNaN(number)) && number >= 0 && number <= 99) {
    return true;
  }
  else {
    return false;
  }
}

function validateLocation(stringToTest) {
  if(stringToTest === "New York" || stringToTest === "San Francisco" || stringToTest === "Seattle" || stringToTest === "Chicago" || stringToTest === "Boston" || stringToTest === "Portland") {
    return true;
  }
  else {
    return false;
  }
}

function validateCheckBox(testIfChecked) {
  if(testIfChecked) {
    return true;
  }
  else {
    return false;
  }
}
