const getListStudents = (array) => {
  const myArray = array.map(temp => temp.id);
  return myArray;
};

export default getListStudents;
