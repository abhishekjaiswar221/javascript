//1. length: It displays the length of the string.Length is a property.
let str = "This is string 1";
console.log(str.length); //16

//2.slice(): This is used to extract a part of the string in a new string.
//It takes 2 arguments 1.Starting index 2.Last index
//But it will not consider the last index position
let newStr = str.slice(8, 14);
console.log(newStr); //string
console.log(str); //Not affects the original string

let str2 = str.slice(-8, -2);
console.log(str2); //string

console.log(str.slice(-1)); //1

//3.substring():This is used to extract a part of the string in a new string, but it will not take negative values.

console.log(str.substring(0, 4)); //this
console.log(str.substring(-8, -2)); //empty string
console.log(str.substring(-8, -2).length); //0

//4.substr(): Here the first argument is the index of the string and the second argument is length of the extracted string.
let str3 = str.substr(2, 5);
console.log(str3);

//5.replace(): It is used to replace the particular string.
// It takes 2 arguments 1.search value 2. replace value
const str4 = "Please visit webpage of microsoft";
console.log(str4.replace("microsoft", "JSpiders"));
console.log(str4); //Not affecting the previous string variable

//6.trim()//It will remove the whitespace after and before the  string.
const str5 = "           hello world!!!           ";
console.log(str5.trim());
console.log(str5.trimStart());
console.log(str5.trimEnd());

//7. toUpperCase()://It will convert string to upper case
console.log(str4.toUpperCase());

//8.toLowerCase()://It will convert string to lower case
let str6 = "CONVERT TO LOWER CASE";
console.log(str6.toLowerCase());

//9.charAt(): It will give the character according to the index position.
console.log(str6.charAt(5));

//10. charCodeAt():It will give the ASCII value character according to the index position.
console.log(str6.charCodeAt(5));

//11.concat()//It will join two strings.
let string1 = "my name";
let string2 = "is abhishek";
console.log(string1 + string2);
console.log(string1.concat(string2));
console.log(string1, string2);

//12.toString():
// The toString() method returns a string as a string.
//The toString() method does not change the original string.
//The toString() method can be used to convert a string object into a string.
let text = 1000;
console.log(text);
console.log(typeof text);
let result = text.toString();
console.log(result);
console.log(typeof result);

let res1 = result.valueOf(); //The valueOf() method returns the primitive value of a string.
//The valueOf() method does not change the original string.
// The valueOf() method can be used to convert a string object into a string.
//The valueOf() method is the default method for JavaScript strings.
// It is used internally by JavaScript.
console.log(res1);
console.log(typeof res1);

//12.split():Returns array of separated string with comma between each string.
let str7 = "string1234";
let res = str7.split("");
console.log(res);

//13.Reverse string array using split() method of string object and reverse() method of array object.
let str8 = "Hello Handsome";
let res2 = str8.split("").reverse();
console.log(res2);

//14.Join the array of string using join() method of array object You can also use toString Method to convert array to string separated with commas.
let str9 = "HiiBaby";
let res3 = str9.split("").join();
console.log(res3);

//15.Join and reverse the array of string using split() method  of string object, join() and reverse() methods of array object
let str10 = "string1234";
let res4 = str10.split("").reverse().join();
console.log(res4);

//16.Without using reverse() method reverse a string using reduceRight() Array method?
//Ans:
let string = "This is a string";
let stringArray = string.split("");
console.log(stringArray);
let revStringArr = stringArray.reduceRight((ac, cv) => {
  return ac + cv;
});
console.log(revStringArr);
console.log(typeof revStringArr);
//16.replaceAll():------------------------------------------------------------->Pending
