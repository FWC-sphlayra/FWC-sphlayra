$("#calculate").click(function() {
    var left = $("#left").val();
    var right = $("#right").val();
    var operator = $("#operator").val();

    if (!/^\d+$/.test(left) || !/^\d+$/.test(right)) {
        alert("Error :(");
        return;
    }

    var a = parseInt(left);
    var b = parseInt(right);
    var result;

    if ((operator === "/" || operator === "%") && b === 0) {
        alert("It's over 9000!");
        console.log("It's over 9000!");
        return;
    }

    switch (operator) {
        case "+":
            result = a + b;
            break;

        case "-":
            result = a - b;
            break;

        case "*":
            result = a * b;
            break;

        case "/":
            result = a / b;
            break;

        case "%":
            result = a % b;
            break;
    }

    alert(result);
    console.log(result);
});

setInterval(function() {
    alert("Please, use me...");
}, 30000);
