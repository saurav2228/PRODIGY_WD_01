// Select the navbar
const navbar = document.getElementById('navbar');

// Function to handle scroll event
window.onscroll = function() {
    if (window.scrollY > 50) {
        navbar.classList.add('nav-scrolled');
    } else {
        navbar.classList.remove('nav-scrolled');
    }
};
