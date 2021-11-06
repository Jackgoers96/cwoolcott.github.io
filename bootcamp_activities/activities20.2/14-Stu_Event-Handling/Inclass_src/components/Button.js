import React from 'react';

function Button(props) {
    //console.log("Button Props", props)
    return (
        <button
            type="button"
            className="btn btn-secondary"
            onClick={props.handleCount}>
            {props.children}
        </button>
    )
}

export default Button;
