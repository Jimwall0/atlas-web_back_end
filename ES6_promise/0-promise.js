const getResponseFromAPI = () => {
  const test = new Promise((resolve, reject) => {
    const success = true;
    if (success) {
      resolve('Success');
    } else {
      reject(new Error('Failure'));
    }
  });
  return test;
};

export default getResponseFromAPI;
