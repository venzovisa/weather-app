import React from 'react';
import Page from './page';
import _ from 'lodash';

export function paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  return _(items).slice(startIndex).take(pageSize).value();
}

export function Pagination({ totalItems, itemsPerPage, handlePrevPage, handleNextPage, handlePageChange, currentPage }) {

  const pagesCount = Math.ceil(totalItems / itemsPerPage);
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);
  const next = (e) => currentPage < pages.length ? handleNextPage(e) : e.preventDefault();

  return <ul className="pagination">
    <li className="page-item">
      <a className="page-link" href="#" aria-label="Previous" onClick={(e) => handlePrevPage(e)}>
        <span aria-hidden="true">&laquo;</span>
        <span className="sr-only"></span>
      </a>
    </li>
    {pages.map(page => <Page key={page} page={page} currentPage={currentPage} handlePageChange={handlePageChange} />)}
    <li className="page-item">
      <a className="page-link" href="#" aria-label="Next" onClick={next}>
        <span aria-hidden="true">&raquo;</span>
        <span className="sr-only"></span>
      </a>
    </li>
  </ul>
}