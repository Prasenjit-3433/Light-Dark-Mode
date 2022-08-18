const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

// Switch Mode
function switchMode(mode, values){
    // Setting color sheme for different modes
    document.documentElement.setAttribute('data-theme', mode);

    // Changing BgColor, Content
    nav.style.backgroundColor = values.navBgColor;
    textBox.style.backgroundColor = values.textBoxBgColor;
    toggleIcon.children[0].textContent = values.toggleTextContent;
    toggleIcon.children[1].className = `fas fa-${values.toogleIcon}`;
    image1.src = `img/undraw_proud_coder_${mode}.svg`;
    image2.src = `img/undraw_feeling_proud_${mode}.svg`;
    image3.src = `img/undraw_conceptual_idea_${mode}.svg`;
}

// Switch Theme Dynamically
function switchTheme(event) {
    if (event.target.checked) {
        switchMode('dark', {
            navBgColor: 'rgb(0 0 0 / 50%)',
            textBoxBgColor: 'rgb(255 255 255 / 50%)',
            toggleTextContent: 'Dark Mode',
            toogleIcon: 'moon',
        })
    } else {
        switchMode('light', {
            navBgColor: 'rgb(255 255 255 / 50%)',
            textBoxBgColor: 'rgb(0 0 0 / 50%)',
            toggleTextContent: 'Light Mode',
            toogleIcon: 'sun',
        })
    }
}

// Event Listener
toggleSwitch.addEventListener('change', switchTheme);