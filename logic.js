const realButton = document.getElementById("picture");
const fakeButton = document.getElementById("open");
const image = document.getElementById("image");


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