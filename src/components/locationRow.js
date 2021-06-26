import React from 'react';

export default function LocationRow({ props }) {

    return (
        <tr><th scope="row">{props.key}</th>
            <td>{props.city}</td>
            <td>{props.country}</td>
            <td>{props.timezone}</td>
            <td>{props.temperature}</td>
            <td>{props.condition}</td>
            <td><a title={props.city} target="_blank" href={props.link}>Visit</a></td>
        </tr>
    )
}