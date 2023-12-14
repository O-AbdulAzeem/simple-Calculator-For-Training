
// get the id of our display and store it in a variable
var display = document.getElementById('display');

//a function that appends the value being clicked to our display
function appendToDisplay (value) {
    display.value += value;
}


//A function that clears all it displays
function clearDisplay () {
    display.value = '';
}


function buttonClicked(value) {
    console.log(value)
    display.value += value
}


function equalTo() {
   display.value = eval(display.value)
}


