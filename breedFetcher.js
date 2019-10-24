const request = require('request');
const urlExists = require('url-exists');

const cat = process.argv.slice(2)[0].substring(0,3);
let web = 'https://api.thectapi.com/v1/breeds/search';
web = web.concat('?q=', cat);
urlExists(web, function(err, exists) {
  if (exists === false) console.log('URL does not exist');
  else {
    request(web, (error, message, body) => {
      if (error) {
        console.log('The requested breed is not found.');
      } else {
        if (body === "[]") {
          console.log('The request breed is not found.');
        } else {
          body = body.split("[").join("");
          body = body.split("]").join("");
          const data = JSON.parse(body);
          console.log(data.description);
        }
      }
    });
  }
});
