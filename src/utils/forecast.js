const request = require("request");
const { ACCESS_KEY_WEATHERSTACK } = require("../../config");

function forecast({ latitude, longitude }, callback) {
  const url = `http://api.weatherstack.com/current?access_key=${ACCESS_KEY_WEATHERSTACK}&query=${latitude},${longitude}&units=m`;
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
