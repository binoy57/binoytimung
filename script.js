window.onload = () => {
    const navMenu = document.querySelector('.nav-menu');
    const navItems = document.querySelectorAll('.nav-item');
    const hamburger = document.querySelector('.nav-toggle');
  
    const toggle = e => e.classList.toggle('is-active');
    const toggleNav = () => {
      toggle(navMenu);
      toggle(hamburger);
    };
  
    hamburger.addEventListener('click', toggleNav);
    Array.from(navItems).forEach(e => e.addEventListener('click', toggleNav));
  };
  