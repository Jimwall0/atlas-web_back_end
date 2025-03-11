export default function createReportObject(employeesList) {
  return {
    allEmployees: employeesList,
    getNumberOfDepartments() {
      let num = 0
      for (const department of this.allEmployees){
        num += 1;
      }
      return num;
    },
  }
}
