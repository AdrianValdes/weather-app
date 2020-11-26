const request = require("request");
const ACCESS_KEY = "2f3720fac48fe1812fed249b39d2eeea";

function forecast({ latitude, longitude }, callback) {
  const url = `http://api.weatherstack.com/current?access_key=${ACCESS_KEY}&query=${latitude},${longitude}&units=m`;
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect", undefined);
    } else if (body.error) {
      callback(body.error.info, undefined);
    } else {
      let {
        weather_descriptions,
        temperature,
        precip,
        humidity,
        feelslike,
        wind_speed,
      } = body.current;
      callback(undefined, {
        weather_descriptions,
        temperature,
        precip,
        humidity,
        feelslike,
        wind_speed,
      });
    }
  });
}

module.exports = forecast;
