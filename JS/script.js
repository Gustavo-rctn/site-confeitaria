let indice = 0;
const images = ["IMG/bolo1.jpg", "IMG/bolo2.jpg", "IMG/bolo3.jpg"];

function changeImage() {
    const img = document.getElementById("img");

    if (!img) {
        return;
    }

    img.src = images[indice];
    indice = (indice + 1) % images.length;
}

setInterval(changeImage, 4000);



