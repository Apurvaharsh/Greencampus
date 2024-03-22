// Add your JavaScript code here
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav ul li a");
    const mainContent = document.querySelector("main");
  
    // Event listener for navigation links
    navLinks.forEach(link => {
      link.addEventListener("click", function(e) {
        e.preventDefault();
        const targetSection = this.getAttribute("href").substring(1);
        loadContent(targetSection);
      });
    });
  
    // Function to load content dynamically
    function loadContent(section) {
      const xhr = new XMLHttpRequest();
      xhr.open("GET", `${section}.html`, true);
      xhr.onload = function() {
        if (xhr.status === 200) {
          mainContent.innerHTML = xhr.responseText;
        } else {
          console.error("Failed to load content");
        }
      };
      xhr.send();
    }
  });
  