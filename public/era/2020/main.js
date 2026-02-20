// public/era/2020/main.js
window.toggleDarkMode = function () {
    const eraContainer = document.querySelector('.modern-era');
    const toggleIcon = document.querySelector('.theme-toggle i');

    // Check current theme
    const currentTheme = eraContainer.getAttribute('data-theme');

    if (currentTheme === 'dark') {
        eraContainer.setAttribute('data-theme', 'light');
        toggleIcon.className = 'fa fa-moon';
    } else {
        eraContainer.setAttribute('data-theme', 'dark');
        toggleIcon.className = 'fa fa-sun';
    }
};

// Auto-detect system preference visually on load
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    const eraContainer = document.querySelector('.modern-era');
    const toggleIcon = document.querySelector('.theme-toggle i');

    if (eraContainer && toggleIcon) {
        eraContainer.setAttribute('data-theme', 'dark');
        toggleIcon.className = 'fa fa-sun';
    }
}
