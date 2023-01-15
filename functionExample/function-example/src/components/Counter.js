import React from "react";
import { Button, Stack } from "react-bootstrap";
import { useState } from "react";

function Counter() {
    const [counter, setCounter] = useState(0);

    const addToCounter = () => {
        let updateCounter = counter + 1;
        setCounter(updateCounter);
    };

    const minusFromCounter = () => {
        let updateCounter = counter - 1;
        setCounter(updateCounter);
    };

    return (
        <div>
            <h1 style={{ marginTop: "10px" }}>Counter value: {counter}</h1>
            <Stack
                direction="horizontal"
                gap={2}
                style={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                margin: "50px",
                }}
            >
                <Button onClick={addToCounter}>Increment</Button>
                <Button onClick={minusFromCounter}>Decrement</Button>
            </Stack>
        </div>
    );
}

export default Counter;
