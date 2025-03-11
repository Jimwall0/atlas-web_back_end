export default function createReportObject(employeesList) {
  return {
    allEmployees: employeesList,
    getNumberOfDepartments(object) {
      let num = 0;
      for (const _ of Object.keys(object)) {
        num += 1;
      }
      return num;
    },
  };
}
