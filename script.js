// Enhanced Observer: Trigger Anims on Scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            entry.target.style.animationDelay = `${index * 0.1}s`; // Stagger
            entry.target.classList.add('animate-slideUp');
            if (entry.target.closest('#skills')) {
                entry.target.classList.add('animate-bounce'); // Skills bounce
            }
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

// Observe Sections & Elements
document.querySelectorAll('section, .project-card, #skills span, #journey .space-y-12 > div').forEach(el => {
    observer.observe(el);
});

// Smooth Anchors
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(anchor.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});

// Resume Modal
function openResumeModal() {
    document.getElementById('resumeModal').classList.remove('hidden');
}
function closeResumeModal() {
    document.getElementById('resumeModal').classList.add('hidden');
}

// Close Modal on Outside Click
const resumeModalEl = document.getElementById('resumeModal');
if (resumeModalEl) {
    resumeModalEl.addEventListener('click', e => {
        if (e.target.id === 'resumeModal') closeResumeModal();
    });
}

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();