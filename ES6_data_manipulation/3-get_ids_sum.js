const getStudentIdsSum = (array) => array.reduce((sum, { id }) => sum + id, 0);

export default getStudentIdsSum;
