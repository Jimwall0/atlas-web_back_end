const updateUniqueItems = (groceriesList) => {
  for (const [key, value] of groceriesList) {
    if (value === 1) {
      groceriesList.set[key, 100];
    }
  }
}

export default updateUniqueItems;
