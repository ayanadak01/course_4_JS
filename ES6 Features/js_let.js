var a = 100; // var - Global scoped variable
let x = 34; // let - Block scoped variable
// cannot redeclare let variables again

{
  let x = 100;
  var a = 89;
  let z = 67;
  console.log(z);
}

console.log(x);
console.log(a);
