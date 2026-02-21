// 2005 — Web 2.0: Collapsible features (AJAX-style)

// Collapsible feature sections
(function () {
    document.querySelectorAll('.feature-header').forEach(header => {
        header.addEventListener('click', () => {
            const targetId = header.getAttribute('data-target');
            const body = document.getElementById(targetId);
            const icon = header.querySelector('.toggle-icon');
            if (!body) return;

            const isOpen = body.classList.contains('open');
            // Close all first
            document.querySelectorAll('.feature-body').forEach(b => b.classList.remove('open'));
            document.querySelectorAll('.toggle-icon').forEach(i => i.textContent = '+');

            if (!isOpen) {
                body.classList.add('open');
                if (icon) icon.textContent = '−';
            }
        });
    });
})();

// Nav pill active state
(function () {
    document.querySelectorAll('.nav-pill').forEach(pill => {
        pill.addEventListener('click', (e) => {
            document.querySelectorAll('.nav-pill').forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
        });
    });
})();
