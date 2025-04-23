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
    } catch (err) {
      app.innerHTML = `<h2>Error loading year ${year}</h2><p>${err}</p>`;
    }
  
    // Fade-in after new content
    setTimeout(() => {
      app.style.opacity = "1";
    }, 50);
  }
  