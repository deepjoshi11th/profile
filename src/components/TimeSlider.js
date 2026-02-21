const START_YEAR = 1990;
const END_YEAR = 2025;
const STEP = 5;

// Inline CSS — injected once to ensure ruler styling is always applied
// regardless of era-specific CSS overrides
const RULER_CSS = `
#time-ruler {
  position: fixed !important;
  bottom: 0 !important;
  left: 0 !important;
  right: 0 !important;
  z-index: 9999 !important;
  display: flex !important;
  align-items: center !important;
  gap: 0 !important;
  height: 64px !important;
  background: linear-gradient(180deg, rgba(10, 10, 10, 0.95) 0%, rgba(0, 0, 0, 0.98) 100%) !important;
  backdrop-filter: blur(14px) !important;
  -webkit-backdrop-filter: blur(14px) !important;
  border-top: 1px solid rgba(255, 255, 255, 0.1) !important;
  box-shadow: 0 -4px 30px rgba(0, 0, 0, 0.6) !important;
  padding: 0 16px !important;
  box-sizing: border-box !important;
  font-family: 'SF Mono', 'Fira Code', 'Consolas', monospace !important;
  color: #fff !important;
  font-size: 14px !important;
  line-height: 1.2 !important;
  margin: 0 !important;
  width: 100% !important;
  overflow: visible !important;
  text-align: left !important;
  border-radius: 0 !important;
}

#time-ruler * {
  font-family: 'SF Mono', 'Fira Code', 'Consolas', monospace !important;
  line-height: 1.2 !important;
  text-decoration: none !important;
  box-sizing: border-box !important;
}

/* Arrow buttons */
#time-ruler .ruler-arrow {
  flex-shrink: 0 !important;
  width: 36px !important;
  height: 36px !important;
  min-width: 36px !important;
  border: 1px solid rgba(255,255,255,0.15) !important;
  border-radius: 6px !important;
  background: rgba(255,255,255,0.06) !important;
  color: rgba(255,255,255,0.55) !important;
  font-size: 13px !important;
  cursor: pointer !important;
  transition: all 0.2s ease !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  padding: 0 !important;
  margin: 0 !important;
  outline: none !important;
}
#time-ruler .ruler-arrow:hover {
  background: rgba(255,255,255,0.14) !important;
  color: #fff !important;
  border-color: rgba(255,255,255,0.35) !important;
}
#time-ruler .ruler-arrow:active {
  transform: scale(0.9) !important;
}

/* Track */
#time-ruler .ruler-track {
  flex: 1 !important;
  position: relative !important;
  height: 100% !important;
  margin: 0 20px !important;
  display: flex !important;
  align-items: center !important;
  background: none !important;
  border: none !important;
  padding: 0 !important;
}

/* Base line across the track */
#time-ruler .ruler-track::before {
  content: '' !important;
  position: absolute !important;
  top: 50% !important;
  left: 0 !important;
  right: 0 !important;
  height: 2px !important;
  background: rgba(255,255,255,0.08) !important;
  transform: translateY(-50%) !important;
  border-radius: 1px !important;
  z-index: 0 !important;
}

/* Progress fill */
#time-ruler .ruler-progress {
  position: absolute !important;
  top: 50% !important;
  left: 0 !important;
  height: 2px !important;
  width: 100% !important;
  background: linear-gradient(90deg, #4f46e5, #7c3aed, #a78bfa) !important;
  transform: translateY(-50%) !important;
  border-radius: 1px !important;
  transition: width 0.4s cubic-bezier(0.4,0,0.2,1) !important;
  box-shadow: 0 0 10px rgba(124,58,237,0.4) !important;
  z-index: 1 !important;
  border: none !important;
  padding: 0 !important;
  margin: 0 !important;
}

/* Year marker buttons */
#time-ruler .ruler-marker {
  position: absolute !important;
  transform: translateX(-50%) !important;
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  gap: 3px !important;
  background: none !important;
  border: none !important;
  padding: 6px 6px !important;
  cursor: pointer !important;
  z-index: 3 !important;
  outline: none !important;
  transition: all 0.25s ease !important;
  margin: 0 !important;
  min-width: 0 !important;
  width: auto !important;
  height: auto !important;
}
#time-ruler .ruler-marker:hover {
  border: none !important;
  background: none !important;
}

/* Tick mark */
#time-ruler .ruler-tick {
  display: block !important;
  width: 2px !important;
  height: 14px !important;
  background: rgba(255,255,255,0.18) !important;
  border-radius: 1px !important;
  transition: all 0.3s ease !important;
  border: none !important;
  padding: 0 !important;
  margin: 0 !important;
}

/* Year label */
#time-ruler .ruler-label {
  font-size: 10px !important;
  font-weight: 500 !important;
  color: rgba(255,255,255,0.3) !important;
  letter-spacing: 0.5px !important;
  transition: all 0.3s ease !important;
  white-space: nowrap !important;
  user-select: none !important;
  background: none !important;
  border: none !important;
  padding: 0 !important;
  margin: 0 !important;
}

/* Passed state */
#time-ruler .ruler-marker.passed .ruler-tick {
  background: rgba(167,139,250,0.45) !important;
}
#time-ruler .ruler-marker.passed .ruler-label {
  color: rgba(167,139,250,0.55) !important;
}

/* Hover */
#time-ruler .ruler-marker:hover .ruler-tick {
  height: 20px !important;
  background: rgba(255,255,255,0.45) !important;
}
#time-ruler .ruler-marker:hover .ruler-label {
  color: rgba(255,255,255,0.75) !important;
}

/* Active marker */
#time-ruler .ruler-marker.active .ruler-tick {
  height: 22px !important;
  width: 3px !important;
  background: #a78bfa !important;
  box-shadow: 0 0 10px rgba(167,139,250,0.6), 0 0 20px rgba(167,139,250,0.3) !important;
}
#time-ruler .ruler-marker.active .ruler-label {
  color: #fff !important;
  font-weight: 700 !important;
  font-size: 12px !important;
  text-shadow: 0 0 10px rgba(167,139,250,0.5) !important;
}

/* Active dot */
#time-ruler .ruler-marker.active::after {
  content: '' !important;
  position: absolute !important;
  top: 0px !important;
  width: 6px !important;
  height: 6px !important;
  border-radius: 50% !important;
  background: #a78bfa !important;
  box-shadow: 0 0 8px rgba(167,139,250,0.8) !important;
  animation: rulerPulse 2s ease-in-out infinite !important;
  border: none !important;
  padding: 0 !important;
  margin: 0 !important;
}

@keyframes rulerPulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.6; transform: scale(1.4); }
}

/* Page bottom padding */
body {
  padding-bottom: 72px !important;
}

/* Responsive */
@media (max-width: 480px) {
  #time-ruler {
    height: 56px !important;
    padding: 0 8px !important;
  }
  #time-ruler .ruler-arrow {
    width: 28px !important;
    height: 28px !important;
    min-width: 28px !important;
    font-size: 11px !important;
  }
  #time-ruler .ruler-track {
    margin: 0 10px !important;
  }
  #time-ruler .ruler-label {
    font-size: 8px !important;
  }
  #time-ruler .ruler-marker.active .ruler-label {
    font-size: 10px !important;
  }
  body {
    padding-bottom: 64px !important;
  }
}
`;

