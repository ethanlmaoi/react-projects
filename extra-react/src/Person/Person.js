import React from 'react';

const person = ( props ) => { // making a functional component
    return (
        <div>
            <p onClick = {props.click}>I'm {props.name} and I am {props.age}</p>
            <p>{props.children}</p>
            <input type="text" onChange={} />
        </div>
    )
};

export default person;