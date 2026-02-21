// 2015 — Material Design: Ripple effect + FAB scroll-to-top

// Ripple effect on hero button
(function () {
    const btn = document.getElementById('mat-btn');
    if (!btn) return;

    btn.addEventListener('click', function (e) {
        const rect = btn.getBoundingClientRect();
        const ripple = document.createElement('span');
        const size = Math.max(rect.width, rect.height);
        ripple.style.cssText = `
            position: absolute;
            border-radius: 50%;
            background: rgba(255,255,255,0.4);
            width: ${size}px;
            height: ${size}px;
            left: ${e.clientX - rect.left - size / 2}px;
            top: ${e.clientY - rect.top - size / 2}px;
            transform: scale(0);
            animation: rippleAnim 0.6s ease-out;
            pointer-events: none;
        `;
        btn.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);

        // Scroll to content
        const container = document.querySelector('.mat-container');
        if (container) container.scrollIntoView({ behavior: 'smooth' });
    });

    // Inject ripple keyframe
    const style = document.createElement('style');
    style.textContent = `@keyframes rippleAnim { to { transform: scale(2.5); opacity: 0; } }`;
    document.head.appendChild(style);
})();

// FAB scroll to top
(function () {
    const fab = document.getElementById('fab-btn');
    if (!fab) return;
    fab.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
})();

// Card entrance animation
(function () {
    const cards = document.querySelectorAll('.mat-card');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    cards.forEach((card, i) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `opacity 0.4s ease ${i * 0.08}s, transform 0.4s ease ${i * 0.08}s`;
        observer.observe(card);
    });
})();
