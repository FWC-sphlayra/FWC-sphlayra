var list = document.getElementById("ft_list");
var newButton = document.getElementById("new");

function saveTodos() {
    var todos = [];

    var items = list.querySelectorAll(".todo");

    for (var i = 0; i < items.length; i++) {
        todos.push(items[i].textContent);
    }

    document.cookie = "todos=" + encodeURIComponent(JSON.stringify(todos)) + "; path=/; max-age=31536000";
}

function createTodo(text) {
    var todo = document.createElement("div");

    todo.className = "todo";
    todo.textContent = text;

    todo.addEventListener("click", function() {
        var confirmed = confirm("Do you want to remove this TO DO?");

        if (confirmed) {
            todo.remove();
            saveTodos();
        }
    });

    list.insertBefore(todo, list.firstChild);
}

function loadTodos() {
    var cookies = document.cookie.split("; ");

    for (var i = 0; i < cookies.length; i++) {
        var parts = cookies[i].split("=");

        if (parts[0] === "todos") {
            try {
                var todos = JSON.parse(decodeURIComponent(parts.slice(1).join("=")));

                for (var j = todos.length - 1; j >= 0; j--) {
                    createTodo(todos[j]);
                }
            } catch (error) {
                return;
            }
        }
    }
}

newButton.addEventListener("click", function() {
    var text = prompt("Create a new TO DO:");

    if (text !== null && text.trim() !== "") {
        createTodo(text);
        saveTodos();
    }
});

loadTodos();

