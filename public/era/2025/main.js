import { typeNextLine } from './subtitleAnimation.js';

const lines = [
  "I build web ideas that time travel.",
  "I turn philosophy into UI.",
  "I create logic-driven designs."
];
const subtitle = document.getElementById("subtitle");

typeNextLine(subtitle, lines);

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target); // Optional: trigger once
    }
  });
}, {
  threshold: 0.1,
});

// Reveal sections on scroll
document.querySelectorAll('.reveal-section').forEach((section, index) => {
  section.style.transitionDelay = `${index * 100}ms`;
  observer.observe(section);
});


// Toggle functionality for mistake cards
document.querySelectorAll('.toggle-btn').forEach(button => {
  button.addEventListener('click', () => {
    const card = button.closest('.mistake-card');
    const summary = card.querySelector('.mistake-summary');
    const full = card.querySelector('.mistake-full');

    if (summary.classList.contains('hidden')) {
      // Stage 1 → 2
      summary.classList.remove('hidden');
      button.textContent = 'read';
    } else if (full.classList.contains('hidden')) {
      // Stage 2 → 3
      full.classList.remove('hidden');
      button.style.display = 'none'; // optional, remove the button
    }
  });
});


const items = document.querySelectorAll('.carousel-item');
let current = 0;
function showItem(idx) {
  items.forEach((item, i) => {
    item.classList.toggle('active', i === idx);
  });
}
document.querySelector('.carousel-btn.next').onclick = () => {
  current = (current + 1) % items.length;
  showItem(current);
};
document.querySelector('.carousel-btn.prev').onclick = () => {
  current = (current - 1 + items.length) % items.length;
  showItem(current);
};
let autoScrollInterval = setInterval(() => {
  current = (current + 1) % items.length;
  showItem(current);
}, 4000);

// Pause auto-scroll on mouse enter, resume on mouse leave
const carousel = document.querySelector('.carousel');
if (carousel) {
  carousel.addEventListener('mouseenter', () => clearInterval(autoScrollInterval));
  carousel.addEventListener('mouseleave', () => {
    autoScrollInterval = setInterval(() => {
      current = (current + 1) % items.length;
      showItem(current);
    }, 4000);
  });
}

const codexButton = document.querySelector('.codex-trigger');
const codexStatus = document.getElementById('codex-status');
if (codexButton && codexStatus) {
  codexButton.addEventListener('click', () => {
    const now = new Date();
    codexStatus.textContent = `Status: checkpoint passed at ${now.toLocaleTimeString()}.`;
    codexButton.textContent = 'Checkpoint Complete';
    codexButton.disabled = true;
  });
}
