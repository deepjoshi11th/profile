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

      // Remove any previously added era scripts
      const existingEraScript = document.getElementById("era-script");
      if (existingEraScript) existingEraScript.remove();
      
      // Add the new JS script for the selected era
      const script = document.createElement("script");
      script.type = "module";
      script.src = `/era/${year}/main.js`;
      script.id = "era-script";
      script.async = true;
      document.head.appendChild(script);
    } catch (err) {
      app.innerHTML = `<h2>Error loading year ${year}</h2><p>${err}</p>`;
    }
  
    // Fade-in after new content
    setTimeout(() => {
      app.style.opacity = "1";
    }, 50);
  }
  