import { encoded, translations } from "./data/data.js";
import { decoded } from "./functions/decoded.js";

console.log("Let's rock");
console.log(encoded, translations);

// console.log(decoded)
const result = decoded(encoded, translations);
// console.log(result);
