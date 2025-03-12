const getListStudentIds = (array) => {
  if (!Array.isArray(array)) {
    return [];
  }
  return array.map((id) => id.id);
};

export default getListStudentIds;
