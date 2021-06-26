import React, { useState, useEffect } from 'react';
import Day from './day';
import { getDayName } from '../utils/getDayName';
const fetch = require('node-fetch');

const CurrentLocation = () => {
    const [weather, setWeather] = useState([]);
    const [locationName, setLocationName] = useState(true);

    function getWeather() {
        return fetch(process.env.IP_REQUEST)
            .then(result => result.json())
            .then(result => fetch(`${process.env.LOCATIONS_API_URL}/cities/ipaddress?apikey=${process.env.WEATHER_API_KEY}&q=${result.ip}&language=en-us&details=true`))
            .then(result => result.json())
            .then(location => fetch(`${process.env.FORECASTS_API_URL}/daily/5day/${location.Key}?apikey=${process.env.WEATHER_API_KEY}&metric=true`))
            .then(result => result.json())
            .then(json => json.DailyForecasts)
    }

    function getLocationName() {
        return fetch(process.env.IP_REQUEST)
            .then(result => result.json())
            .then(result => fetch(`${process.env.LOCATIONS_API_URL}/cities/ipaddress?apikey=${process.env.WEATHER_API_KEY}&q=${result.ip}&language=en-us&details=true`))
            .then(result => result.json())
            .then(json => json.EnglishName)
    }

    async function getFlattenWeather(generator) {
        let weatherData = [];
        for await (let value of generator) {
            weatherData.push({
                date: value.Date,
                title: getDayName(value.Date),
                low: value.Temperature.Minimum.Value,
                high: value.Temperature.Maximum.Value,
                unit: value.Temperature.Maximum.Unit,
                icon: value.Day.Icon,
                status: value.Day.IconPhrase
            })
        }
        return weatherData
    }

    useEffect(() => {
        (async () => {
            const fetchedLocations = await getWeather();
            setWeather(await getFlattenWeather(fetchedLocations));
            setLocationName(await getLocationName());
        })()
    }, [])

    return <div className="current-location">
        <div className="container">
            <h2 className="section-title text-center text-light">{locationName} location forecast</h2>
            <div className="days-container">
                {weather.map((item, idx) => <Day key={idx} props={item} />)}
            </div>
        </div>
    </div>

}

export default CurrentLocation;