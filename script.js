// -------------------------- Declarações e Get's ------------------------------

const listContent = document.getElementsByTagName('li');

// ------------------------- CLOSE BUTTON  NA LISTA ------------------------------------

for (let i = 0; i < listContent.length; i += 1) {
  const close = document.createElement('span');
  const closeTxt = document.createTextNode('X');
  close.className = 'close';
  close.appendChild(closeTxt);
  listContent[i].appendChild(close);
}

// -------------------------- CHECK NO INICIO DA LISTA -------------------------------------
const list = document.querySelector('ol');
list.addEventListener('click', (ev) => {
  if (ev.target.tagName === 'li') {
    ev.target.classList.toggle('checked');
  }
}, false);

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
