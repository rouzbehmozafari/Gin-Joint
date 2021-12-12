import React from 'react';
import  './Nav.css'

const Nav = () => {
    return ( 
        <div className="Nav">
            <ul>
                <li><a className='orng' href="#">HOME</a></li>
                <li><a href="#">ENTERTAINMENT</a></li>
                <li><a href="#">SHOP</a></li>
                <li><a href="#">EVENTS</a></li>
                <li><a href="#">CONTACT</a></li>
            </ul>
        </div>
     );
}
 
export default Nav;