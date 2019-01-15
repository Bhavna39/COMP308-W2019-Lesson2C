/* javascript */

//global scope

let myGlobalVariable = 0;



// self-executing anonymous funtion 
// IIFE -- Immediately Invoked Function Expression
(function()
{
    let myFunctionalVariable = 0;

  //functional scope 
  function Start()
  {
    let myLocalVariable = 0;
    console.log(`App started...${myFunctionalVariable}`);
  } 

  window.addEventListener("load", Start);
})();