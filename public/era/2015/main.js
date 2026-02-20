// public/era/2015/main.js
window.toggleMdDrawer = function () {
    const drawer = document.getElementById('md-drawer-menu');
    const scrim = document.getElementById('md-scrim');

    if (drawer && scrim) {
        if (drawer.classList.contains('open')) {
            drawer.classList.remove('open');
            scrim.classList.remove('visible');
        } else {
            drawer.classList.add('open');
            scrim.classList.add('visible');
        }
    }
};

// Material design ripple effect function
function createRipple(event) {
    const button = event.currentTarget;
    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.getBoundingClientRect().left - radius}px`;
    circle.style.top = `${event.clientY - button.getBoundingClientRect().top - radius}px`;
    circle.classList.add('ripple');

    const ripple = button.getElementsByClassName('ripple')[0];

    // Remove previous ripple if exists
    if (ripple) {
        ripple.remove();
    }

    button.appendChild(circle);
}

// Attach ripple effect to all buttons with .ripple-btn class
const buttons = document.getElementsByClassName('ripple-btn');
for (const button of buttons) {
    button.addEventListener('click', createRipple);
}
