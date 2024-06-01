document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('confirmationMessage').style.display = 'block';
    this.reset();
});
