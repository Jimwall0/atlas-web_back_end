export default function concatArrays(array1, array2, string) {
  const myArray = [...array1, ...array2, ...string];
  return myArray;
}
