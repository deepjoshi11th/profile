export function createTimeSlider() {
    const slider = document.createElement("input");
    slider.type = "range";
    slider.min = 1990;
    slider.max = 2025;
    slider.step = 5;
    slider.value = 2025;
    // make the control usable immediately
    slider.disabled = false;
  
    // container holds the slider and the label
    const container = document.createElement('div');
    container.style.textAlign = 'center';

    const label = document.createElement('div');
    label.textContent = `Year: ${slider.value}`;
    label.style.marginTop = '4px';

    slider.oninput = () => {
      label.textContent = `Year: ${slider.value}`;
      const event = new CustomEvent("era-change", {
        detail: { year: slider.value }
      });
      window.dispatchEvent(event);
    };

    container.appendChild(slider);
    container.appendChild(label);
    return container;
  }
  