'use strict';

const superagent = require('superagent');
require('dotenv').config();


const getReviews = {};

getReviews.getReviews = function(latitude, longitude) {
  getReviews.data = [];
  const url = `https://api.yelp.com/v3/businesses/search?latitude=${latitude}&longitude=${longitude}&limit=50&offset=901`;
  // const url = 'https://api.yelp.com/v3/businesses/search?location=seattle&limit=50&offset=101';

  return superagent.get(url).set('Authorization', `Bearer ${process.env.YELP_API_KEY}`).then(data => {
    const parsedData = JSON.parse(data.text);
    parsedData.businesses.sort( ( a , b ) => {
      if( a.rating > b.rating ) {
        return 1;
      } else if ( a.rating < b.rating) {
        return -1;
      } else {
        return 0;
      }
    })
    for (let i = 0; i < 5 && i < parsedData.businesses.length; i++) {
      getReviews.data.push(parsedData.businesses[i]);
    }
    return getReviews;
  })
};


module.exports = getReviews;
