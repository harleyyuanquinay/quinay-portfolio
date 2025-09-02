document.getElementById('year').textContent = new Date().getFullYear();

// Contact form error handling
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Show alert to user
    alert('Contact form is not yet functional. Please email me directly at quinayharleyyuan@gmail.com');
    
    // Optional: Clear the form
    this.reset();
});