import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import SearchRow from './searchRow';


export default function Search({ searchResult, handleTextSort, handleNumberSort }) {

    useEffect(() => {
        (async () => {
            //const generator = asyncIterator(await getCities());         
        })()
    }, [])

    return (
        <div className="container top-locations">
            <h2 className="section-title">Latest search result</h2>
            {searchResult.length > 0 && <div className="table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col" onClick={(e) => handleNumberSort(e)}>Key</th>
                            <th scope="col" onClick={(e) => handleTextSort(e)}>City</th>
                            <th scope="col" onClick={(e) => handleTextSort(e)}>Country</th>
                            <th scope="col" onClick={(e) => handleTextSort(e)}>TimeZone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {searchResult.map((val, idx) => <SearchRow key={idx} props={val} />)}
                    </tbody>
                </table>
            </div>}
        </div>
    )
}