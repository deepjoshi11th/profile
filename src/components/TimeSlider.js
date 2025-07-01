export function createTimeSlider() {
    const slider = document.createElement("input");
    slider.type = "range";
    slider.min = 1990;
    slider.max = 2025;
    slider.step = 5;
    slider.value = 2025;
    slider.disabled = true;
  
    slider.oninput = () => {
      const event = new CustomEvent("era-change", {
        detail: { year: slider.value }
      });
      window.dispatchEvent(event);
    };
  
    return slider;
  }
  