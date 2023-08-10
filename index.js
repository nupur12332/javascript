const Input = document.querySelector('newTodo');
const add_Btn = document.querySelector('addTodo');
const List = document.querySelector('todoList');

add_Btn.addEventListener('click', () => {
  const Text = Input.value.trim();
  if (Text !== '') {
    createTodoItem(Text);
    Input.value = '';
  }
});

function createTodoItem(Text){
    const li =document.createElement('li');
    const checkbox=document.createElement('li');
    checkbox.type ='checkbox';
    const dlt_Btn= document.createElement('button');
    dlt_Btn.textContent='Delete';

    checkbox.addEventListener('change',()=>{
        if (checkbox.checked){
            li.classList.add('checked')
        }
    });
    dlt_Btn.addEventListener('click',()=>{
        li.classList.add('deleted');
        li.remove();
    });

    li.appendChild(checkbox);
    li.appendChild(dlt_Btn);
    List.appendChild(li);
}