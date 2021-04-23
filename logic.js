const realButton = document.getElementById("picture");
const fakeButton = document.getElementById("open");
const image = document.getElementById("image");

const realButton2 = document.getElementById("background-image");
const fakeButton2 = document.getElementById("custom");
const backgroundImage = document.getElementById("background");
let outlets = ["news.png", "news2.png", "news3.png"]

Index = 1;

fakeButton.addEventListener("click", function() {
    realButton.click()
});

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

fakeButton2.addEventListener("click", function() {
    realButton2.click()
});

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

function textinput() {
    var title = (document.getElementById("title").value);
    document.getElementById("output1").innerHTML = title;
}

function printresult() {
    html2canvas(document.querySelector("#result")).then(canvas => {
        document.body.appendChild(canvas).style.visibility = "hidden";
        Canvas2Image.saveAsPNG(canvas, 600, 600);
    });
}

function changeSource()  {
    if (Index < outlets.length) {
        backgroundImage.setAttribute('src', outlets[Index]);
        Index++;
     }
     else {
        Index = 0;   
     }
}