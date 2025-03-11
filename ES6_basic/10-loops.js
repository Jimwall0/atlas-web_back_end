export default function appendToEachArrayValue(array, appendString) {
  const temp = {};
  for (const idx of array) {
    const value = array[idx];
    temp += `${appendString}-${value}`
  }
  return temp;
}
