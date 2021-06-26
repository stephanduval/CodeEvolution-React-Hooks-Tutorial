import React, {useState} from 'react'

function HookCounter() {

    // the next function is done in array destructuring so the parameters look different than normal, but operate normally
    const [count, setCount] = useState(0) // accepts the current value of the state property and returns the modified/current version of the state property using a function

    return (
        <div>
        <button onClick={() => setCount(count + 1)}>Count using Hooks {count}</button>
        </div>
    )
}

export default HookCounter