import React from 'react';
import CardItem from './CardItem';

function Cards() {
    return (
        <div className='cards'>
            <h1>Confira esses destinos épicos</h1>
            <div className="cards__container">
               <div className="cards__wrapper">
                   <ul className="cards__items">
                        <CardItem />

                   </ul>
                </div> 
            </div>
        </div>
    )
}

export default Cards;