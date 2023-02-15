// DOM
function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
    modal.setAttribute('aria-hidden', 'true');
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
    modal.setAttribute('aria-hidden', 'false');
}

window.addEventListener('keydown', function(event) {
    const keyCode = event.keyCode ? event.keyCode : event.which
  
    if (keyCode === 27) {
        closeModal();
    }
});

// Formulaire de contact
const modal = document.querySelector(".modal");
modal.setAttribute("aria-labelledby", "2");

const firstNameInput = document.querySelector("#firstname");
firstNameInput.setAttribute("alt", "First name");
firstNameInput.setAttribute("aria-labelledby", "3");

const lastNameInput = document.querySelector("#lastname");
lastNameInput.setAttribute("alt", "Last name");
lastNameInput.setAttribute("aria-labelledby", "5");

const emailInput = document.querySelector("#email");
emailInput.setAttribute("alt", "Email");
emailInput.setAttribute("aria-labelledby", "7");

const messageInput = document.querySelector("#message");
messageInput.setAttribute("alt", "Your message");
messageInput.setAttribute("aria-labelledby", "9");

const contactBtn = document.querySelector(".contact_button");
contactBtn.setAttribute("alt", "Send");

const form = document.querySelector("#form");
form.addEventListener("submit", sendMessage);

function sendMessage(event) {
    event.preventDefault();

    let contactInfos = [
        "Prénom : " + firstNameInput.value,
        "Nom : " + lastNameInput.value,
        "Email : " + emailInput.value,
        "Votre message : " + messageInput.value
    ];

    firstNameInput.value = "",
    lastNameInput.value = "",
    emailInput.value = "",
    messageInput.value = ""

    console.log(contactInfos);
    closeModal();
}