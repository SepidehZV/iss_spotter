// index.js
const { nextISSTimesForMyLocation } = require('./iss');

const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  printPassTimes(passTimes);
});

/*nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  console.log(passTimes);
});*/

/*fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned IP:' , ip);
});*/

/*fetchCoordsByIP('72.141.52.11', (error, coords) => {
  if (error) {
    console.log("It didn't work!" ,error);
    return;
  }

  console.log('It worked! Returned coords:',coords);
});*/
/*fetchISSFlyOverTimes({ latitude: '45.40230', longitude: '-75.73290' },(error, fly) => {
  if (error) {
    console.log("It didn't work!" ,error);
    return;
  }

  console.log('It worked! Returned flyover times:',fly);
});*/