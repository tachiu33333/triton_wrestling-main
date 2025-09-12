// Finds the button with the ID "theme-toggle" and stores it in a variable called themeButton
const themeButton = document.getElementById("theme-toggle");


// Adds a "click" event listener to the button
// This means: when the button is clicked, the function inside will run
themeButton.addEventListener("click", () => {
 // Toggles the 'dark-mode' class on the <body> element
 // If the class is not there, it adds it (turning dark mode ON)
 // If the class is already there, it removes it (turning dark mode OFF)
 document.body.classList.toggle("dark-mode");
});
