// 2010 — jQuery-style Like button

(function () {
    const likeBtn = document.getElementById('like-btn');
    const likeCount = document.getElementById('like-count');
    if (!likeBtn || !likeCount) return;

    let liked = false;
    let count = 42;

    likeBtn.addEventListener('click', function () {
        liked = !liked;
        count += liked ? 1 : -1;
        likeBtn.style.color = liked ? '#3b5998' : '#65676b';
        likeBtn.innerHTML = liked ? '&#128077; Liked' : '&#128077; Like';
        likeCount.textContent = count + ' people like this';

        // jQuery-style: animate the button
        likeBtn.style.transform = 'scale(1.15)';
        setTimeout(() => { likeBtn.style.transform = 'scale(1)'; }, 150);
    });
})();

// Animate trend bars on load
(function () {
    const fills = document.querySelectorAll('.trend-fill');
    fills.forEach(fill => {
        const target = fill.style.width;
        fill.style.width = '0%';
        setTimeout(() => { fill.style.width = target; }, 300);
    });
})();
