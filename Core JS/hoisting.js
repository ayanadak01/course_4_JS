// hoisting is able to access variable before even declaring

console.log(a);
var a = 9;
console.log(a);

greetings();

// function declaration
function greetings() {
  console.log("Hello");
}

// function expression
var greetings = () => {
  console.log("Hello");
};
