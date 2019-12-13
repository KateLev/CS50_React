const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

itemCountSpan.innerHTML = 0 //to pass the value when newTODO function in unawalable 
let itemCountSpanNumber = 0 //because I need a number, and if I use just innerHTML it gives me a string
let uncheckedCountSpanNumber = 0 


function newTodo() {
  try 
  {
      // create new form
	  
	  let x = document.createElement("INPUT");
	  x.className = classNames.TODO_TEXT  // if we don't have the classes, there must be x.className = 'todo-container'
	
      x.setAttribute("type", "text");
      x.setAttribute("placeholder", "What to do, misstress Weatherwax?");
	  x.setAttribute("id", "myInput");
	 // x.setAttribute("value", "Hi");
	  
	  // create new button
      let y = document.createElement("Button");
      y.className = 'Button'
	  y.innerHTML =  "Confirm"
	  
	  //position for our new elements. I add them to list element	  
	  
	  if (itemCountSpanNumber===0&&uncheckedCountSpanNumber===0) //to prevent creating new form
	  {
		  list.appendChild(x);
		  list.appendChild(y);
	  }
      y.onclick = function() {
		  let node = document.createElement("LI")
		  //  let textNode = document.createTextNode("Water");
		  let textNode = document.getElementById("myInput").value
		//  alert(document.getElementById("myInput").value)
		  node.innerHTML = textNode
		  document.getElementById("todo-list").appendChild(node);
	  };
	  itemCountSpanNumber = itemCountSpanNumber + 1
	  itemCountSpan.innerHTML = itemCountSpanNumber 
}
  catch {
	  uncheckedCountSpanNumber = uncheckedCountSpanNumber + 1 
	  uncheckedCountSpan.innerHTML = uncheckedCountSpanNumber
	  alert('Errorm I did something wrong... ')
  }
}
/*function AddNewTodo()
{
	let node = document.createElement("LI")
	//  let textNode = document.createTextNode("Water");
	let textNode = document.getElementById('myInput').value
	alert(textNode)
	node.appendChild(textNode)// add value as li element
	document.getElementById("todo-list").appendChild(node);
	
}/*/
