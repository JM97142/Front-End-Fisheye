// DOM
modal = document.getElementsByClassName('.modal');

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
const firstNameInput = document.querySelector("#firstname");
firstNameInput.setAttribute("alt", "First name");

const lastNameInput = document.querySelector("#lastname");
lastNameInput.setAttribute("alt", "Last name");

const emailInput = document.querySelector("#email");
emailInput.setAttribute("alt", "Email");

const messageInput = document.querySelector("#message");
messageInput.setAttribute("alt", "Your message");

const contactBtn = document.querySelector(".contact_button");
contactBtn.setAttribute("alt", "Send");

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