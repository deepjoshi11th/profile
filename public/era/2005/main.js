// simple AJAX-like quote load
const btn = document.getElementById('fetchButton');
const quote = document.getElementById('quote');
if (btn && quote) {
  btn.addEventListener('click', () => {
    // simulate AJAX
    setTimeout(() => {
      quote.textContent = 'You clicked and got this without reloading!';
    }, 500);
  });
}
