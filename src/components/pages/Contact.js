import React from 'react'
import '../../App.css'
import ContactCards from '../ContactCards';

function Contact(){
    return( 
     <>
    <div className='contact'>
        <h1 className='contact-title'>
        Contact Me
        </h1>
    </div>
    <ContactCards />
    </>
    );
}
export default Contact;