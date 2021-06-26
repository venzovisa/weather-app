import React from 'react';

export default function Day({ props }) {

    const year = new Date(props.date).getFullYear();
    let month = new Date(props.date).getMonth();
    month = +month < 10 ? '0' + month : month;
    let tmpDate = new Date(props.date).getDate();
    tmpDate = +tmpDate < 10 ? '0' + tmpDate : tmpDate;

    return (
        <div className="day-item">
            <span className="day-title">{props.title}
                <span className="date">{`${year}.${month}.${tmpDate}`}</span>
            </span>
            <span className="day-low">L: {props.low} {props.unit}</span>
            <span className="day-high">H: {props.high} {props.unit}</span>
            <img className="day-icon" src={`https://www.accuweather.com/images/weathericons/${props.icon}.svg`} />
            <span className="day-status">{props.status}</span>
        </div>
    )
}