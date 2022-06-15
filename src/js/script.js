const contactText = document.querySelector('.contact-text');
const contactBox = document.querySelector('.contact-box');

contactText.addEventListener('click', () => {
  contactBox.classList.add('active');
})