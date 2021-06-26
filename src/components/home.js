import React from 'react';
import CurrentLocation from './currentLocation';
import TopLocations from './topLocations';

export default function Home() {
    return (
        <React.Fragment>
            <CurrentLocation />
            <TopLocations />
        </React.Fragment>
    )
}