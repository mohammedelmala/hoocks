import React, { useState } from 'react';

const UseStateComponent = () => {
    const initialValue = 0;
    const [counter, setCounter] = useState(initialValue);
    return (
        <div style={{ textAlign: "center" }}>
            <h3>{counter}</h3>
            <div>
                <button className="btn primary-bt" onClick={(e) => setCounter(counter - 1)} >
                    Decrement
                </button>
                <button className="btn primary-bt" onClick={(e) => setCounter(initialValue)} >
                    Reset
                </button>
                <button className="btn primary-bt" onClick={(e) => setCounter(counter + 1)}>
                    Increment
                </button>
            </div>
        </div>
    )
}

export default UseStateComponent
