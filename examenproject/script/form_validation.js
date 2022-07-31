addEventListener("load", init)

function init() {
    let achternaamField = document.querySelector("#achternaam_p");
    achternaamField.addEventListener("blur", validateAchternaam)

    let valEmail = document.querySelector("#email_p");
    valEmail.addEventListener("keyup",validateEmail)

    let form = document.querySelector("#contact_form");
    form.addEventListener("submit", validateForm)
}

function validateAchternaam() {
    achternaamContent = document.querySelector("#achternaam_p").value;
    let achtenaamFeedback = document.querySelector("#errorAchternaam");
    if (achternaamContent.length < 5) {
        achtenaamFeedback.innerHTML = "Je ingevoerde waarde is kleiner dan 5 tekens"
        return false
    } else {
        achtenaamFeedback.innerHTML =""
    }
    return true
}

function validateEmail() {
    emailContent = document.querySelector("#email_p").value;
    let emailFeedback = document.querySelector("#errorEmail");
    const regEx = /^[a-z]+\.[a-z]+[1-9]?@(student\.)?kdg\.be$/
    if (!regEx.test(emailContent)) {
        emailFeedback.innerHTML = "Je ingevoerde e-mail behoort niet tot het KdG domein."
        return false
    } else {
        emailFeedback.innerHTML =""
    }
    return true
}

function validateForm(event) {
    if (!validateAchternaam() || !validateEmail()) {
        event.preventDefault();
    }
}


