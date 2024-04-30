export const uniqueList = (list) => {
  const uniqueList = [];
  for (let i = 0; i < list.length; i++) {
    if (list[i] !== list[i + 1]) {
      uniqueList.push(list[i]);
    }
  }
  return uniqueList;
};
