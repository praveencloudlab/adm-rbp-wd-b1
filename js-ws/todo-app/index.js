let toDoItems=[];
//document.getElementById('todo-input');
const todoInput=document.querySelector("#todo-input");
const addButton=document.querySelector("#add-button");
const toDoList=document.querySelector("#todo-list");

addButton.addEventListener('click',(event)=>addItem());
todoInput.addEventListener('blur',(event)=>addItem());
todoInput.addEventListener('keydown',(event)=>{
    if(event.key==='Enter'){
        event.preventDefault();
        addItem();
    }
});

    // add item to list
    function addItem(){
    const text=todoInput.value;
   if(!text) return

   //console.log(event);
   const todo={
    id:Date.now(),
    text:text,
    done:false
   };

   toDoItems.push(todo);
   todoInput.value='';
   renderList();
  }

  function deleteItem(id){
   toDoItems=toDoItems.filter(item=>item.id!==id);
   renderList();
  }

  // toggle delete item
  function toggleDone(id){
    const todo=toDoItems.find(item=>item.id===id);
    if(todo) todo.done=!todo.done;
    renderList();
}

   /*
   function renderList() {
    toDoList.innerHTML='';
    toDoItems.forEach(item=>{
        const listItem=document.createElement('div')
        const spanItem=document.createElement('span');
        spanItem.innerHTML=item.text;
        if(item.done) spanItem.classList.add('strike');
        listItem.innerHTML=`
            <input type='checkbox' ${item.done?'checked':''} onclick="toggleDone(${item.id})"/>
            <button onclick="deleteItem(${item.id})">Delete</button>
        `
        listItem.insertBefore(spanItem,listItem.children[1]);
        toDoList.appendChild(listItem);
    });
    */
   
    function countCompletedItems() {
        return toDoItems.filter(item=>item.done).length;
    }

    function countActiveItems() {
        return toDoItems.filter(item=>item.done===false).length;
    }


    function updateItem(id,newText){
        const todo=toDoItems.find(item=>item.id===id);
        if(todo) todo.text=newText;
        renderList();
    }
    function renderList() {
        toDoList.innerHTML='';
        toDoItems.forEach(item=>{
            const listItem=document.createElement('div')
            const spanItem=document.createElement('span');
            spanItem.innerHTML=item.text;
            if(item.done) spanItem.classList.add('strike');

            spanItem.addEventListener('dblclick',function(){
                const input=document.createElement('input');
                input.type='text';
                input.value=item.text;
                input.addEventListener('blur',()=>updateItem(item.id,input.value));
                input.addEventListener('keydown',event=>{
                    if(event.key==='Enter'){
                        event.preventDefault();
                        updateItem(item.id,input.value);
                    }
                });
                listItem.replaceChild(input,spanItem);
                input.focus();
            });

           
            listItem.innerHTML=`
                <input type='checkbox' ${item.done?'checked':''} onclick="toggleDone(${item.id})"/>
                <button onclick="deleteItem(${item.id})">Delete</button>
            `
            listItem.insertBefore(spanItem,listItem.children[1]);
            toDoList.appendChild(listItem);
        });

        const completedCount=countCompletedItems();
        const countText=document.createElement('p');
        countText.textContent='Completed tasks: '+completedCount;
        const activeCount=countActiveItems();
        const countActiveText=document.createElement('p');
        countActiveText.textContent='Active Items: '+activeCount;
        toDoList.appendChild(countText);
        toDoList.appendChild(countActiveText);

    

   }





