import { encoded, translations } from "./data/data.js";
import { decoded } from "./functions/decoded.js";
import { outputHash } from "./functions/outputHash.js";
import { uniqueValuesOutput } from "./functions/uniqueValuesOutput.js";

console.log("Let's rock");
console.log(encoded, translations);

// console.log(decoded)
const result = decoded(encoded, translations);
// console.log(result);
outputHash(result);

// output list of unique values
const listId = [
  "groupId",
  "areaId",
  "departmentId",
  "directionId",
  "mediaTypeId",
  "mediaId",
  "resellingId",
  "serviceTypeId",
  "formatTypeId",
  "formatId",
  "unitId",
  "platformId",
  "budgetId",
  "adPlatformId",
  "mpmId",
];

for (let i = 0; i < listId.length; i++) {
  console.log(`<---список уникальных ${listId[i]}---/>`);
  uniqueValuesOutput(result, listId[i]);
}
