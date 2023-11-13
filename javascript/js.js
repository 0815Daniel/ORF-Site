document.addEventListener("DOMContentLoaded", function () {
    let buttonsVisible = false;

    const toggleButtons = function () {
        document.querySelectorAll("header nav button:nth-last-child(-n+3)").forEach(function (button) {
            button.style.display = buttonsVisible ? "none" : "block";
        });
        buttonsVisible = !buttonsVisible;
    };

    document.querySelector("header nav button:nth-child(4)").addEventListener("click", function () {
        toggleButtons();
    });

    // Überprüfen Sie die Bildschirmbreite beim Laden der Seite und passen Sie die Buttons an
    window.addEventListener("resize", function () {
        if (window.innerWidth > 768 && buttonsVisible) {
            toggleButtons();
        }
    });
});
