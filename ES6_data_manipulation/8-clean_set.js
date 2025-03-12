const cleanSet = (set, startString) => {
  let check = startString;
  if (check === undefined) {
    check = '';
  }
  const setArray = [...set];
  let string = '';
  for (let i = 0; i < setArray.length; i += 1) {
    const x = setArray[i];
    if (x.startsWith(check) && check !== '') {
      if (i === 0) {
        string = x.slice(3);
      } else {
        string += '-'.concat(x.slice(3));
      }
    }
  }
  return string;
};

export default cleanSet;
