import React from 'react';

import './card.styles.css'; 

export const Card = props => ( //functinal component that will return div 
    <div className='card-container'> 

        <img alt="monsters" src={`https://robohash.org/${props.monster.id}1?set=set2&size=180x180`} /> 

        <h2> {props.monster.name} </h2>  
        <p> {props.monster.email} </p>


    </div>
)