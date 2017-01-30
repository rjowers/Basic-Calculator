
var valueOne = document.getElementById("value-one")
var valueTwo = document.getElementById("value-two");
var button = document.getElementById("calculate-button");
var Answer= document.getElementById("answer");





function Add ()
{
  var result= (Number(valueOne.value) + Number(valueTwo.value));
  console.log(result);
  console.log(result);
  Answer.innerHTML = result;

  // 1. make it print out what's in text box 1 and text box 2
  // 2. make it add those two things together and print it
  // 3. make it put that on the page instead
}

button.addEventListener('click', Add);
