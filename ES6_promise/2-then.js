const handleResponseFromAPI = (promise) => {
  promise
  .then((resolve) => {
    console.log('Got a response from the API');
    return {
      status: 200,
      body: 'success',
    };
  })
  .catch((error) => {
    return new Error();
  })
}

export default handleResponseFromAPI;
