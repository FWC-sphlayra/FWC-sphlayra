$(document).ready(function() {

    $("#calc").click(function() {

        var left = parseFloat($("#left").val());
        var right = parseFloat($("#right").val());
        var operator = $("#operator").val();

        if (isNaN(left) || isNaN(right) || left < 0 || right < 0) {
            alert("Error :(");
            return;
        }

        if ((operator == "/" || operator == "%") && right == 0) {
            alert("It's over 9000!");
            console.log("It's over 9000!");
            return;
        }

        var result;

        if (operator == "+") {
            result = left + right;
        } else if (operator == "-") {
            result = left - right;
        } else if (operator == "*") {
            result = left * right;
        } else if (operator == "/") {
            result = left / right;
        } else if (operator == "%") {
            result = left % right;
        }

        alert(result);
        console.log(result);
    });

});
