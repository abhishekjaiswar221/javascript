// Doubt:
// let readline = require("readline");
// let input = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// input.question("Enter the number:", (inputCase) => {
//   // console.log(inputCase);
//   switch (inputCase) {
//     case 11:
//       console.log(`Your age is ${inputCase}`);
//       break;
//     case 12:
//       console.log(`Your age is ${inputCase}`);
//       break;
//     case 13:
//       console.log(`Your age is ${inputCase}`);
//       break;
//     case 14:
//       console.log(`Your age is ${inputCase}`);
//       break;
//     case 15:
//       console.log(`Your age is ${inputCase}`);
//       break;
//     default:
//       console.log(
//         "I am default case I will execute if no cases match to the inputCase"
//       );
//   }
//   input.close();
// });

//Arithmetic Operators:
/*
+
-
*
**-->Exponential
/
%
++
--
 */

//Assignment Operators:
/*
=
+=
-+
*=
/=
%=
**=
*/

// Comparison Operator
/*
==
!=
===
!==
>
<
>=
<=
condition? operand 1: operand 2
 */

// let readline = require("readline");
// console.log(readline);

// let input = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// console.log(input);

// input.question("Enter your age: ", (age) => {
//   // console.log(age);
//   if (age >= 10 && age <= 20) {
//     console.log(`Your age is between 10 to 20 ${age}`);
//   } else {
//     console.log("Your age doesn't lie between 10 to 20");
//   }
//   input.close();
// });

// let age = parseInt(prompt("Enter the number:"));
// switch (age) {
//   case 11:
//     console.log(`Your age is ${age}`);
//     break;
//   case 12:
//     console.log(`Your age is ${age}`);
//     break;
//   case 13:
//     console.log(`Your age is ${age}`);
//     break;
//   case 14:
//     console.log(`Your age is ${age}`);
//     break;
//   case 15:
//     console.log(`Your age is ${age}`);
//     break;
//   case 16:
//     console.log(`Your age is ${age}`);
//     break;
//   case 17:
//     console.log(`Your age is ${age}`);
//     break;
//   case 18:
//     console.log(`Your age is ${age}`);
//     break;
//   default:
//     console.log(
//       "I am default case I will execute when no cases match the input"
//     );
// }

// let num = parseInt(prompt("Enter the number:"));
// if (num % 2 === 0 && num % 3 === 0) {
//   console.log(`It is divisible ${num}`);
// } else {
//   console.log("It is not divisible");
// }

// let age = parseInt(prompt("Enter your age:"));
// if (age >= 18) {
//   document.write("You can Drive");
// } else {
//   document.write("You cannot Drive");
// }

let marks = {
  abhi: 78,
  sona: 78,
  mani: 67,
  sumi: 56,
  abiniya: 56,
};

// for (let i = 0; i <= Object.entries(marks).length; i++) {
//   console.log(marks);
// }

// for (const value in marks) {
//   console.log(value);
// }

// for (const key of marks) {
//   console.log(key);
// }


for (let i = 0; i < marks.Object.fromEntries().length; i++) {
  const element = array[i];
}

for (const values in marks) {
  if (Object.hasOwnProperty.call(marks, values)) {
    const element = marks[values];
    console.log(element);
  }
}
