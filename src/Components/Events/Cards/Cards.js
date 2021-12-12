import React from 'react';
import './Cards.css'

const Cards = (props) => {
    return ( 
    <div className="Cards">
        <img src={props.src} alt="img" />
        <p className='date'>{props.date}</p>
        <p className='dayTime'>{props.dayTime}</p>
        <p className='desc'>{props.desc}</p>
    </div> );
}
 
export default Cards;