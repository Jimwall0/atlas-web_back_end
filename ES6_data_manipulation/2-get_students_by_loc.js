const getStudentsByLocation = (array, city) => array.filter(({location}) => location === city);

export default getStudentsByLocation;
