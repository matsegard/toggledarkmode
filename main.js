window.addEventListener('load', main);

// State
let isDarkMode = false;

/** Start of the program */
function main() {
    // Set theme from local storage 
    addEventListeners();
    loadThemeFromLocalStorage();
    renderTheme();
}

/** Loads isdarkmode from local storage and saves it to a global variable */
function loadThemeFromLocalStorage() {
    isDarkMode = JSON.parse(localStorage.isDarkMode);
}

/** Toggles class on body element based on isDarkMode state */
function renderTheme() {
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
}

/** Add alla event listeners needed on page load  */
function addEventListeners() {
    const toggleButton = document.querySelector('button');
    toggleButton.addEventListener('click', toggleTheme);
}

/** Toggle theme variable, saves it to local storage and renders page */
function toggleTheme() {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle('dark-mode');
    localStorage.isDarkMode = isDarkMode;
    renderTheme();
}