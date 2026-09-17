var balloon = document.getElementById("balloon");

var size = 200;
var colors = ["red", "green", "blue"];
var colorIndex = 0;

balloon.addEventListener("click", function() {
    size += 10;

    if (size > 420) {
        size = 200;
        colorIndex = 0;
    } else {
        colorIndex = (colorIndex + 1) % 3;
    }

    balloon.style.width = size + "px";
    balloon.style.height = size + "px";
    balloon.style.backgroundColor = colors[colorIndex];
});

balloon.addEventListener("mouseleave", function() {
    if (size > 200) {
        size -= 5;
    }

    colorIndex = (colorIndex - 1 + 3) % 3;

    balloon.style.width = size + "px";
    balloon.style.height = size + "px";
    balloon.style.backgroundColor = colors[colorIndex];
});
