const realButton = document.getElementById("picture");
const fakeButton = document.getElementById("open");
const image = document.getElementById("image");

const realButton2 = document.getElementById("background-image");
const fakeButton2 = document.getElementById("custom");
const backgroundImage = document.getElementById("background");
let styles = ["cnn", "onion", "fox"]
var count = 0;

Index = 1;

/**
 * Maps the button for selecting an image to include in the generated article.
 */
fakeButton.addEventListener("click", function() {
    realButton.click()
});


/**
 * Handler for selecting an image to include in the generated article.
 */
realButton.addEventListener("change", function() {
    const file = this.files[0];

    if (file) {
        const reader = new FileReader();

        reader.addEventListener("load", function() {
            image.setAttribute('src', this.result);
        });
        reader.readAsDataURL(file);
    }
});

/**
 * Creates a mapping to the button that allows selection of a background image for the generated article.
 */
fakeButton2.addEventListener("click", function() {
    realButton2.click()
});

/**
 * Performs mapping for button to change the background image of the generated article.
 */
realButton2.addEventListener("change", function() {
    const file2 = this.files[0];

    if (file2) {
        const reader2 = new FileReader();

        reader2.addEventListener("load", function() {
            backgroundImage.setAttribute('src', this.result);
        });
        reader2.readAsDataURL(file2);
    }
});

/**
 * Sets the article title to whatever was entered into the 'title' field by the user.
 */
document.getElementById('title').addEventListener('change', () => {
    var title = (document.getElementById("title").value);
    document.getElementById("output1").innerHTML = title;
});

/**
 * Exports the generated article as a PNG file. The user will be prompted with a save window to select a save file target.
 */
function printresult() {
    html2canvas(document.querySelector("#result")).then(canvas => {
        document.body.appendChild(canvas).style.visibility = "hidden";
        Canvas2Image.saveAsPNG(canvas, 600, 600);
    });
}

/**
 * Cycles the background image between 3 preset images, or any that are uploaded by the user.
 */
function changeSource()  {
    var index = document.getElementById("sources");
    backgroundImage.setAttribute('src', index.value + ".png");
    document.documentElement.setAttribute('data-theme', index.value)
}

function invert() {
    if (count == 0) {
        image.style.filter = "grayscale(100%)";
        document.getElementById("invert").style.color = 'grey';
        count = 1;
    }
    else {
        image.style.filter = "none";
        document.getElementById("invert").style.color = 'white';
        count = 0;
    }
}