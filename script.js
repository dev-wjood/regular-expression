
let text = document.getElementById('mainText');
const textHistory = [];
// Save initial state
textHistory.push(mainText.textContent);

document.getElementById('replaceButton').addEventListener('click', replaceText);

function replaceText() {
    let searchWord = document.getElementById('searchWord').value;
    let replaceWord = document.getElementById('replaceWord').value;

    // Save current state before making changes
    textHistory.push(mainText.textContent);

    let regex = new RegExp(searchWord, 'gi');
    let originalText = text.textContent;
    let newText = originalText.replace(regex, replaceWord);

    text.textContent = newText;
}

// Undo last change
document.getElementById('undoButton').addEventListener('click', function () {
    if (textHistory.length > 1) {
        mainText.textContent = textHistory.pop(); // Remove last state and restore previous
    } else {
        alert('Nothing to undo!');
    }
});

// Restore original text
document.getElementById('restoreButton').addEventListener('click', function () {
    if (textHistory.length > 0) {
        mainText.textContent = textHistory[0]; // Restore first saved state
        textHistory.length = 1; // Clear history except original
    }
});
