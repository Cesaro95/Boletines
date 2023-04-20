let links = document.querySelectorAll(".close");
links.forEach(function (link) {
    link.addEventListener("click", function (ev) {
        ev.preventDefault();
        let content = document.querySelector(".content");

        //Quitar clases
        content.classList.remove("animate__animated");
        content.classList.remove("animate__fadeInDown");
        //Añadir clases
        content.classList.add("animate__animated");
        content.classList.add("animate__fadeOutUp");

        setTimeout(function () {
            location.href = "/Boletines";
        }, 600);
        return false;
    });
});

