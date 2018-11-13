import React from 'react';

const person = ( props ) => { // making a functional component
    return (
        <div className="Person">
            <p onClick = {props.click}>I'm {props.name} and I am {props.age}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
};

export default person;