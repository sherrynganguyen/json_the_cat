const request = require('request');
let web = 'https://api.thecatapi.com/v1/breeds/search?q=';

const fetchBreedDescription = function(breedName, callback) {
  request(web.concat(breedName), (error, message, body) => {
    if (error) {
      callback(error, 'Error');
    } else if (JSON.parse(body).length === 0) {
      (callback(error, 'The breed name is not found'));
    } else {
      const data = JSON.parse(body);
      callback(null, data[0].description);
    }
  });
};

module.exports = {fetchBreedDescription};