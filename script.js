document.addEventListener("DOMContentLoaded", function() {
    const nameElement = document.querySelector(".hero-name");
    const nameText = "Ansh Jaiswal";
    
    let index = 0;
    function typeText() {
        if (index < nameText.length) {
            nameElement.textContent += nameText.charAt(index);
            index++;
            setTimeout(typeText, 150);
        } else {
            nameElement.classList.add("typing-animation");
        }
    }

    typeText();
});
(function(){
    emailjs.init("GseZ9KeB4ZLMaERsb");
  })();
  function sendEmail() {
    const form = document.getElementById('contact-form');
  
    // Prevent default form submission
    form.addEventListener('submit', function(event) {
      event.preventDefault();
    });
  
    // Log form submission event
    console.log("Form submitted");
  
    // Send the form using EmailJS
    emailjs.sendForm('service_087w1hj', 'template_fxvsj4e', '#contact-form')
      .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        alert('Your message has been sent successfully!');
      }, function(error) {
        console.log('FAILED...', error);
        alert('Failed to send the message, please try again later.');
      });
  }
  
  // document.addEventListener('DOMContentLoaded', function() {
  //   const loadingScreen = document.getElementById('loading-screen');
  //   const loader = document.querySelector('.loader');
  //   const contactUs = document.querySelector('.contact-us');
  
  //   // Remove the loader class after 2 seconds
  //   setTimeout(function() {
  //     loader.classList.remove('loader');
  //     loadingScreen.style.display = 'none';
  //   }, 2000); // 2000 milliseconds = 2 seconds
  // });