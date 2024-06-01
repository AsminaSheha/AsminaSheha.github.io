window.onscroll = function() {
    var scrollToTopButton = document.querySelector('.back-to-top');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
};

document.querySelector('.review-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your review! We will get back to you soon.');
    this.reset();
});
