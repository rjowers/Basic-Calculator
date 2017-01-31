var valueOne = document.getElementById("value-one")
var valueTwo = document.getElementById("value-two");
var button = document.getElementById("calculate-button");
var Answer = document.getElementById("answer");



button.addEventListener('click', Add);


function Add(event) {
    event.preventDefault();
    var result = Number(valueOne.value) + Number(valueTwo.value);

    Answer.innerHTML = result;
}
