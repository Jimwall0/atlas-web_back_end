import { StudentHolberton } from "./9-hoisting";
import listOfStudents from "./9-hoisting.js";

console.log(listOfStudents);
console.log(listOfStudents[0] instanceof StudentHolberton);

const listPrinted = listOfStudents.map(
    student => student.fullStudentDescription
);

console.log(listPrinted)
