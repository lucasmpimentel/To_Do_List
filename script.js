// Código do início até a linha 40 foi baseado no código do w3School:
// https://www.w3schools.com/howto/howto_js_todolist.asp

// ------------------------------ SELETOR DE TASK -------------------------------------
const list = document.querySelector('ol');
list.addEventListener('click', (ev) => {
  const select = document.querySelector('.clicked');
  if (select === null) {
    ev.target.classList.add('clicked');
  } else {
    select.classList.remove('clicked');
    ev.target.classList.add('clicked');
  }
});

// ----------------------------- MARCA CONCLUIDA ---------------------------
const listId = document.getElementById('lista-tarefas');
listId.addEventListener('dblclick', (event) => {
  const dClick = event.target;
  if (dClick.classList.contains('completed')) {
    dClick.classList.remove('completed');
  } else {
    dClick.classList.add('completed');
  }
});

// ---------------------------- EVENTO BOTÃO ADICIONAR -------------------------------------
function newTask() {
  const task = document.createElement('li');
  const inputValue = document.getElementById('texto-tarefa').value;
  const tasksText = document.createTextNode(inputValue);
  task.appendChild(tasksText);
  if (inputValue === '') {
    alert('Insira uma tarefa');
  } else {
    document.getElementById('lista-tarefas').appendChild(task);
  }
  document.getElementById('texto-tarefa').value = null;
}
const taskGen = document.querySelector('#criar-tarefa');
taskGen.addEventListener('click', newTask);

// ------------------------- APAGA TUDO ---------------------------

const eraseAll = document.querySelector('#apaga-tudo');
eraseAll.addEventListener('click', () => {
  list.innerHTML = '';
});

// ------------------------- APAGA COMPLETA ------------------

const remove = document.querySelector('#remover-finalizados');
remove.addEventListener('click', () => {
  const erase = document.querySelectorAll('.completed');
  for (let i in erase) {
    erase[i].remove();
  }
});
