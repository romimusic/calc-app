import React from "react";
import Button from "./Button";

const SpecialsFunctions = ({onClear, onDeleted}) => {
    return (
        <section className="numbers">
            <Button text={"Clear"} clickHandler={onClear} type="lastBox"/>
            <Button text={"<-"} clickHandler={onDeleted} type="lastBox"/>
        </section>
    )
}

export default SpecialsFunctions