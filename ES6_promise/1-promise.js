const getFullResponseFromAPI = (question) => {
  const temp = new Promise((resolve, reject) => {
    if (question) {
      resolve({
        status: 200,
        body: 'Success',
      });
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
  return temp;
};

export default getFullResponseFromAPI;
