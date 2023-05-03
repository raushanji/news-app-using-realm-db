const getApiCall = async url => {
  console.log('url...', url);
  try {
    let responseJSON = await fetch(url);

    let response = await responseJSON.json();

    return response.articles;
  } catch (err) {}
};

export {getApiCall};
