const input_email = document.querySelector(".input-email");
const input_password = document.querySelector(".input-password");
const userIcon = document.querySelector(".fa-sharp.fa-solid.fa-user");
const passwordIcon = document.querySelector(".fa-sharp.fa-solid.fa-lock");

const sign_in_button = document.querySelector(".sign-in-button");
const sign_up_button = document.querySelector(".sign-up-button");

const googleLink = document.querySelector(".fa-brands.fa-google");
const facebookLink = document.querySelector(".fa-brands.fa-facebook");
const twitterLink = document.querySelector(".fa-brands.fa-twitter");

let password, email;


googleLink.addEventListener('click', () => {
    location.replace('https://www.google.com');
});

facebookLink.addEventListener('click', () => {
    location.replace('https://www.facebook.com');
});

twitterLink.addEventListener('click', () => {
    location.replace('https://twitter.com');
});

sign_in_button.addEventListener('click', () => {
    // Extracting the values and
    // passing them functions

    email = input_email.value;
    password = input_password.value;

    ValidateEmail(email);
    ValidatePassword(password);
});

sign_up_button.addEventListener('click', () => {
    location.replace('https://www.google.com');
});

ValidateEmail = (email) => {
    // Checking if the email contains a "@" 
    // symbol and if it has a valid domain

    providedDomain = email.slice(-4);

    // TODO: Add more domains, refactor the domain slice logic,
    // so it works with other (non 3-letter) domains.
    validDomains = [".com", '.org', ".net"];

    if (!email.includes("@") || !validDomains.includes(providedDomain)) {
        ChangeColors(input_email, userIcon, "#e0443f");
    } else { ChangeColors(input_email, userIcon, "#5bbd35"); }
}

ValidatePassword = (password) => {
    // Checking if the password is too short or
    // if it contains only lowercase letters

    if (password.length < 7 || password === String(password).toLowerCase()) {
        ChangeColors(input_password, passwordIcon, "#e0443f");
    } else { ChangeColors(input_password, passwordIcon, "#5bbd35"); }
}

ChangeColors = (box, icon, color) => {
    // Painting the input boxes to the passed
    // color and restoring them after 3.5s

    box.style.borderColor = color;
    icon.style.color = color;

    setTimeout(() => {
        box.style.borderColor = "white";
        icon.style.color = "white";
    }, 3500);
}

