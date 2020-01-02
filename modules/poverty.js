'use strict';

const superagent = require('superagent');
const CENSUS_API_KEY = process.env.CENSUS_API_KEY;
const county = 'King';
const state = '53';

const getPoverty = function (req , res ) {
  superagent.get(`https://api.census.gov/data/timeseries/poverty/saipe?get=SAEPOVALL_PT,NAME&for=state:${state}&time=2018&key=${CENSUS_API_KEY}`).then( povertyData => {
    let obj = { name : povertyData.body[1][1], povPop : povertyData.body[1][0]}
    res.render('../public/views/pages/results.ejs', {poverty : obj});
  }).catch( error => {
    console.log('The getPoverty API call failed:', error);
  })
}

module.exports = getPoverty;
