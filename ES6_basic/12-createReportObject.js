export default function createReportObject(employeesList) {
  return {
    allEmployees: employeesList,
    getNumberOfDepartments(object) {
      return Object.keys(object).length;
    },
  };
}
