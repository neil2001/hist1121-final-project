import React from "react";

const Citation = ({idx, text}) => {
    return (
        <li id={`cite-${idx}`}>{text}</li>
    )
}

export default Citation