export const createList = (hash, key) => {
  const list = [];
  hash.map((item) => {
    list.push(item[`${key}`]);
  });
  return list;
};
