const request = require('request');
const urlExists = require('url-exists');

const cat = process.argv[2].substring(0,3);
let web = 'https://api.thecatapi.com/v1/breeds/search';
web = web.concat('?q=', cat);

// const fetchBreedDescription = function(breedName, callback) {

// }

    request(web, (error, message, body) => {
      urlExists(web, function(err, exists) {
        if (exists === false) console.log('URL does not exist');
        else {
          if (body === "[]") {
              console.log('The request breed is not found.');
            } else {
              // body = body.substring(1,body.length -2);
              const data = JSON.parse(body);
              for (let i = 0; i < data.length; i++) {console.log(data[i].description);}
            }
        }  
    });
});

// module.exports = {fetchBreedDescription};