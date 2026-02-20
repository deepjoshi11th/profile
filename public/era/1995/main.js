// public/era/1995/main.js

window.alert("Welcome to 1995! JavaScript is now live. Click OK to continue.");

const demoText = document.getElementById("js-demo-text");
if (demoText) {
    demoText.innerHTML = `
        <div style="border: 2px dashed #FF0000; padding: 10px; background-color: #FFFF00;">
            <b>Alert:</b> JavaScript has successfully loaded.
            <br><br>
            <button onclick="alert('I was supposed to be born on 2nd of April but I was born on 10th of April as (10)_2 is (2)_10')">
                Click me for the Birthday Joke
            </button>
        </div>
    `;
}
