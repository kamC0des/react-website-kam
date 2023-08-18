import React from 'react'
import CardItem from './CardItem'
import  './Cards.css'

function ContactCards(){
    return(
        <div className='contact-cards' >
            <h1>Through these resources</h1>
            <h1> For any further questions or information!</h1>
            <div className="cards__container'">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                    <CardItem 
                    src="images/img-30-transformed.jpeg"
                    text="My Email"
                    label='Personal'
                    path='/projects'
                    />
                    <CardItem 
                    src="images/img-9.jpg"
                    text="Github"
                    label='Personal'
                    path='/aboutme'
                    />
                    <CardItem 
                    src="images/img-9.jpg"
                    text="LinkedIn"
                    label='Personal'
                    path='/aboutme'
                    />
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default ContactCards