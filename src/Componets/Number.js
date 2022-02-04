import React from "react";
import Button from "./Button";


const numbers = [1,2,3,4,5,6,7,8,9,0];

const renderButtons = (onClickNumber) => {
    //Don't repeat your self, build the quantity of component dinamicly
    const renderbutton = (number) => (
        <Button key={number} text={number.toString()} clickHandler={onClickNumber} type="number" />
    )
    return numbers.map(renderbutton);
}

const Number = ({onClickNumber}) => {
    return (
        <section className="numbers">

            { renderButtons(onClickNumber) }
    
        </section>
    )
}

export default Number