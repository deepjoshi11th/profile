export function createTimeSlider() {
    const slider = document.createElement("input");
    slider.type = "range";
    slider.min = 1990;
    slider.max = 2025;
    slider.step = 5;
    slider.value = 2025;
    // enable the range control
    slider.disabled = false;

    // build container that will be fixed at bottom
    const container = document.createElement('div');
    container.id = 'time-slider-container';

    // year label above slider
    const yearLabel = document.createElement('div');
    yearLabel.className = 'year-label';
    yearLabel.textContent = `Year: ${slider.value}`;

    // slider element remains inside container
    slider.oninput = () => {
      yearLabel.textContent = `Year: ${slider.value}`;
      const event = new CustomEvent("era-change", {
        detail: { year: slider.value }
      });
      window.dispatchEvent(event);
    };

    // create ruler ticks beneath slider
    const ticksWrapper = document.createElement('div');
    ticksWrapper.className = 'ticks';
    const min = parseInt(slider.min, 10);
    const max = parseInt(slider.max, 10);
    const step = parseInt(slider.step, 10);
    const range = max - min;
    for (let year = min; year <= max; year += step) {
      const pos = ((year - min) / range) * 100;
      const tick = document.createElement('div');
      tick.className = 'tick';
      tick.style.left = `${pos}%`;
      const tickLabel = document.createElement('div');
      tickLabel.className = 'tick-label';
      tickLabel.textContent = year;
      tickLabel.style.left = `${pos}%`;
      ticksWrapper.appendChild(tick);
      ticksWrapper.appendChild(tickLabel);
    }

    container.appendChild(yearLabel);
    container.appendChild(slider);
    container.appendChild(ticksWrapper);
    return container;
  }
  