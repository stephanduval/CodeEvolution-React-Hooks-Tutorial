import React, { useState, useEffect } from 'react'

function UseEffectHookFunctionalComponent() {
    const[count, setCount] = useState(0)

    //useEffect is passed a function that get executed after every render of the component
    // it runs the function every time the component renders
    useEffect(() => {
        document.title = `You clicked ${count} times`
    }) 

    return (
        <div>
            <button onClick={()=> setCount(count+1)}> UseEffectHookFunctionalComponent - Updates page title - Click {count} times </button>
        </div>
    )
}

export default UseEffectHookFunctionalComponent