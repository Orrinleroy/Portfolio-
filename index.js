const spinner = document.querySelector('.spinner');
const heroContainer = document.querySelector('.container');
const skillsContainer = document.querySelector('.skills-container');
const expCard = document.querySelectorAll('.timeline-card');
const educationCard = document.querySelectorAll('.education-card');

window.addEventListener('load', () => {
  spinner.classList.add('hidden');
  heroContainer.classList.remove('hidden');
});
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  // Add your form submission logic here
  // You can use fetch API or any other method to send the form data
  console.log('Form submitted!');
});

// Skill card animation
const revealSections = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove('fadein');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSections, {
  root: null,
  threshold: 0.25,
});

sectionObserver.observe(skillsContainer);

expCard.forEach(card => {
  sectionObserver.observe(card);
});

educationCard.forEach(card => {
  sectionObserver.observe(card);
});
