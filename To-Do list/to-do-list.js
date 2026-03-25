

const todolist = [{
  name: 'Buy groceries',
  dueDate: '2022-01-15'
}];


renderTodoList();
function renderTodoList(){

  let todolistHTML = ' ';

  todolist.forEach(function(todoObject, index){
    //const name = todoObject.name;
    const { name, dueDate } = todoObject;
    //const dueDate = todoObject.dueDate;
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button onclick = "
        todolist.splice(${index}, 1);
        renderTodoList();
      "
      class = "delete-class"
      > Delete </button> `
    todolistHTML += html;
  })


  document.querySelector('.todo-list').innerHTML = todolistHTML;


}

function addTodo(){
  const inputElement =  document.querySelector('.name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.due-date');

  const dueDate = dateInputElement.value;

  todolist.push({
    name,
    dueDate
  } );


  inputElement.value = '';
  renderTodoList();

} 
