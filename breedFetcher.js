
const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, function(error, response, body) {
    if (error) {
      callback(error, null);
      return;
    }
    const data = JSON.parse(body);
    if (data.length !== 0) {
      callback(null, data[0].description);
      console.log(data[0].description)
      return;
    }
    callback(null, "Breed not found");
  });

};

module.exports = { fetchBreedDescription };
