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
