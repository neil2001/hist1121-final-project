import React from "react";
import "./cite.css";

const Cite = ({idx, src}) => {
    return (
        <a href={`#cite-${src}`}><sup>[{src}]</sup></a>
    )
}

export default Cite