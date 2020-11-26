# Welcome to weather-app-server 👋

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](#)

> This project uses mapbox.com and weatherstack.com to look for the weather data around the world. The backend is made in Nodejs with Express and it was deployed using Heroku services.

### 🏠 [Homepage](https://adrian-weather-app.herokuapp.com/)

### ✨ [Demo](https://adrian-weather-app.herokuapp.com/)

### Build With

- [Nodejs](https://nodejs.org)
- [Express](http://expressjs.com/)
- [hbs](https://www.npmjs.com/package/hbs)
- [Heroku](https://eroku.com/)

# Getting Started

## Installation

1. You need to get **two** free API keys at [weatherstack](https://weatherstack.com/) and [mapbox](https://www.mapbox.com/)
2. Clone the repo

```sh
https://github.com/AdrianValdes/weather-app.git
```

3. Install NPM packages

```sh
npm install
```

4. Enter your two APIs in config.js

```sh
module.exports = {
  ACCESS_KEY_GEOCODE: {YOUR_API_FOR_MAPBOX},
  ACCESS_KEY_WEATHERSTACK: {YOUR_API_FOR_WEATHERSTACK},
};
```

## Usage

```sh
npm run start
```

## Run tests

```sh
run npm run dev
```

## Author

👤 **Adrian Valdes**

- Website: https://adrianvaldes.github.io/portfolio/
- Github: [@AdrianValdes](https://github.com/AdrianValdes)
- LinkedIn: [@Adrian Valdés](https://www.linkedin.com/in/adrian-vald%C3%A9s-7280721a4/)

## Show your support

Give a ⭐️ if this project helped you!
