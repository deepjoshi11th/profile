// public/era/2005/main.js
window.loadAjaxSimulation = function (event) {
    event.preventDefault();

    const resultDiv = document.getElementById('ajax-result');
    resultDiv.style.display = 'block';
    resultDiv.innerHTML = '<img src="https://cdnjs.cloudflare.com/ajax/libs/galleriffic/2.0.1/css/loader.gif" alt="Loading..." width="16" height="16" /> Loading via XMLHTTPRequest...';

    // Simulate network delay
    setTimeout(() => {
        resultDiv.innerHTML = `
            <strong>New Comment from Web2_Fan:</strong>
            <p>"First! This layout is so much cleaner than tables. Love the rounded corners!"</p>
        `;

        // jQuery-like fade in effect (manual)
        let opacity = 0;
        resultDiv.style.opacity = opacity;

        const fadeInterval = setInterval(() => {
            opacity += 0.1;
            resultDiv.style.opacity = opacity;
            if (opacity >= 1) clearInterval(fadeInterval);
        }, 50);

    }, 1500);
}
