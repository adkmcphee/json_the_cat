const args = process.argv.slice(2);
const breed = args[0];
const request = require('request');



request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, function(error, response, body) {
  if (error) {
    console.log(`Sorry there was an error. See details ${error}`);
    return;
  }
  const data = JSON.parse(body);
  if (data.length !== 0) {
    console.log(data);
    return;
  }
  console.log("Breed not found");
});

