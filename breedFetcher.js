
const breedSearch = process.argv[2];

const request = require('request');


request(`https://api.thecatapi.com/v1/breeds/search?q=${breedSearch}`, (error, response, body) => {

  if (error) {
    console.log("Error: ", error.message);
    return;
  }

  const data = JSON.parse(body); // convert into actual object
  console.log(error);
  console.log(response.statusCode);
  console.log(response.statusMessage);
  console.log(data);
  console.log(typeof data);

  if (data.length === 0) {
    console.log("Sorry, can not display the breed information")
  }
  
});



// console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
// console.log('error:', error); // Print the error if one occurred
// console.log('body:', body); // Print the HTML for the Google homepage.  
// console.log(typeof body);