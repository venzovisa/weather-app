# Weather App
## Overview

This client-side applications that consumes data from [AccuWeather APIs](https://developer.accuweather.com/).

Based on React, Express and Webpack libraries.

Live preview could be found here: https://venzo-weather-app.herokuapp.com/

## Environment variables

In order to use the app on your local machine you have to set up several global variables in your  `.env` config file:


    WEATHER_API_KEY = ""
    FORECASTS_API_URL = "http://dataservice.accuweather.com/forecasts/v1"
    LOCATIONS_API_URL = "http://dataservice.accuweather.com/locations/v1"
    CURRENT_CONDITIONS_API_URL = "http://dataservice.accuweather.com/currentconditions/v1"
    IP_REQUEST = "https://api.ipify.org?format=json"


Check the availability of the above links before run running the application for any changes by the provider.
You need to register to [AccuWeather](https://developer.accuweather.com/user/register) to get the authorization token for `WEATHER_API_KEY`

## Commands

To copy this repo to your local machine:

    git clone https://www.github.com/venzovisa/weather-app

To install all depenedencies:

    npm install

To start development server on default port 9000:

    npm run dev

To create optimized production ready build:

    npm run build

To serve production build on default port 3000:

    npm run start

## License

MIT license for commercial or non-commercial use