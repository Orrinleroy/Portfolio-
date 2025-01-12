const spinner = document.querySelector('.spinner');
const skillsContainer = document.querySelector('.skills-container');
const expCard = document.querySelectorAll('.timeline-card');
const educationCard = document.querySelectorAll('.education-card');

window.addEventListener('load', () => {
  spinner.classList.add('hidden');
});
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  // Add your form submission logic here
  // You can use fetch API or any other method to send the form data
  console.log('Form submitted!');
});

// Skill card animation
const revealSkills = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove('skills-fadein');
  observer.unobserve(entry.target);
};

const skillsObserver = new IntersectionObserver(revealSkills, {
  root: null,
  threshold: 0.15,
});

skillsObserver.observe(skillsContainer);

// Exp card animation
const revealExp = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove('push-right');
  observer.unobserve(entry.target);
};

const expObserver = new IntersectionObserver(revealExp, {
  root: null,
  threshold: 0.6,
});

expCard.forEach(card => {
  expObserver.observe(card);
});

// Education card animation
const revealEdu = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove('push-left');
  observer.unobserve(entry.target);
};

const eduObserver = new IntersectionObserver(revealEdu, {
  root: null,
  threshold: 0.25,
});

educationCard.forEach(card => {
  eduObserver.observe(card);
});
