const updateStudentGradeByCity = (getListStudents, city, newGrades) => {
  return getListStudents.filter((student) => student.location === city)
  .map((student) => {
    const grades = newGrades.find(({ studentId }) => studentId === student.id);
    return {
      ...student,
      grade: grades ? grades.grade : 'N/A',
    }
  });
};

export default updateStudentGradeByCity;
