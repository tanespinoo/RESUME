function changeColors(className) {
    const body = document.body;
    body.className = className;

    // Get the background color of the body
    const bgColor = window.getComputedStyle(body).backgroundColor;

    // Set the button background color based on the body's background color
    const button = document.getElementById('colorChangeButton');
    button.style.backgroundColor = bgColor;

    // Set the text color for contrast
    button.style.color = getContrastColor(bgColor);

    // Check if the second color combination is selected, and set the button background color to red
    if (className === 'color-combination-2') {
        button.style.backgroundColor = 'red';
    }

    // Check if the third color combination is selected, and set the button background color to indigo
    if (className === 'color-combination-3') {
        button.style.backgroundColor = 'indigo';
    }
}

function getContrastColor(hexColor) {
    // Function to determine the contrast color (black or white) based on the background color
    const r = parseInt(hexColor.slice(1, 3), 16);
    const g = parseInt(hexColor.slice(3, 5), 16);
    const b = parseInt(hexColor.slice(5, 7), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;

    return brightness > 128 ? '#000000' : '#ffffff';
}

const colorChangeButton = document.getElementById('colorChangeButton');
const colorCombinationSelect = document.getElementById('colorCombination');

colorChangeButton.addEventListener('click', function() {
    const selectedColorCombination = colorCombinationSelect.value;
    changeColors(`color-combination-${selectedColorCombination}`);
});
