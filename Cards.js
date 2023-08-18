import React from 'react'
import CardItem from './CardItem'
import  './Cards.css'

function Cards(){
    return(
        <div className='cards' >
            <h1>Explore These Pages!</h1>
            <div className="cards__container'">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                    <CardItem 
                    src="/images/img-1.jpg"
                    text="A showcase of my exciting projects"
                    label='Personal'
                    path='/projects'
                    />
                    <CardItem 
                    src="images/img-9.jpg"
                    text="My Personal Story and Resume"
                    label='Personal'
                    path='/aboutme'
                    />
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default Cards