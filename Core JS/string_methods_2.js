let text = "Hello Ayan !!";

console.log(text.charAt(0));
console.log(text.charCodeAt(0));
console.log(text.at(-2));
console.log(text[2]);

// text slice
console.log(text.slice(2));
console.log(text.slice(2, 8));
console.log(text.slice(-6));

// substring
console.log(text.substring(2));
console.log(text.substring(2, 8));
console.log(text.substring(-6)); //negative indexing is not considered

let text2 = "HELLO AYAN";
let text3 = "hello ayan";
console.log(text2.toLowerCase());
console.log(text3.toUpperCase());
