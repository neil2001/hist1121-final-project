import React from "react";
import "./cite.css";

const Cite = ({src}) => {
    return (
        <a href={`#cite-${src}`}><sup>{src}</sup></a>
    )
}

export default Cite