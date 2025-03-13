const handleResponseFromAPI = (promise) => {
  promise.then((success) => {
    console.log('Got a response from the API');
    resolve({
      status: 200,
      body: success,
    });
  });
  promise.catch(() => {
    console.log('Got a response from the API');
    reject(new Error());
  });
};

export default handleResponseFromAPI;
