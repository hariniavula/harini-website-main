function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger');
    
    // Toggle the active class for both the nav and the hamburger
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
  }
  