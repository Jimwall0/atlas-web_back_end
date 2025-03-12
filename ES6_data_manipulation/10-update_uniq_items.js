const updateUniqueItems = (groceriesList) => {
  if (!(groceriesList instanceof Map)) {
    throw new Error('Cannot process');
  }
  for (const [key, value] of groceriesList) {
    if (value === 1) {
      groceriesList.set(key, 100);
    }
  }
};

export default updateUniqueItems;
