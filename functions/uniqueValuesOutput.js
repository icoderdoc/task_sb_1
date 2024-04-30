import { sortList } from "./sortList.js";
import { uniqueList } from "./uniqueList.js";
import { createList } from "./createList.js";
import { outputList } from "./outputList.js";

export const uniqueValuesOutput = (result, key) => {
  const list = createList(result, key);
  const listSort = sortList(list);
  const listUnique = uniqueList(listSort);
  outputList(listUnique);
};