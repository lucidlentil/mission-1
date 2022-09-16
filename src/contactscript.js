const contactTitleElement = document.querySelector('#contact-title'); 
const contactBodyElement = document.querySelector('#contact-body');
const contactFormElement = document.querySelector('.contact-form');
const submitElement = document.querySelector('#submit-button'); 
const enquiryName = document.querySelector('#first-name'); 
const emailElement = document.querySelector('#email-address'); 
const messageElement = document.querySelector('#your-message'); 


function formSubmitted() {
    if (enquiryName.value !== `` && (emailElement.value.indexOf('@') > -1) && (messageElement.value.length >= 5)){
    contactTitleElement.innerHTML = ``;
    contactBodyElement.innerHTML = ``;
    contactFormElement.innerHTML = `<h2 class="contact-titles">Thanks ${enquiryName.value}!</h2> 
                                    <p>I'll be in touch with you as soon as possible.</p>
                                    <button> New query</button>`;
    } else {
        const errorMessage = document.querySelector('#submit-error'); 
        errorMessage.innerHTML = `Please complete the required fields`;
    }
}
submitElement.addEventListener('click', formSubmitted);