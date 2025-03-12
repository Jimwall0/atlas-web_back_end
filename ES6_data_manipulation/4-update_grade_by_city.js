const updateStudentGradeByCity = (getListStudents, city, newGrades) => {
  const temp1 = getListStudents.filter((student) => student.location === city);
  const temp2 = temp1.map((student) => {
    const temp3 = newGrades.find(({ studentId }) => studentId === student.id);
    return {
      ...student,
      grade: temp3 ? temp3.grade : 'N/A',
    };
  });
  return temp2;
};

export default updateStudentGradeByCity;
