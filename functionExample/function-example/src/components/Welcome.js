import React from "react";

function Welcome(props) {
    const displayAge = () => {
        alert(props.age);
    };

    return (
        <div>
            <h1>Hello World, {props.name}</h1>
            <button onClick={displayAge}>Display The User's Age</button>
        </div>
    );
}

export default Welcome;
