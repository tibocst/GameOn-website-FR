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
const formData = document.querySelectorAll("div.formData");
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

  removeError();
  // passage par toutes les fonctions pour générer les erreurs
  const validateNameConst = validateName(firstName, 0);
  const validateNameConstBis = validateName(lastName, 1);
  const validateEmailConst = validateEmail(email);
  const validateQuantityConst = validateQuantity(quantity);
  const validateBirthDateConst = validateBirthDate(birthDate);
  const validateCheckBoxConst = validateCheckBox(checkbox1);
  const validateLocationConst = validateLocation(location);

  if (validateNameConst && validateNameConstBis && validateEmailConst && validateQuantityConst && validateBirthDateConst && validateCheckBoxConst && validateLocationConst) {
    removeValidateForm();
    return false;
  }
  else {
    return false;
  }
}

// fonctions de test pour les champs

function validateName(stringToTest, indice) {
  // récupération de l'élément du DOM
  const divFormData = document.querySelectorAll("div.formData")[indice];
        
  if(stringToTest.length >= 2) {
    if(stringToTest.replace(/\s/g, '').length != 0) {
      // trimStart et trimEnd vont retirer les espaces respectivement à l'avant et l'arrière d'une chaine de caractère
      // permet de tester si aucun white space n'est présent à l'avant ou la fin du nom
      if((stringToTest.length === stringToTest.trimStart().length) && (stringToTest.length === stringToTest.trimEnd().length)) {
        return true;
      }
      else {
        // ajout des attributs et des leurs contenu
        divFormData.setAttribute("data-error", "Veuillez entrer 2 caractères ou plus pour le champ du nom.");
        divFormData.setAttribute("data-error-visible", "true");
        return false;
      }
    }
    else {
      divFormData.setAttribute("data-error", "Veuillez entrer 2 caractères ou plus pour le champ du nom.");
      divFormData.setAttribute("data-error-visible", "true");
      return false;
    }
  }
  else {
    divFormData.setAttribute("data-error", "Veuillez entrer 2 caractères ou plus pour le champ du nom.");
    divFormData.setAttribute("data-error-visible", "true");
    return false;
  }
}

function validateEmail(emailToTest) {
  // récupération de l'élément du DOM
  const divFormData = document.querySelectorAll("div.formData")[2];
  //regex pour vérification du mail
  const regex = new RegExp("^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$");
  if(emailToTest.match(regex)) {
    return true;
  }
  else {
    divFormData.setAttribute("data-error", "Email non valide.");
    divFormData.setAttribute("data-error-visible", "true");
    return false;
  }
}

function validateBirthDate(dateToTest) {
  // récupération de l'élément du DOM
  const divFormData = document.querySelectorAll("div.formData")[3];

  if(!isNaN(Date.parse(dateToTest))) {
    return true;
  }
  else {
    divFormData.setAttribute("data-error", "Vous devez entrer votre date de naissance.");
    divFormData.setAttribute("data-error-visible", "true");
    return false;
  }
}

function validateQuantity(numberToTest) {
  // récupération de l'élément du DOM
  const divFormData = document.querySelectorAll("div.formData")[4];

  // passage d'une string à un entier
  const number = Number(numberToTest);
  // si number n'est pas un nombre/chiffre, Number retournera NaN
  if(!(isNaN(number)) && number >= 0 && number <= 99 && !(numberToTest === "")) {
    return true;
  }
  else {
    divFormData.setAttribute("data-error", "Vous devez choisir une option.");
    divFormData.setAttribute("data-error-visible", "true");
    return false;
  }
}

function validateLocation(stringToTest) {
  // récupération de l'élément du DOM
  const divFormData = document.querySelectorAll("div.formData")[5];

  if(stringToTest === "New York" || stringToTest === "San Francisco" || stringToTest === "Seattle" || stringToTest === "Chicago" || stringToTest === "Boston" || stringToTest === "Portland") {
    return true;
  }
  else {
    divFormData.setAttribute("data-error", "Vous devez choisir une option.");
    divFormData.setAttribute("data-error-visible", "true");
    return false;
  }
}

function validateCheckBox(testIfChecked) {
  // récupération de l'élément du DOM
  const divFormData = document.querySelectorAll("div.formData")[6];

  if(testIfChecked) {
    return true;
  }
  else {
    divFormData.setAttribute("data-error", "Vous devez vérifier que vous acceptez les termes et conditions.");
    divFormData.setAttribute("data-error-visible", "true");
    return false;
  }
}

// retire les affichages d'erreur avant de tester à nouveau les infos du form

function removeError() {
  for(let i = 6 ; i >= 0; i--){
    const divFormData = document.querySelectorAll("div.formData")[i];
    divFormData.removeAttribute("data-error");
    divFormData.removeAttribute("data-error-visible");
  }
}

// retire tous les éléments du form et affiche la modale après validation

function removeValidateForm() {
  const formValide = document.querySelector(".form-valide");
  const modalBody = document.querySelector("form");
  const formValideButton = document.querySelector(".form-valide button");

  modalBody.style.display = "none";
  formValide.style.display = "flex";

  formValideButton.addEventListener("click", function () {
    //affiche de nouveau le formulaire après avoir pressé le bouton fermer
    modalbg.style.display = "none";
    modalBody.style.display = "block";
    formValide.style.display = "none";
  }, false);
}

