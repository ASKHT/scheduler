const form = document.getElementById("form");
const input = document.getElementById("input");
const todosUL = document.getElementById("todos");

const todos = document.getElementById("todos");
const arroflist = JSON.parse(localStorage.getItem("Todo"));

// console.log(span);
if (arroflist) {
  arroflist.forEach((todo) => {
    addTodo(todo);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  addTodo();
});
function addTodo(todo) {
  let val = input.value;
  if (todo) {
    val = todo.Text;
  }
  if (val) {
    const todoe1 = document.createElement("li");
    todoe1.innerText = val;

    todosUL.appendChild(todoe1);
    todoe1.addEventListener("click", () => {
      todoe1.classList.toggle("completed");
      iscomplete = true;

      updateli();
    });

    todoe1.addEventListener("contextmenu", (e) => {
      e.preventDefault();

      todoe1.remove();

      updateli();
    });

    input.value = "";
    updateli();
  } else {
    return;
  }
}

function updateli() {
  const todos1 = document.querySelectorAll("li");
  const arroflist = [];
  todos1.forEach((item) => {
    arroflist.push({
      id: new Date().getTime(),
      Text: item.innerText,
      iscomplete: false,
    });
  });
  localStorage.setItem("Todo", JSON.stringify(arroflist));
}
