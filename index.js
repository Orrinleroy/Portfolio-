const spinner = document.querySelector('.spinner');

window.addEventListener('load', () => {
    spinner.classList.add('hidden');
})
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Add your form submission logic here
    // You can use fetch API or any other method to send the form data
    console.log('Form submitted!');
});
