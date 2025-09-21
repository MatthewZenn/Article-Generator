const realButton = document.getElementById("picture");
const fakeButton = document.getElementById("open");
const image = document.getElementById("image");
const backgroundImage = document.getElementById("background");
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
 * Sets the article title to whatever was entered into the 'title' field by the user.
 */
document.getElementById('title').addEventListener('change', () => {
  var title = (document.getElementById("title").value);
  document.getElementById("output1").innerHTML = title;
});

document.getElementById('exit').addEventListener('click', () => {
  window.close();
});

/**
 * Exports the generated article as a PNG file. The user will be prompted with a save window to select a save file target.
 */
function printresult() {
  html2canvas(document.querySelector("#result")).then(canvas => {
    document.body.appendChild(canvas).style.visibility = "hidden";
    Canvas2Image.saveAsPNG(canvas, 800, 800);
  });
}

/**
 * Cycles the background image between 3 preset images, or any that are uploaded by the user.
 */
function changeSource()  {
  var index = document.getElementById("sources");
  backgroundImage.setAttribute('src', "Pages/" + index.value + ".png");
  document.documentElement.setAttribute('data-theme', index.value)
}

function invert() {
  if (count == 0) {
    image.style.filter = "grayscale(100%)";
    document.getElementById("invert").style.color = 'rgb(177, 103, 255)';
    count = 1;
  }
  else {
    image.style.filter = "none";
    document.getElementById("invert").style.color = 'grey';
    count = 0;
  }
}

function copyText() {
  document.getElementById("title").select();
  document.execCommand('copy',false);
}