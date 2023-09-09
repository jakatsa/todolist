/*create a variable to use in js for the button*/
let addToDoButton= document.getElementById('addToDo');
/*create a variable to use in js */
let toDoContainer=document.getElementById('to-docontainer');
/*create a variable to use in js*/
let inputField=document.getElementById('inputField');
/*when button clicked it creates new paragraph*/
addToDoButton.addEventListener('click',function(){
    /* paragraph creates an new paragraph  */ 
    var paragraph=document.createElement('p');
   /*************** */
   let taskText=document.createElement('span');
   taskText.innerText = inputField.value;

   // Create a span element for the symbol
   var symbol = document.createElement('span');
   symbol.innerText = '\u00d7';
   /**styling for X symbol */
   symbol.classList.add('symbol-styling');
    /*this is the style of the 'p' element*/
    paragraph.classList.add('paragraph-styling');
    /******* */
    paragraph.appendChild(taskText);
    paragraph.appendChild(symbol);
    /*the paragrapgh element is appended to the todo container thus displaying the input */
    toDoContainer.appendChild(paragraph);

   
    /*the input field value is set to blank everytime the button is clicked */
    inputField.value='';

    
    /*this function when double clicked will remove items from your todo list*/
    symbol.addEventListener('click',function(){
        toDoContainer.removeChild(paragraph);
    })
  });

/************* */

/*create new variable for the input field*/








