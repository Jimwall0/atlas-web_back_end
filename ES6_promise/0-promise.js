const getResponseFromAPI = () => {
  return new Promise((resolve, reject) => {
    const success = true;
    if (success) {
      resolve('Success');
    } else {
      reject('Failure');
    }
  });
};

export default getResponseFromAPI;
