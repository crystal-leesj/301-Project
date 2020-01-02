'use strict';

const superagent = require('superagent');

const crime = 'Robbery';

const getMeme = function (req , res ) {
  superagent.get(`https://memegen.link/buzz/${crime}/${crime}_everywhere.jpg`).then( meme => { // NEED API URL...
    const img = meme.redirects;
    res.render('../public/views/pages/results.ejs', { img : img });
  }).catch( error => {
    console.log('The getMeme API call failed:', error);
  })
}

module.exports = getMeme;
