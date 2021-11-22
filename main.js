window.addEventListener('load', main);

// State
let isDarkMode = false;


function main() {
    // Set theme 
    addEventListeners();
}

function addEventListeners() {
    const toggleButton = document.querySelector('button');
    toggleButton.addEventListener('click', toggleTheme);
}

function toggleTheme() {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle('dark-mode'); 

    localStorage.isDarkMode = isDarkMode;
} 
