const input = document.getElementById('todo-input')
const addBtn = document.getElementById('add-btn');
const list = document.getElementById('todo-list');

const tasks = [];

function render() {
  list.innerHTML = '';              

    for (let i = 0; i < tasks.length; i++) {
    const item = document.createElement('div');
    item.textContent = tasks[i];
    list.appendChild(item)
    }
}

function addTask() {
  const text = input.value;
  if (text === '') return;

  tasks.push(text);                 
  render();                         

  input.value = '';
  input.focus()
}

addBtn.addEventListener('click', addTask);