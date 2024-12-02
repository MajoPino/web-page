document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for contacting us! Your message has been sent.');
        form.reset();
    });
});
