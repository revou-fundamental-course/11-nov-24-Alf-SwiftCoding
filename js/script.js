// Example: Adding alert functionality to the Call to Action button
document.querySelector('.cta button').addEventListener('click', () => {
    alert('Thank you for clicking the Call to Action button!');
  });
document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
  });
  