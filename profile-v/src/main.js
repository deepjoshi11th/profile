import { renderEra } from './utils/animateEraChange.js';
import { createTimeSlider } from './components/TimeSlider.js';

document.body.appendChild(createTimeSlider());

renderEra("2025"); // default view

window.addEventListener('era-change', (e) => {
  renderEra(e.detail.year);
});
