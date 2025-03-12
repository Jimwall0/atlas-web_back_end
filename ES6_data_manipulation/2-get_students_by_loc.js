const getStudentsByLocation = (array, city) => array.filter((cityName) => cityName.location === city);

export default getStudentsByLocation;
