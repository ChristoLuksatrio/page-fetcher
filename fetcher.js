const request = require('request');
const fs = require('fs');
let URL = process.argv[2];
let path = process.argv[3];

const fetcher = (URL, path) => {
  request(URL, (error, response, body) => {
    let size = 0;


    fs.writeFile(path, body, (err) => {
      if (err) throw err;
      fs.stat(path, function(err, stats) {
        size = stats.size;
        console.log(`Downloaded and saved ${size} bytes to ${path}`);
      }); 
    });

    
  });
}

fetcher(URL, path);


// request('https://www.google.com/fdsafsafsa.html', (error, response, body) => {
//   console.log('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.
// });

// Implement a small command line node app called fetcher.js which should 
// take a URL as a command-line argument as well as a local file path and 
// download the resource to the specified path.