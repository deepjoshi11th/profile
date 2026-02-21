// 2000 — Flash-style splash intro + cursor star trail

// --- Splash screen loading animation ---
(function () {
    const fill = document.getElementById('loading-fill');
    const pct = document.getElementById('load-pct');
    const splash = document.getElementById('splash-2000');
    const skipBtn = document.getElementById('skip-intro');
    if (!fill || !splash) return;

    let progress = 0;
    const interval = setInterval(() => {
        progress += Math.random() * 8 + 2;
        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);
            setTimeout(() => {
                splash.classList.add('hidden');
            }, 400);
        }
        fill.style.width = progress + '%';
        if (pct) pct.textContent = Math.floor(progress);
    }, 120);

    if (skipBtn) {
        skipBtn.addEventListener('click', () => {
            clearInterval(interval);
            splash.classList.add('hidden');
        });
    }
})();

// --- Cursor star trail (very 2000) ---
(function () {
    const stars = [];
    const MAX = 12;

    document.addEventListener('mousemove', (e) => {
        const star = document.createElement('div');
        star.textContent = '✦';
        star.style.cssText = `
            position: fixed;
            left: ${e.clientX}px;
            top: ${e.clientY}px;
            pointer-events: none;
            z-index: 7999;
            font-size: ${8 + Math.random() * 8}px;
            color: rgba(150,150,255,${0.4 + Math.random() * 0.4});
            transition: all 0.6s ease;
            transform: translate(-50%, -50%);
        `;
        document.body.appendChild(star);
        stars.push(star);

        requestAnimationFrame(() => {
            star.style.opacity = '0';
            star.style.transform = `translate(-50%, -50%) scale(0.3) translateY(-20px)`;
        });

        setTimeout(() => {
            star.remove();
            stars.shift();
        }, 600);

        // Limit DOM nodes
        if (stars.length > MAX) {
            const old = stars.shift();
            old.remove();
        }
    });
})();
