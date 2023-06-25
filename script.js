// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    const targetId = link.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: 'smooth'
    });
  });
});

// Form submission
const form = document.querySelector('form');

form.addEventListener('submit', e => {
  e.preventDefault();

  // Get form input values
  const nameInput = document.querySelector('input[type="text"]');
  const emailInput = document.querySelector('input[type="email"]');
  const messageInput = document.querySelector('textarea');

  const name = nameInput.value;
  const email = emailInput.value;
  const message = messageInput.value;

  // Perform form validation
  if (name === '' || email === '' || message === '') {
    alert('Please fill in all fields');
    return;
  }

  // Perform form submission (dummy example)
  alert('Form submitted successfully');

  // Clear form inputs
  nameInput.value = '';
  emailInput.value = '';
  messageInput.value = '';
});
