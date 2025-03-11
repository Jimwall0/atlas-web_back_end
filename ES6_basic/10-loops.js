export default function appendToEachArrayValue(array, appendString) {
  let num = 0;
  let temp = [];
  for (const idx of array) {
    temp[num] = `${appendString}${idx}`;
    num += 1;
  }
  return temp;
}
