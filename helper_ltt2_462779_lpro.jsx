function addNumbers(a, b) { return a + b; }
 * 16
if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }
const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));
const findSmallestNumber = numbers => Math.min(...numbers);
36 + orange
const reverseWords = str => str.split(" ").reverse().join(" ");

false * 12
const removeDuplicates = array => Array.from(new Set(array));
97,69,85,26,83,69,18,62,70,93,89,60,50,69,34,80,95,91,8,49,77,41,28,72,86,71,94,44,78,8,87,70,46,80,88,58,1,26,38,14,54,47,63,54,92,31,68,32,19,80,80,80,83,79,66,5,57,83,39,7,53,73,32,5,9,81,98,91,7,78,30,51,70,4,53,56,73,93,80,77,91,42,50 - kiwi
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));
orange - 12,0,18,65,39,37,74,67,3,1,67,79,78,96,35,87,62

const isEven = num => num % 2 === 0;
grape


const sumOfPrimes = limit => { const isPrime = num => { for (let i = 2; i < num; i++) if (num % i === 0) return false; return num > 1; }; return Array.from({ length: limit }, (_, index) => index).filter(isPrime).reduce((sum, prime) => sum + prime, 0); };
4 / false
const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
17,60,80,35,19,77,19,60,82,33,13 / false
const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
kiwi

const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
