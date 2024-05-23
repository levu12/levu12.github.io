const slider = document.querySelector('.slider');
const body = document.body;
const themeLabel = document.querySelector('.theme-label')

function loadTheme() {
    const body = document.body;
    if (localStorage.getItem('darkMode') === 'true') {
        body.classList.add('dark-mode'); 
        themeLabel.classList.add('active');
        body.style.backgroundColor = '#222222';
        body.style.color = '#ff80ff';
    }
    body.classList.remove('hidden');
}

slider.addEventListener('click', function () {
    const body = document.body;

    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        themeLabel.classList.remove('active');
        body.style.backgroundColor = '#ff80ff';
        body.style.color = '#222222';
        localStorage.setItem('darkMode', false);
    } else {
        body.classList.add('dark-mode');
        themeLabel.classList.add('active');
        body.style.backgroundColor = '#222222';
        body.style.color = '#ff80ff';
        localStorage.setItem('darkMode', true);
    }
});

window.addEventListener('load', loadTheme);

// Get all navigation links
var navLinks = document.querySelectorAll('nav a');

// Loop through each navigation link
for (var i = 0; i < navLinks.length; i++) {
    // If the link's href matches the current URL
    if (navLinks[i].href === window.location.href) {
        // Add the 'active' class
        navLinks[i].classList.add('active');
    }
}