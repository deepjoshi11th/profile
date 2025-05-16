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

document.querySelectorAll('.reveal-section').forEach((section, index) => {
  section.style.transitionDelay = `${index * 100}ms`;
  observer.observe(section);
});

