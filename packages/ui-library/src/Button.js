import React from "react";
// import { useNavigate } from 'react-router-dom';
import './style.css';

const Button = ({ onClick, text = null }) => {
    // const navigate = useNavigate();
    console.log(history);

    function handleClick() {
        console.log('handleClick');
        if (typeof onClick === 'function') onClick();
    }

    return (
        <button onClick={handleClick} className="test">
            {text}
            from remote1: GO TEST 3
        </button>
    );
};

export default Button;
