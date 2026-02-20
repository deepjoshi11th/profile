export function createTimeSlider() {
  const container = document.createElement("div");
  container.className = "ruler-container";

  const slider = document.createElement("input");
  slider.type = "range";
  slider.min = 1990;
  slider.max = 2025;
  slider.step = 5;
  slider.value = 2025;
  slider.className = "ruler-slider";

  const ticksContainer = document.createElement("div");
  ticksContainer.className = "ruler-ticks";

  for (let year = 1990; year <= 2025; year += 5) {
    const tick = document.createElement("div");
    tick.className = "ruler-tick";

    const label = document.createElement("span");
    label.className = "ruler-tick-label";
    label.innerText = year;

    tick.appendChild(label);
    ticksContainer.appendChild(tick);
  }

  container.appendChild(slider);
  container.appendChild(ticksContainer);

  slider.oninput = () => {
    const event = new CustomEvent("era-change", {
      detail: { year: slider.value }
    });
    window.dispatchEvent(event);
  };

  return container;
}
