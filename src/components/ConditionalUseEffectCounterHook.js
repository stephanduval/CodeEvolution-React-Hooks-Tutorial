import React, { useState, useEffect } from 'react'

function ConditionalUseEffectCounterHook() {
    const[count, setCount] = useState(0)
    const [name, setName] = useState('')

    //useEffect is passed a function that get executed after every render of the component
    // it runs the function every time the component renders
    // The second parameter after function is an array that only updates it when a variable in the array changes value.
    useEffect(() => {
        console.log('useEffect - Updating document title')
        document.title = `You clicked ${count} times`
    }, [count]) 

    return (
        <div>
            <input type='text' value={name} onChange={event => setName(event.target.value)} />
            <button onClick={()=> setCount(count+1)}> ConditionalUseEffectCounterHook - Updates page title - Click {count} times </button>
        </div>
    )
}

export default ConditionalUseEffectCounterHook