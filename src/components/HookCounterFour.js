import React, { useState } from 'react'

// This is a hook object using arrays

function HookCounterFour() {
    const [items, setItems] = useState([])

    const addItem = () => {
        // make a copy of the list using the spread operator and append a random number to the end of the list
        setItems([ ... items, {
            id: items.length,
            value: Math.floor(Math.random() * 10) + 1
        }])
    }

    return (
        <div>
        <button onClick={addItem}>Add a number</button>
        <ul>
        {items.map(item => ( 
        
        <li key={item.id}>{item.value}</li>
        
        ))}
        </ul>
        </div>
    )
}

export default HookCounterFour