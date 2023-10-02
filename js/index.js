document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu");

    menuToggle.addEventListener("click", function () {
        menu.classList.toggle("active");
    });
})
let images = ["0", "1", "2"];
let id = 0;

function next() {
    if (id === images.length - 1) {
        id = 0;
    } else {
        id++;
    }
    document.getElementById("im").src = images[id] + ".jpg";
}

function prev() {
    if (id === 0) {
        id = images.length - 1;
    } else {
        id--;
    }
    document.getElementById("im").src = images[id] + ".jpg";
}

function repeat() {
    setInterval(next, 5000);
}

window.onload = function () {
    document.getElementById("next").addEventListener("click", next);
    document.getElementById("prev").addEventListener("click", prev);
    repeat();
};
window.onload = function () {
    repeat();
};