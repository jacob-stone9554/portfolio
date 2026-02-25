// Scroll reveal
const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.classList.remove('hidden');
            e.target.classList.add('visible');
            observer.unobserve(e.target);
        }
    });
}, { threshold: 0.05 });

// Add hidden class via JS (so content shows if JS fails to load),
// then observe each element
reveals.forEach(el => {
    el.classList.add('hidden');
    observer.observe(el);
});