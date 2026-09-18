$(document).ready(function() {

    $("#new").click(function() {

        var task = prompt("Enter a new task:");

        if (task !== null && task.trim() !== "") {

            var todo = $("<div></div>")
                .text(task)
                .css({
                    "padding": "10px",
                    "margin": "5px",
                    "background-color": "#eeeeee",
                    "cursor": "pointer"
                });

            todo.click(function() {

                if (confirm("Do you want to delete this task?")) {
                    $(this).remove();
                }

            });

            $("#ft_list").prepend(todo);
        }

    });

});
