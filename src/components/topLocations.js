import React, { useState, useEffect } from 'react';
import LocationRow from './locationRow';
import { Pagination, paginate } from '../utils/pagination';
import { sortText, sortNumber } from '../utils/sort';
import _ from 'lodash';
require("regenerator-runtime/runtime");
const fetch = require('node-fetch');
const topCitiesURL = `https://dataservice.accuweather.com/currentconditions/v1/topcities/100?apikey=fzTBeQbPP2IOcaNzekZTUKvaC44qcq9A`;

export default function TopLocations() {
    const [locations, setLocations] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [sortOrder, setSortOrder] = useState('asc');

    function getLocations(url) {
        return fetch(url)
            .then(result => result.json())
            .then(json => json)
    }

    async function getFlattenLocations(generator) {
        let locationsData = [];
        for await (let value of generator) {
            locationsData.push({
                key: value.Key,
                city: value.EnglishName,
                country: value.Country.EnglishName,
                timezone: value.TimeZone.Name,
                temperature: value.Temperature.Metric.Value,
                condition: value.WeatherText,
                link: value.Link
            })
        }
        return locationsData
    }

    function handleTextSort(e) {
        const sortBy = e.currentTarget.textContent.toLowerCase();
        setLocations(sortText([...locations], sortOrder, setSortOrder, sortBy));
    }

    function handleNumberSort(e) {
        const sortBy = e.currentTarget.textContent.toLowerCase();
        setLocations(sortNumber([...locations], sortOrder, setSortOrder, sortBy));
    }

    function handlePageChange(e) {
        e.preventDefault();
        setCurrentPage(+e.target.textContent);
    }

    function handlePrevPage(e) {
        e.preventDefault();
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    }

    function handleNextPage(e) {
        e.preventDefault();
        setCurrentPage(currentPage + 1);
    }

    useEffect(() => {
        (async () => {
            const fetchedLocations = await getLocations(topCitiesURL);
            setLocations(await getFlattenLocations(fetchedLocations));
        })()
    }, [])

    //let sorted = _.orderBy(filteredMovies, sortCriteria, sortOrder);
    let pager = paginate(locations, currentPage, 10);

    return (
        <div className="container top-locations">
            <h2 className="section-title">Top cities</h2>
            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col" onClick={(e) => handleNumberSort(e)}>Key</th>
                            <th scope="col" onClick={(e) => handleTextSort(e)}>City</th>
                            <th scope="col" onClick={(e) => handleTextSort(e)}>Country</th>
                            <th scope="col" onClick={(e) => handleTextSort(e)}>TimeZone</th>
                            <th scope="col" onClick={(e) => handleNumberSort(e)}>Temperature</th>
                            <th scope="col" onClick={(e) => handleTextSort(e)}>Condition</th>
                            <th scope="col" >Source</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {locations.map((val, idx) => <LocationRow key={idx} props={val} />)} */}
                        {pager.map((val, idx) => <LocationRow key={idx} props={val} />)}
                    </tbody>
                </table>
            </div>
            <Pagination
                itemsPerPage={10}
                totalItems={locations.length}
                currentPage={currentPage}
                handlePageChange={handlePageChange}
                handlePrevPage={handlePrevPage}
                handleNextPage={handleNextPage}
            />
        </div>
    )
}