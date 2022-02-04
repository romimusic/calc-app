import React from "react";
import Button from "./Button";

const MathOperations = ({onClickOperations, onClickEqual}) => {
    return (
        <section className="operations__container"> 
            <Button text={"+"} clickHandler={onClickOperations} type="opeartions" />
            <Button text={"-"} clickHandler={onClickOperations} type="opeartions" />
            <Button text={"*"} clickHandler={onClickOperations} type="opeartions" />
            <Button text={"/"} clickHandler={onClickOperations} type="opeartions" />
            <Button text={"="} clickHandler={onClickEqual} type="lastBox" />
        </section>
    )
}

export default MathOperations