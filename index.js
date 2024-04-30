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

// выводим список уникальных groupId:
uniqueValuesOutput(result, "groupId");
// выводим список уникальных areaId:
uniqueValuesOutput(result, "areaId");
// выводим список уникальных departmentId:
uniqueValuesOutput(result, "departmentId");
// выводим список уникальных directionId:
uniqueValuesOutput(result, "directionId");
// выводим список уникальных mediaTypeId:
uniqueValuesOutput(result, "mediaTypeId");
// выводим список уникальных mediaId:
uniqueValuesOutput(result, "mediaId");
// выводим список уникальных resellingId:
uniqueValuesOutput(result, "resellingId");
// выводим список уникальных serviceTypeId:
uniqueValuesOutput(result, "serviceTypeId");
// выводим список уникальных formatTypeId:
uniqueValuesOutput(result, "formatTypeId");
// выводим список уникальных formatId:
uniqueValuesOutput(result, "formatId");
// выводим список уникальных unitId:
uniqueValuesOutput(result, "unitId");
// выводим список уникальных platformId:
uniqueValuesOutput(result, "platformId");
// выводим список уникальных budgetId:
uniqueValuesOutput(result, "budgetId");
// выводим список уникальных adPlatformId:
uniqueValuesOutput(result, "adPlatformId");
// выводим список уникальных mpmId:
uniqueValuesOutput(result, "mpmId");
