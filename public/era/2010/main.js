// public/era/2010/main.js
window.toggleFlatMenu = function () {
    const navLinks = document.querySelectorAll('.flat-nav a');
    navLinks.forEach(link => {
        if (link.style.display === 'block') {
            link.style.display = 'none';
        } else {
            link.style.display = 'block';
            link.style.width = '100%';
            link.style.padding = '10px 0';
            link.style.borderTop = '1px solid #34495e';
        }
    });

    // Quick layout fix for flex container when menu opens
    const nav = document.querySelector('.flat-nav');
    if (nav.style.flexDirection === 'column') {
        nav.style.flexDirection = 'row';
        nav.style.position = 'static';
    } else {
        nav.style.flexDirection = 'column';
        nav.style.position = 'absolute';
        nav.style.top = '60px';
        nav.style.left = '0';
        nav.style.width = '100%';
        nav.style.background = '#2c3e50';
        nav.style.zIndex = '100';
    }
};

// Add a simple scroll-to-top feature (typical of the era)
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerHTML = '↑';
scrollToTopBtn.style.position = 'fixed';
scrollToTopBtn.style.bottom = '80px'; // Above the time slider
scrollToTopBtn.style.right = '20px';
scrollToTopBtn.style.display = 'none';
scrollToTopBtn.style.background = '#18bc9c';
scrollToTopBtn.style.color = '#fff';
scrollToTopBtn.style.border = 'none';
scrollToTopBtn.style.padding = '10px 15px';
scrollToTopBtn.style.borderRadius = '3px';
scrollToTopBtn.style.cursor = 'pointer';
scrollToTopBtn.style.zIndex = '99';

scrollToTopBtn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
document.body.appendChild(scrollToTopBtn);

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});
