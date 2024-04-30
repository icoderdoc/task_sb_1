export const sortList = (list) => {
  let num = 0;
  for (let i = 1; i < list.length; i++) {
    if (list[i] > list[i + 1]) {
      num = list[i];
      list[i] = list[i + 1];
      list[i + 1] = num;
    }
  }
  for (let i = 1; i < list.length; i++) {
    if (list[i] > list[i + 1]) {
      num = list[i];
      list[i] = list[i + 1];
      list[i + 1] = num;
    }
  }
  return list;
};
