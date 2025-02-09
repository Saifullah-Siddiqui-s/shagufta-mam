document.querySelectorAll(".images div").forEach((box) => {
    box.addEventListener("click", function () {
        let imageUrl = this.getAttribute("data-image");
        let modal = document.getElementById("modal");
        let modalImg = document.getElementById("modal-img");

        modal.style.display = "flex";
        modalImg.src = imageUrl;
    });
});

// Close Modal on Click
document.querySelector(".close").addEventListener("click", function () {
    document.getElementById("modal").style.display = "none";
});

// Close Modal on Background Click
document.getElementById("modal").addEventListener("click", function (e) {
    if (e.target === this) {
        this.style.display = "none";
    }
});
