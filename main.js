window.addEventListener('load', main);

// State
let isDarkMode = false;


function main() {
    // Set theme from local storage 
    addEventListeners();
    loadThemeFromLocalStorage();
    renderTheme();
}

function loadThemeFromLocalStorage() {
    isDarkMode = JSON.parse(localStorage.isDarkMode);
}

function renderTheme() {
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
}

function addEventListeners() {
    const toggleButton = document.querySelector('button');
    toggleButton.addEventListener('click', toggleTheme);
}

function toggleTheme() {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle('dark-mode');
    localStorage.isDarkMode = isDarkMode;
    renderTheme();
}