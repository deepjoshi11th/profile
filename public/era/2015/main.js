const btn = document.getElementById('changeBtn');
const appArea = document.getElementById('appArea');
if (btn && appArea) {
  btn.addEventListener('click', () => {
    appArea.textContent = 'Content updated dynamically without reload (like an SPA)!';
  });
}
