import React, { useState } from 'react';

const UseStateObject = () => {

    const [items, setItems] = useState([]);

    const addItem = (event) => {
        setItems([...items, { id: items.length, value: Math.floor(Math.random(10) * 10) }])
    }

    return (
        <div>
            <br />
            <button onClick={addItem}>Add Item</button>
            <ui>
                {items.map(item => <li key={item.id}>{item.value}</li>)}
            </ui>

        </div>
    )
}

export default UseStateObject
