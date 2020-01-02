'use strict';

const superagent = require('superagent');

const GEOCODE_API_KEY = process.env.GEOCODE_API_KEY;

const getLocation = function ( req , res ) {
  console.log('-------------------get location!');
  let locationData = {};
  let query = req.query.location;
  return superagent.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${query}&key=${GEOCODE_API_KEY}`).then( response => {
    locationData.name = response.body.results[0].address_components[0].short_name
    locationData.location = response.body.results[0].geometry.location;
    return locationData;
  })
}

module.exports = getLocation;
