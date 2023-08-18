import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom'

function Footer(){
    return(
        <div className='footer-container'>
            <div className="footer-links">
                <div calssName="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Contact</h2>
                        <Link to='/'>My Email</Link>
                        <Link to='/'>Github</Link>
                        <Link to='/'>LinkedIn</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer