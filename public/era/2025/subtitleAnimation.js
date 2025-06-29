export function typeNextLine(subtitle, lines) {
  let currentLine = 0;

  function animate() {
    const text = lines[currentLine];
    subtitle.textContent = text;
    subtitle.style.setProperty('--ch-width', `${text.length}ch`);
    subtitle.style.width = '0';

    // Trigger reflow for restart animation
    void subtitle.offsetWidth;

    subtitle.style.animation = `typing 2.5s steps(${text.length}, end) forwards, blink 0.75s step-end infinite`;

    currentLine = (currentLine + 1) % lines.length;

    setTimeout(() => {
      subtitle.style.animation = 'none'; // Remove typing animation
      subtitle.style.borderRight = 'none';
      setTimeout(animate, 500); // Wait before typing next line
    }, 5000);
  }

  animate();
}