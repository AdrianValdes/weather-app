const path = require("path");
const express = require("express");
const hbs = require("hbs");

//utils functions
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");
const e = require("express");

const app = express();

// Define paths for Express config
const publicDirPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// Setup handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

//Setup static directory to serve
app.use(express.static(publicDirPath));

app.get("", (req, res) => {
  res.render("index", {
    title: " Weather App",
    name: "Grr Thul",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About this App",
    name: "Grr Thul",
  });
});

app.get("/weather", (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: "You must provide a search term",
    });
  }
  geocode(
    req.query.address,
    (error, { latitude, longitude, location } = {}) => {
      if (error) {
        return res.send({ error });
      }
      forecast(
        { latitude, longitude },
        (error, { weather_descriptions, temperature, precip }) => {
          if (error) {
            return res.send({ error });
          }
          res.send({
            latitude,
            longitude,
            location,
            description: `The weather in ${location} is ${weather_descriptions[0]}. It is currently ${temperature} degrees out. There is ${precip}% chance of rain`,
          });
        }
      );
    }
  );
});

app.get("/products", (req, res) => {
  if (!req.query.search) {
    return res.send({
      error: "You must provide an address term",
    });
  }
  console.log(req.query);
  res.send({
    products: [],
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Need help...?",
    name: "Grr Thul",
  });
});

app.get("/help/*", (req, res) => {
  res.render("404", {
    errorMessage: "Help page not found",
    title: "404 page",
    name: "Grr Thul",
  });
});

//404
app.get("*", (req, res) => {
  res.render("404", {
    errorMessage: "Page not found",
    title: "404 page",
    name: "Grr Thul",
  });
});

app.listen(3000, () => {
  console.log("It works! Server is up on port 3000");
});
