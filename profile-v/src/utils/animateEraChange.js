export async function renderEra(year) {
    const app = document.getElementById("app");
  
    // Add fade-out animation
    app.style.opacity = "0";
  
    // Wait for animation to finish
    await new Promise(resolve => setTimeout(resolve, 300));
  
    // Load HTML content for selected era
    try {
      const response = await fetch(`/src/era/${year}/index.html`);
      const htmlText = await response.text();
      // Inject content into the #app div
      app.innerHTML = htmlText;

      // Remove any previously added era styles
      const existingEraStyle = document.getElementById("era-style");
      if (existingEraStyle) existingEraStyle.remove();

      // Add the new CSS link for the selected era
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = `/era/${year}/styles.css`;
      link.id = "era-style";
      document.head.appendChild(link);
    } catch (err) {
      app.innerHTML = `<h2>Error loading year ${year}</h2><p>${err}</p>`;
    }
  
    // Fade-in after new content
    setTimeout(() => {
      app.style.opacity = "1";
    }, 50);
  }
  