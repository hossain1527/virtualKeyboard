let Keyboard = window.SimpleKeyboard.default;

let myKeyboard = new Keyboard({
  onChange: (input) => onChange(input),
  onKeyPress: (button) => onKeyPress(button),
});

/************onChange function is called
 to put input value to the output div***********/

function onChange(input) {
  document.querySelector(".input_item").value = input;
  console.log("Value Changed", input);
}

function onKeyPress(button) {
  console.log("Clicked", button);
}
