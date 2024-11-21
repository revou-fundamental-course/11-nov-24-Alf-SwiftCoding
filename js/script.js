// Example: Adding alert functionality to the Call to Action button
document.querySelector('.cta button').addEventListener('click', () => {
    alert('Thank you for clicking the Call to Action button!');
  });
document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
  });
  
let currentIndex = 0;
const slides = document.querySelectorAll(".slide");

// Function to change slides
function showNextSlide() {
  slides[currentIndex].classList.remove("active"); // Hide current slide
  currentIndex = (currentIndex + 1) % slides.length; // Move to the next slide
  slides[currentIndex].classList.add("active"); // Show next slide
}

// Auto slide every 3 seconds
setInterval(showNextSlide, 3000);
