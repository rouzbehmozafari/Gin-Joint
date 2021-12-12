import React from 'react';
import './Story.css';
import '../Article/Article.css'



const Story = (props) => {
    return ( 
        <div className="Story">
            <div className="Article">
                <p>{props.first}</p>
                <h2>{props.head}</h2>
                <p>{props.desc}</p>
                <a href="#">Read More</a>
             </div>
            <img src={props.src} alt="img" />
        </div>
     );
}
 
export default Story;