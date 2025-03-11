export default function createEmployeesObject(departmentName, employees) {
  const myObject = {};
  myObject[departmentName] = employees;
  return myObject;
}
