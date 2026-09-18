$(document).ready(function() {

    var colors = ["red", "green", "blue", "yellow"];
    var index = 0;

    $("body").css("background-color", colors[index]);

    $("#changeColor").click(function() {
        index = (index + 1) % colors.length;
        $("body").css("background-color", colors[index]);
    });

});
