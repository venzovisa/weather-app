import React, { useState, useEffect } from 'react';
import Header from './header';
import Footer from './footer';
import Home from './home';
import Search from './search';
import SearchBox from './searchBox';
import Statistics from './statistics';
import { sortText, sortNumber } from '../utils/sort';

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

export default function Root() {
    const [searchResult, setSearchResult] = useState([]);
    const [sortOrder, setSortOrder] = useState('unsorted');

    function handleTextSort(e) {
        const sortBy = e.currentTarget.textContent.toLowerCase();
        sortText(searchResult, sortOrder, setSortOrder, sortBy);
    }

    function handleNumberSort(e) {
        const sortBy = e.currentTarget.textContent.toLowerCase();
        sortNumber(searchResult, sortOrder, setSortOrder, sortBy);
    }

    function handleSearchResult(result) {
        setSearchResult(result);
    }

    return (
        <Router>
            <Header searchBox={<SearchBox handleSearchResult={handleSearchResult} />} />
            <div className="main">
                <Switch>
                    <Route path="/search" render={() => <Search searchResult={searchResult} handleTextSort={handleTextSort} handleNumberSort={handleNumberSort} />} />
                    <Route path="/statistics" render={() => <Statistics />} />
                    <Route path="/" exact render={() => <Home />} />
                </Switch>
            </div>
            <Footer />
        </Router>
    )
}