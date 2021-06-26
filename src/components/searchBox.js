import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
//import { useDispatch, useSelector } from 'react-redux'
//import { fetchCities } from './searchSlice'
require("regenerator-runtime/runtime");

export default function SearchBox({ handleSearchResult }) {
    const [searchInput, setSearchInput] = useState('');
    //const [locations, setLocations] = useState([]);
    let history = useHistory();

    async function getCities() {
        const response = await fetch(`https://dataservice.accuweather.com/locations/v1/cities/search?apikey=fzTBeQbPP2IOcaNzekZTUKvaC44qcq9A&q=${searchInput}&offset=25`)
        const json = await response.json();
        return json;
    }

    async function getFlattenLocations(generator) {
        let locationsData = [];
        for await (let value of generator) {
            locationsData.push({
                key: value.Key,
                city: value.EnglishName,
                country: value.Country.EnglishName,
                timezone: value.TimeZone.Name,
            })
        }
        return locationsData
    }

    function handleChange(e) {
        setSearchInput(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        (async () => {
            //console.log(await fetchCities());
            //dispatch(await fetchCities(search));
            handleSearchResult(await getFlattenLocations(await getCities(searchInput)));
            history.push(`/search`);
        })()
    }

    useEffect(() => {
        //console.log(cities);
        // if (postStatus === 'idle') {
        // (async () => {
        //dispatch(fetchPosts())
        //})()
        //   }      
    }, [])

    return (
        <form className="d-flex" onSubmit={(e) => handleSubmit(e)} >
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e) => handleChange(e)} />
            <button className="btn btn-outline-primary" type="submit">Search</button>
        </form>
    )
}