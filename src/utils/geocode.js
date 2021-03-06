const request = require("request");
const { ACCESS_KEY_GEOCODE } = require("../../config");
const URLGEOAPI = `https://api.mapbox.com/geocoding/v5/mapbox.places/`;

const geocode = (address, callback) => {
  const urlGeo = `${URLGEOAPI}${encodeURIComponent(
    address
  )}.json?access_token=${ACCESS_KEY_GEOCODE}&limit=1`;

  request({ url: urlGeo, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect!", undefined);
    } else if (body.features.length === 0) {
      callback("Unable to find location", undefined);
    } else {
      const data = body.features[0];

      let { place_name, center } = data;
      let latitude = center[1];
      let longitude = center[0];

      callback(undefined, { latitude, longitude, location: place_name });
    }
  });
};

module.exports = geocode;
