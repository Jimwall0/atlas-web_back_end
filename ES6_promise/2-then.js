const handleResponseFromAPI = (promise) => {
  const temp = new Promise((resolve, reject) => {
    promise
      .then((success) => {
        console.log('Got a response from the API');
        resolve({
          status: 200,
          body: success,
        });
      })
      .catch(() => {
        console.log('Got a response from the API');
        reject(new Error());
      });
  });
  return temp;
};

export default handleResponseFromAPI;
