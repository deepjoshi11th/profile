// 2020 — Glassmorphism: Particles, stat counter, dark mode toggle

// Floating particles in hero
(function () {
    const container = document.getElementById('particles-2020');
    if (!container) return;

    for (let i = 0; i < 15; i++) {
        const p = document.createElement('div');
        p.classList.add('particle');
        const size = 3 + Math.random() * 6;
        p.style.cssText = `
            width: ${size}px;
            height: ${size}px;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation-delay: ${Math.random() * 5}s;
            animation-duration: ${5 + Math.random() * 6}s;
        `;
        container.appendChild(p);
    }
})();

// Animated stat counters
(function () {
    const stats = document.querySelectorAll('.stat-num[data-target]');
    if (!stats.length) return;

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.dataset.target);
                let current = 0;
                const step = Math.ceil(target / 40);
                const timer = setInterval(() => {
                    current += step;
                    if (current >= target) {
                        current = target;
                        clearInterval(timer);
                    }
                    el.textContent = current;
                }, 30);
                observer.unobserve(el);
            }
        });
    }, { threshold: 0.5 });

    stats.forEach(s => observer.observe(s));
})();

// Dark mode toggle (just visual feedback, page is always dark)
(function () {
    const toggle = document.getElementById('toggle-switch');
    const label = document.querySelector('.toggle-label');
    if (!toggle) return;

    toggle.addEventListener('click', () => {
        toggle.classList.toggle('active');
        const isDark = toggle.classList.contains('active');
        if (label) {
            label.textContent = isDark ? '🌒 Dark Mode' : '☀️ Light Mode (just kidding)';
        }
        if (!isDark) {
            setTimeout(() => {
                toggle.classList.add('active');
                if (label) label.textContent = '🌒 Dark Mode';
                alert("Nice try. It's 2020. Everything is dark mode.");
            }, 800);
        }
    });
})();
