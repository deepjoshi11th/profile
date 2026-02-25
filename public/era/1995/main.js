// simple demonstration of JavaScript working in 1995

const button = document.getElementById('showJoke');
const message = document.getElementById('message');

if (button && message) {
  button.addEventListener('click', () => {
    message.textContent = "JavaScript and Deep are both here in 1995!";
  });
}
