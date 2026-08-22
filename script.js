// =========================
// IMAGE POPUP
// =========================

const galleryImages = document.querySelectorAll(
    ".gallery-container img"
);

galleryImages.forEach(function (image) {

    image.addEventListener("click", function () {

        const overlay = document.createElement("div");

        overlay.classList.add("image-overlay");

        const enlargedImage = document.createElement("img");

        enlargedImage.src = image.src;
        enlargedImage.alt = image.alt;

        overlay.appendChild(enlargedImage);

        document.body.appendChild(overlay);


        // Close popup when clicked
        overlay.addEventListener("click", function () {

            overlay.remove();

        });

    });

});