function injectStyles() {
  if (document.getElementById('ruler-styles')) return;
  const style = document.createElement('style');
  style.id = 'ruler-styles';
  style.textContent = RULER_CSS;
  document.head.appendChild(style);
}

export function createTimeSlider() {
  injectStyles();

  const years = [];
  for (let y = START_YEAR; y <= END_YEAR; y += STEP) {
    years.push(y);
  }

  // --- Container (sticky bottom bar) ---
  const container = document.createElement("div");
  container.id = "time-ruler";
  container.setAttribute("role", "navigation");
  container.setAttribute("aria-label", "Era timeline selector");

  // --- Arrow prev ---
  const prevBtn = document.createElement("button");
  prevBtn.className = "ruler-arrow ruler-arrow-prev";
  prevBtn.innerHTML = "&#9664;";
  prevBtn.setAttribute("aria-label", "Previous era");
  prevBtn.addEventListener("click", () => {
    const idx = years.indexOf(container._currentYear);
    if (idx > 0) selectYear(years[idx - 1], container);
  });
  container.appendChild(prevBtn);

  // --- Ruler track ---
  const track = document.createElement("div");
  track.className = "ruler-track";

  // --- Progress fill ---
  const progress = document.createElement("div");
  progress.className = "ruler-progress";
  track.appendChild(progress);

  // --- Year markers ---
  years.forEach((year, index) => {
    const marker = document.createElement("button");
    marker.className = "ruler-marker";
    marker.dataset.year = year;
    marker.setAttribute("aria-label", `Go to year ${year}`);
    marker.title = year;

    const pct = (index / (years.length - 1)) * 100;
    marker.style.left = `${pct}%`;

    // Tick line
    const tick = document.createElement("span");
    tick.className = "ruler-tick";
    marker.appendChild(tick);

    // Year label
    const label = document.createElement("span");
    label.className = "ruler-label";
    label.textContent = year;
    marker.appendChild(label);

    // Default active = last year (2025)
    if (year === END_YEAR) {
      marker.classList.add("active");
    }

    marker.addEventListener("click", () => {
      selectYear(year, container);
    });

    track.appendChild(marker);
  });

  container.appendChild(track);

  // --- Arrow next ---
  const nextBtn = document.createElement("button");
  nextBtn.className = "ruler-arrow ruler-arrow-next";
  nextBtn.innerHTML = "&#9654;";
  nextBtn.setAttribute("aria-label", "Next era");
  nextBtn.addEventListener("click", () => {
    const idx = years.indexOf(container._currentYear);
    if (idx < years.length - 1) selectYear(years[idx + 1], container);
  });
  container.appendChild(nextBtn);

  // Store config
  container._years = years;
  container._currentYear = END_YEAR;

  return container;
}

function selectYear(year, container) {
  container._currentYear = year;
  const years = container._years;
  const idx = years.indexOf(year);
  const pct = (idx / (years.length - 1)) * 100;

  // Update progress bar
  const progress = container.querySelector(".ruler-progress");
  progress.style.width = `${pct}%`;

  // Update active marker
  container.querySelectorAll(".ruler-marker").forEach(m => {
    m.classList.toggle("active", Number(m.dataset.year) === year);
    m.classList.toggle("passed", Number(m.dataset.year) < year);
  });

  // Dispatch era-change event
  const event = new CustomEvent("era-change", {
    detail: { year: String(year) }
  });
  window.dispatchEvent(event);
}
