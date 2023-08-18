import React from 'react';
import './Button.css';
import {Link} from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline'];
const SIZES = ['btn--medium', 'btn--large'];
export const Button = 
    ({
    children, 
    type, 
    onClick, 
    buttonStyle, 
    buttonSize
     }) => {
    const checkButtonStyle = STYLES.includes(buttonStyle)
     ? buttonStyle 
     : STYLES[1];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[1];
    //If button has a specified style and size then that is chosen else the first element in the style and size arrays are chosen
    return (
        <Link to='/contact' className = 'btn-mobile'>
            <button
            className = {`btn ${checkButtonStyle} ${checkButtonSize}`}
            onClick = {onClick}
            type={type}
            >
                {children}
            </button>
        </Link>
    );
};

