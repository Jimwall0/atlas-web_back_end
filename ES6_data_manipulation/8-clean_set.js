const cleanSet = (set, startString = '') => {
  if (typeof startString !== 'string') {
    throw new TypeError('StartString needs to be a string');
  }
  const setArray = [...set];
  let string = '';
  for (let i = 0; i < setArray.length; i += 1) {
    const x = setArray[i];
    if (x.startsWith(startString) && startString !== '') {
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
