// Modal Functionality
document.querySelectorAll('.example-btn').forEach(button => {
    button.addEventListener('click', function() {
        const modalId = this.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        modal.style.display = 'block';
    });
});

// Close Modal
document.querySelectorAll('.close-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        this.parentElement.parentElement.style.display = 'none';
    });
});

// Close Modal on Outside Click
window.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal')) {
        e.target.style.display = 'none';
    }
});

// JavaScript Example Button (Click Me)
document.getElementById('js-example-btn').addEventListener('click', function() {
    alert('Hello, world!');
});