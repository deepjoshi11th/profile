// =============================================
// JavaScript — Born December 4, 1995
// Netscape Navigator 2.0
// "LiveScript" → "JavaScript"
// This file PROVES that JavaScript exists.
// =============================================

// --- Visitor Counter Animation ---
(function () {
    const counter = document.getElementById('visitor-counter');
    if (!counter) return;

    let target = 1995;
    let current = 0;
    let step = Math.ceil(target / 60); // reach target in ~60 frames

    function tick() {
        current += step;
        if (current >= target) {
            current = target;
            counter.textContent = String(current).padStart(6, '0');
            return;
        }
        counter.textContent = String(current).padStart(6, '0');
        requestAnimationFrame(tick);
    }

    tick();
})();

// --- "Click Me — I'm JavaScript!" Button ---
(function () {
    const btn = document.getElementById('js-proof-btn');
    const output = document.getElementById('js-proof-output');
    if (!btn || !output) return;

    const messages = [
        'Hello from JavaScript! 🎉 document.write("It works!");',
        'var year = 1995; // The future is NOW!',
        'alert("Brendan Eich made me in 10 days!");',
        'if (browser === "Netscape") { /* life is good */ }',
        '// TODO: Invent Node.js (check back in 2009)',
        'typeof NaN === "number" // true — I was born weird.',
        '0.1 + 0.2 === 0.3 // false — I was born WEIRD.',
        '"10" == 10 // true — just like Deep\'s birthday!',
    ];

    let clickCount = 0;

    btn.addEventListener('click', function () {
        const msg = messages[clickCount % messages.length];
        output.innerHTML = '<font color="#008000"><b>&gt; ' + msg + '</b></font>';
        clickCount++;

        // After all messages, change button text
        if (clickCount === messages.length) {
            btn.textContent = '🔄 Click again — there\'s more JS!';
        }
    });
})();

// --- Guestbook ---
(function () {
    const submitBtn = document.getElementById('guest-submit');
    const nameInput = document.getElementById('guest-name');
    const msgInput = document.getElementById('guest-msg');
    const entriesDiv = document.getElementById('guestbook-entries');
    if (!submitBtn || !nameInput || !msgInput || !entriesDiv) return;

    submitBtn.addEventListener('click', function () {
        var name = nameInput.value.trim();
        var message = msgInput.value.trim();

        if (!name || !message) {
            alert('Please fill in both fields! This is 1995 form validation.');
            return;
        }

        // Find the table inside guestbook entries
        var table = entriesDiv.querySelector('table');
        if (!table) return;

        // Create new row
        var row = document.createElement('tr');
        var today = new Date();
        var dateStr = (today.getMonth() + 1).toString().padStart(2, '0') + '/' +
            today.getDate().toString().padStart(2, '0') + '/1995';

        row.innerHTML = '<td><font color="#000080">' + name + '</font></td>' +
            '<td>' + message + '</td>' +
            '<td>' + dateStr + '</td>';

        table.appendChild(row);

        // Clear inputs
        nameInput.value = '';
        msgInput.value = '';

        alert('Thanks for signing the guestbook, ' + name + '! 📝');
    });
})();

// --- Blinking "Under Construction" effect for the footer ---
(function () {
    var footerCounter = document.getElementById('visitor-counter-footer');
    if (!footerCounter) return;

    // Just increment it slowly for fun
    var count = 42;
    setInterval(function () {
        count++;
        footerCounter.textContent = count;
    }, 3000);
})();
