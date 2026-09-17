var size = 200;
var colors = ["red", "green", "blue"];
var colorIndex = 0;

$("#balloon").click(function() {
    size += 10;

    if (size > 420) {
        size = 200;
        colorIndex = 0;
    } else {
        colorIndex = (colorIndex + 1) % 3;
    }

    $("#balloon").css({
        width: size + "px",
        height: size + "px",
        "background-color": colors[colorIndex]
    });
});

$("#balloon").mouseleave(function() {
    if (size > 200) {
        size -= 5;
    }

    colorIndex = (colorIndex - 1 + 3) % 3;

    $("#balloon").css({
        width: size + "px",
        height: size + "px",
        "background-color": colors[colorIndex]
    });
});
