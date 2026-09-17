function saveTodos() {
    var todos = [];

    $("#ft_list .todo").each(function() {
        todos.push($(this).text());
    });

    document.cookie = "todos=" +
        encodeURIComponent(JSON.stringify(todos)) +
        "; path=/; max-age=31536000";
}

function createTodo(text) {
    var todo = $("<div>")
        .addClass("todo")
        .text(text);

    todo.click(function() {
        if (confirm("Do you want to remove this TO DO?")) {
            $(this).remove();
            saveTodos();
        }
    });

    $("#ft_list").prepend(todo);
}

function loadTodos() {
    var cookies = document.cookie.split("; ");

    for (var i = 0; i < cookies.length; i++) {
        var parts = cookies[i].split("=");

        if (parts[0] === "todos") {
            try {
                var todos = JSON.parse(
                    decodeURIComponent(parts.slice(1).join("="))
                );

                for (var j = todos.length - 1; j >= 0; j--) {
                    createTodo(todos[j]);
                }
            } catch (error) {
                return;
            }
        }
    }
}

$("#new").click(function() {
    var text = prompt("Create a new TO DO:");

    if (text !== null && text.trim() !== "") {
        createTodo(text);
        saveTodos();
    }
});

loadTodos();
