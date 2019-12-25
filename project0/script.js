const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

let list = document.getElementById('todo-list')
list.className = classNames.TODO_ITEM // style for todo-list

function newTodo() {
	
	
  try 
  {
	  result = prompt("Input new TODO")
	  if(result)
	  { 
		  result = result.charAt(0).toUpperCase() + result.slice(1);
		  
		  //create new li element and append it to our todo list
		  
		  let node = document.createElement("LI");
		  node.textContent = result;
		  node.className = classNames.TODO_TEXT;
		  document.getElementById("todo-list").appendChild(node);
		  
		  let itemCountSpan = document.getElementById("item-count").textContent; //take element from item-count
		  itemCountSpan = Number(itemCountSpan); //explicit coercion
		  itemCountSpan = itemCountSpan + 1; //increase counter
		  document.getElementById("item-count").textContent = itemCountSpan; //put new counter value
	  }
	  
  }
  catch {
  // increase failer counter by 1
	  let uncheckedCount = document.getElementById("unchecked-count").textContent;
	  uncheckedCount = Number(uncheckedCount)
	  uncheckedCount = uncheckedCount + 1
	  document.getElementById("unchecked-count").textContent = uncheckedCount
	  alert('Error. I did something wrong... ')
  }

}

