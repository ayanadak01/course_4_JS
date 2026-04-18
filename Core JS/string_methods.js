let text = "Hello Ayan !! Hello";
console.log("Length of the String=", text.length);

// strings are immutable - original string doesnot change

const replacedString = text.replace("Hello", "Hiii");
console.log(text);
console.log(replacedString);

const replaceAllString = text.replaceAll("Hello", "Hii");
console.log(replaceAllString);

const splitString = text.split(" ");
console.log(splitString);

let randomText = "ayan, adak, fullstack";
const randomStringSplit = randomText.split(",");
console.log(randomStringSplit);

//string repeat
console.log(text.repeat(2));

//trim text
const text1 = "    Hello    Hello     Ayan      ";
console.log(text1);
console.log(text1.trim());
console.log(text1.trim().length);
const trimmedText1 = text1.trimStart();
console.log(trimmedText1.length);
console.log(text1.trimEnd().length);

//concat
let name1 = "Ayan";
let name2 = "Adak";

const concatText = name1.concat(name2);
console.log(concatText);
