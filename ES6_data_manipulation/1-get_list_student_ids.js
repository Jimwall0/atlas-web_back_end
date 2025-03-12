const getListStudents = (array) => {
  if (Array.isArray(array) === false) {
    return [];
  }
  const map1 = new Map();
  for (const num of array) {
    map1.set('id', num.id);
  }
  return map1;
};

export default getListStudents;
