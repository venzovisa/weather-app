import React from 'react';

export default function Page({ page, currentPage, handlePageChange }) {
    return <li className={page === currentPage ? "page-item active" : "page-item"}>
        <a className="page-link" href="#"
            title={page}
            value={page}
            onClick={(e) => handlePageChange(e)}>{page}</a>
    </li>
}