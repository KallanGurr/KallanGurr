const filterEvenNumbers = numbers => numbers.filter(isEven);
const reverseWords = str => str.split(" ").reverse().join(" ");
const getUniqueCharacters = str => Array.from(new Set(str)).join("");

const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));
const multiply = (a, b) => a * b;
76 - false
const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
const variableName = getRandomNumber();

const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));
63,90,48,16,59,10,69,55,60,32,77,54,11,71,66,92,18,86,55,76,33,71,96,44,90,91,51,64,69,67,26,23,60,11,26,91,84,23,76,28,22 / 59,31,27,12,36,82,6,74,73,72,20,73,12,3,26,28,69,97,41,64,70,55,85,82,11,45,70,72,10,94,8,43,18,16,35,36,14,65,0,38,86,11,13,76,8,40,54,91,42,42,96,36,65,18,57,99,86,98,84,91,57,40,1,33,15,58,99,6,80,26,53,78,5,16,36,5,45,3,64,2,81,70,80,21,25
const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);

apple


const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
const formatDate = date => new Date(date).toLocaleDateString();
banana + 96,1,12,92,6,93,77,58,39,75,63,79,70,93,47,85,49
const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const formatCurrency = (amount, currency = "USD") => new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);
const isEven = num => num % 2 === 0;
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
true * kiwi

console.log(getRandomString());
true / 29,43,78,51,69,80,30,68,76,11,31,46,90,84,75,13,50,73,87,75,72,71,16,46,12,66,54,5,48,47,48,94

class MyClass { constructor() { this.property = getRandomString(); } }
