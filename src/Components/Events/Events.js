import React from 'react';
import Cards from './Cards/Cards';
import './Events.css'
import rectangle1 from './../images/Rectangle.png'
import rectangle2 from './../images/Rectangle2.png'
import rectangle3 from './../images/Rectangle3.png'

const Events = () => {
    return ( 
        <div className="Events">
            <p>Due to COVID-19 and the temporary closing of Bathtub Gin, our nightly entertainment is currently on pause. Stay tuned for updates on our reopening date and new events, coming soon!</p>
            <div className="cardsCont">
                <Cards src={rectangle1} date={'Every Monday'} dayTime={'9-11pm'} desc={'Jazz up your Monday nights with intimate and lively performances by a rotating selection of renowned bands.'}  />
                <Cards src={rectangle2} date={'Every Monday'} dayTime={'9-11pm'} desc={'Jazz up your Monday nights with intimate and lively performances by a rotating selection of renowned bands.'}  />
                <Cards src={rectangle3} date={'Every Monday'} dayTime={'9-11pm'} desc={'Jazz up your Monday nights with intimate and lively performances by a rotating selection of renowned bands.'}  />
            </div>
        </div>
     );
}
 
export default Events;