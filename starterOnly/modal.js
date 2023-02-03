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

  //on retire l'affichage de toutes les anciennes erreurs potentielles
  removeError();
  //on faire tourner toutes les fontions pour pouvoir afficher une erreur 
  //sous chaque fonctions présentant une erreur et pas que la première trouvée
  const validateNameConst = validateName(firstName, 0);
  const validateNameConstBis = validateName(lastName, 1);
  const validateEmailConst = validateEmail(email);
  const validateQuantityConst = validateQuantity(quantity);
  const validateBirthDateConst = validateBirthDate(birthDate);
  const validateCheckBoxConst = validateCheckBox(checkbox1);
  const validateLocationConst = validateLocation(location);

  if (validateNameConst && validateNameConstBis && validateEmailConst && validateQuantityConst && validateBirthDateConst && validateCheckBoxConst && validateLocationConst) {
    console.log("reussi");
    return true;
  }
  else {
    return false;
  }
}

// fonctions de test pour les champs

function validateName(stringToTest, indice) {
  // Récupération de l'élément du DOM
  const divFormData = document.querySelectorAll(".formData")[indice];
  // Création d’une balise
  const errorP = document.createElement("p");
  //edit de son texte
  errorP.innerText = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
        
  if(stringToTest.length >= 2) {
    if(stringToTest.replace(/\s/g, '').length != 0) {
      // trimStart et trimEnd vont retirer les espaces respectivement à l'avant et l'arrière d'une chaine de caractère
      // permet de tester si aucun white space n'est présent à l'avant ou la fin du nom
      if((stringToTest.length === stringToTest.trimStart().length) && (stringToTest.length === stringToTest.trimEnd().length)) {
        return true;
      }
      else {
        divFormData.appendChild(errorP);
        return false;
      }
    }
    else {
      divFormData.appendChild(errorP);
      return false;
    }
  }
  else {
    divFormData.appendChild(errorP);
    return false;
  }
}

function validateEmail(emailToTest) {
  // Récupération de l'élément du DOM
  const divFormData = document.querySelectorAll(".formData")[2];
  // Création d’une balise
  const errorP = document.createElement("p");
  //edit de son texte
  errorP.innerText = "Email non valide.";

  const regex = new RegExp("^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$");
  if(emailToTest.match(regex)) {
    return true;
  }
  else {
    divFormData.appendChild(errorP);
    return false;
  }
}

function validateBirthDate(dateToTest) {
  // Récupération de l'élément du DOM
  const divFormData = document.querySelectorAll(".formData")[3];
  // Création d’une balise
  const errorP = document.createElement("p");
  //edit de son texte
  errorP.innerText = "Vous devez entrer votre date de naissance.";

  if(!isNaN(Date.parse(dateToTest))) {
    return true;
  }
  else {
    divFormData.appendChild(errorP);
    return false;
  }
}

function validateQuantity(numberToTest) {
  // Récupération de l'élément du DOM
  const divFormData = document.querySelectorAll(".formData")[4];
  // Création d’une balise
  const errorP = document.createElement("p");
  //edit de son texte
  errorP.innerText = "Vous devez choisir une option.";

  //passage d'une string à un entier
  const number = Number(numberToTest);
  //si ce qui a été rentré n'est pas un entier, Number retournera NaN donc on test ce retour avec is NaN
  if(!(isNaN(number)) && number >= 0 && number <= 99 && !(numberToTest === "")) {
    return true;
  }
  else {
    divFormData.appendChild(errorP);
    return false;
  }
}

function validateLocation(stringToTest) {
  // Récupération de l'élément du DOM
  const divFormData = document.querySelectorAll(".formData")[5];
  // Création d’une balise
  const errorP = document.createElement("p");
  //edit de son texte
  errorP.innerText = "Vous devez choisir une option.";

  if(stringToTest === "New York" || stringToTest === "San Francisco" || stringToTest === "Seattle" || stringToTest === "Chicago" || stringToTest === "Boston" || stringToTest === "Portland") {
    return true;
  }
  else {
    divFormData.appendChild(errorP);
    return false;
  }
}

function validateCheckBox(testIfChecked) {
  // Récupération de l'élément du DOM
  const divFormData = document.querySelectorAll(".formData")[6];
  // Création d’une balise
  const errorP = document.createElement("p");
  //edit de son texte
  errorP.innerText = "Vous devez vérifier que vous acceptez les termes et conditions.";

  if(testIfChecked) {
    return true;
  }
  else {
    divFormData.appendChild(errorP);
    return false;
  }
}

// function pour retirer les affichages d'erreur avant de tester à nouveau les infos du form

function removeError() {
  for(let i = 6 ; i >= 0; i--){
    const divFormData = document.querySelectorAll("div.formData > p")[i];
    if(typeof divFormData !== "undefined"){
      divFormData.remove();
    }
  }
}