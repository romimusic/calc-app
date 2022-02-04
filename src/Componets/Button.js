import React from "react";

const Button = ({type, text, clickHandler}) => {
    return (
            <button className={type} onClick={()=> clickHandler(text)}> 
                {text} 
            </button>
    )
}

export default Button