// JOSHUA

'use strict';

const superagent = require('superagent');
// const pg = require('pg');
require('dotenv').config();
// Database set up
// const client = new pg.Client(process.env.DATABASE_URL);
// client.on('error', error => console.error(error));
// client.connect();

function Location(city, geoData){
  this.search_query = city;
  this.formatted_query = geoData.formatted_address;
  this.latitude = geoData.geometry.location.lat;
  this.longitude = geoData.geometry.location.lng;
}

// Route Handler
function getLocation(request, response) {
  // const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${request.query.data}&key=${process.env.GEOCODE_API_KEY}`;
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=Seattle&key=${process.env.GEOCODE_API_KEY}`;
  superagent.get(url).then(data => {
    const geoData = data.body;
    console.log('*****geoData :', geoData);
    // const city = request.query.data;
    const city = 'Seattle';
    const locationData = new Location(city, geoData);
    // console.log('*****locationData :', locationData);
    response.status(200).send(locationData);
  }).catch(err => {
    console.error(err);
    response.status(500).send('Status 500: Internal Server Error');
  });
}

module.exports = getLocation;

