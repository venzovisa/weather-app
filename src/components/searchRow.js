import React from 'react';

export default function SearchRow({ props }) {
    return (
        <tr><th scope="row">{props.key}</th>
            <td>{props.city}</td>
            <td>{props.country}</td>
            <td>{props.timezone}</td>
        </tr>
    )
}