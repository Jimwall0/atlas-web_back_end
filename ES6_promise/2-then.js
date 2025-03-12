const handleResponseFromAPI = (promise) => {
  promise
  .then((res) => {
    console.log('Got a response from the API');
    return {
      status: 200,
      body: 'success',
    };
  })
  .catch((err) => {
    return new Error();
  })
}

export default handleResponseFromAPI;
