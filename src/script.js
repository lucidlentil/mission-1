const contactTitleElement = document.querySelector('#contact-title'); 
const contactBodyElement = document.querySelector('#contact-body');
const contactFormElement = document.querySelector('.contact-form');
const submitElement = document.querySelector('#submit-button'); 
const enquiryName = document.querySelector('#first-name');  

function formSubmitted() {
    contactTitleElement.innerHTML = ``;
    contactBodyElement.innerHTML = ``;
    contactFormElement.innerHTML = `<h2 class="contact-titles">Thanks ${enquiryName.value}!</h2> 
                                    <p>I'll be in touch with you as soon as possible.</p>`;
}
submitElement.addEventListener('click', formSubmitted);

/*function reloadForm() {
    contactTitleElement.innerHTML = `Reach out`;
    contactBodyElement.innerHTML = `I would love to work with others who are venturing into a new line of work - let's help launch each other's careers!`;
    contactFormElement.innerHTML = `<input type="text" id="first-name" name="first-name" placeholder="First name" required>
                <input type="text" id="last-name" name="last-name" placeholder="Last name"><br>
                <input type="email" id="email-address" name="email-address" placeholder="Email" required>
                <select name="found-me" id="found-me">
                    <option hidden selected>How did you find me?</option>
                    <option value="linkedin">Linked In</option>
                    <option value="github">GitHub</option>
                    <option value="instagram">Instagram</option>
                    <option value="friends-family">Friends or family</option>
                    <option value="other">Other</option>
                </select>
                <br>
                <textarea id="your-message" name="your-message" cols="2" rows="10" placeholder="Your message"
                    required></textarea>
                <br>
                <input type="submit" id="submit-button">`;
}
window.addEventListener('onload', reloadForm());
*/
