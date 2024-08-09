// Form Submission Handling
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission

    // Get form values
    const name = document.querySelector('input[placeholder="Your Name"]').value;
    const email = document.querySelector('input[placeholder="Your Email"]').value;
    const message = document.querySelector('textarea[placeholder="Your Message"]').value;

    // Basic validation (can be expanded)
    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
    } else {
        // Display a thank you message
        alert(`Thank you, ${name}! Your message has been sent.`);

        // Clear the form
        document.getElementById('contact-form').reset();
    }
});

// Add smooth scroll for navigation links (optional)
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - 50, // Adjust the offset for header height
            behavior: 'smooth'
        });
    });
});
