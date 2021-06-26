import React, { useState, useEffect } from 'react';
import Day from './day';
import { getDayName } from '../utils/getDayName';
const fetch = require('node-fetch');
require("regenerator-runtime/runtime");

const CurrentLocation = () => {
    const [weather, setWeather] = useState([]);
    const [locationName, setLocationName] = useState(true);

    function getWeather() {
        return fetch('https://api.ipify.org?format=json')
            .then(result => result.json())
            .then(result => fetch(`https://dataservice.accuweather.com/locations/v1/cities/ipaddress?apikey=fzTBeQbPP2IOcaNzekZTUKvaC44qcq9A&q=${result.ip}&language=en-us&details=true`))
            .then(result => result.json())
            .then(location => fetch(`https://dataservice.accuweather.com/forecasts/v1/daily/5day/${location.Key}?apikey=fzTBeQbPP2IOcaNzekZTUKvaC44qcq9A&metric=true`))
            .then(result => result.json())
            .then(json => json.DailyForecasts)
    }

    function getLocationName() {
        return fetch('https://api.ipify.org?format=json')
            .then(result => result.json())
            .then(result => fetch(`https://dataservice.accuweather.com/locations/v1/cities/ipaddress?apikey=fzTBeQbPP2IOcaNzekZTUKvaC44qcq9A&q=${result.ip}&language=en-us&details=true`))
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