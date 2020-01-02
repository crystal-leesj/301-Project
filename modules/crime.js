
// DAESY

'use strict';

const superagent = require('superagent');


const getCrime = {};

getCrime.getCrime = function(){
  console.log('-----------getCrime!!');
  return superagent.get(`https://data.seattle.gov/resource/4fs7-3vj5.json`).then(response => {
    const allCrimes = JSON.parse(response.text);
    let sortedCrimes = allCrimes.reverse();
    const allData = sortedCrimes.map(event => {
      return {
        'reported_date': removeYear(new Date(event.reported_date).toDateString()),
        'reported_time': event.reported_time,
        'crime_description': event.crime_description,
        'neighborhood': afterSlash(event.neighborhood),
      };
    });
    return allData;
    // console.log('-----------allData :', allData);
    // res.render('index', {allCrimes: allData} )
  });
}


function afterSlash(value){
  let valueIndex = value.indexOf('/');
  let beforeSlash = '';
  if (valueIndex > -1){
    beforeSlash += value.slice(0, valueIndex);
  }
  else if (valueIndex <= 0){
    return value;
  }
  return beforeSlash;
}


function removeYear(value){
  return value.slice(0, -4);
}

module.exports = getCrime;
