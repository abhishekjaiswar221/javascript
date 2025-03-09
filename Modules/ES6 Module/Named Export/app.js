"use strict";
//In Object Destructuring we cannot change the name of the variable while destructuring because the variable refers to the keys defined in the object while creating the object, but you can give any variable when you destructure with spread operator to save all the value in a single variable.
import {multiply, div, ar, obj} from "./module.mjs";

multiply(10, 20);
console.log(div(20, 2));

console.log(ar);
console.log(obj);