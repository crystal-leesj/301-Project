'use strict';

const superagent = require('superagent');

const AQ_API_KEY = process.env.AQ_API_KEY;

const getAirQuality = {};

getAirQuality.getAirQuality = function ( lat , lng ) {
  console.log('-----------getAirQuality!!');
  return superagent.get(`http://www.airnowapi.org/aq/observation/latLong/current/?format=application/json&latitude=${lat}&longitude=${lng}&distance=50&API_KEY=${AQ_API_KEY}`).then( aqData => {
    const airQuality = aqData.body[0];
    getAirQuality.data = airQuality;
    return getAirQuality;
  })
}
module.exports = getAirQuality;
