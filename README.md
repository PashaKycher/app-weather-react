# Weather React App

A small React single-page application that displays current weather data for a city using the OpenWeatherMap API.

This project was scaffolded with Create React App and provides a minimal UI to enter a location and fetch its current weather (temperature, description, "feels like", humidity and wind).

## Features

- Search weather by city name (press Enter to search)
- Displays city name, temperature (°C), weather description, feels-like temperature, humidity, and wind speed
- Uses Axios to call the OpenWeatherMap API
- Ready to build and deploy (includes a `gh-pages` deploy script)

## Quick start

Prerequisites:

- Node.js (v14+ recommended)
- npm (bundled with Node) or yarn

Installation and running locally:

1. Install dependencies

   npm install

2. Start the development server

   npm start

This will open the app at http://localhost:3000 by default.

## Build and deploy

- Build the production bundle:

  npm run build

- Deploy to GitHub Pages (the project includes `gh-pages` as a dev dependency):

  npm run deploy

Note: `predeploy` will run the build step before deploying.

## Project structure

- `App.jsx` — main React component with the search input and weather display
- `index.js` — app entry point
- `index.css` — basic styling
- `package.json` — project configuration and scripts

## Configuration & API key

The OpenWeatherMap API key is currently hard-coded inside `App.jsx`:

const key = 'c6f3ca7cba0e64850fbadcde5f144ad1';

For security and flexibility, consider moving the API key to an environment variable. With Create React App you can add a `.env` file in the project root and set:

REACT_APP_OPENWEATHER_KEY=your_api_key_here

Then update `App.jsx` to use `process.env.REACT_APP_OPENWEATHER_KEY`.

## Scripts

- `npm start` — start development server
- `npm run build` — create production build
- `npm test` — run tests
- `npm run eject` — eject CRA configuration
- `npm run deploy` — deploy `build` to GitHub Pages (uses `gh-pages`)

## License

This repository does not currently include a license. Add an appropriate LICENSE file if you plan to publish or share the project.

## Contacts
Linkedin - https://www.linkedin.com/in/pavlo-kucheriavykh-1b8053329