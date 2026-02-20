// public/era/2000/main.js
window.triggerY2K = function () {
    alert("LOADING MACROMEDIA FLASH PLAYER...");
    setTimeout(() => {
        alert("JUST KIDDING! FLASH IS DEAD!");
        const colors = ["#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF", "#00FFFF"];
        let count = 0;
        const interval = setInterval(() => {
            document.body.style.backgroundColor = colors[count % colors.length];
            count++;
            if (count > 20) {
                clearInterval(interval);
                document.body.style.backgroundColor = "#000000";
            }
        }, 100);
    }, 1000);
};

// Fun cursor trailer (basic implementation for the vibe)
const cursor = document.createElement('div');
cursor.style.position = 'fixed';
cursor.style.width = '10px';
cursor.style.height = '10px';
cursor.style.backgroundColor = '#00FF00';
cursor.style.borderRadius = '50%';
cursor.style.pointerEvents = 'none';
cursor.style.zIndex = '9999';
cursor.style.transition = 'all 0.1s ease';
document.body.appendChild(cursor);

window.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});
