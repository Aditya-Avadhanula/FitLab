document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function() {
        const targetId = this.textContent.trim().toLowerCase().replace(/\s+/g, '-');
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});