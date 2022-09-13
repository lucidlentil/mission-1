const contactTitleElement = document.querySelector('#contact-title'); 
const contactBodyElement = document.querySelector('#contact-body');
const submitElement = document.querySelector('#submit-button'); 
const contactFormElement = document.querySelector('.contact-form'); 

function formSubmitted() {
    contactTitleElement.innerHTML = ``;
    contactBodyElement.innerHTML = ``;
    contactFormElement.innerHTML = `<h2 class="contact-titles">Thank you!</h2> I'll be in touch with you as soon as possible.`
}
submitElement.addEventListener('click', formSubmitted()); 