let firstName = "Ayan";
console.log(typeof firstName);

let lastName = "Adak";
console.log(typeof lastName);

// using different quotes
let sentence = 'My name is "AYAN" and I love Full Stack Development';
console.log(sentence);

// escape sequence
let sentence1 = 'My name is "AYAN" and I love Full Stack Development';
console.log(sentence);

let words = "It's alright";
console.log(words);

console.log(sentence1.length);

// String as Object
let fullNameLiteral = "Ayan Adak"; // recommended way of creating strings
console.log(typeof fullNameLiteral);

let fullName = new String("Ayan Adak");
console.log(fullName);
console.log(typeof fullName);

console.log(fullNameLiteral == fullName);
console.log(fullNameLiteral === fullName);

let color1 = new String("red");
let color2 = new String("red");
console.log(color1 == color2);
console.log(color1 === color2);

// comparing 2 objects in javascript returns false
