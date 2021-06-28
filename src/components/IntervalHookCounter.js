import React, { useState, useEffect } from 'react'

function IntervalHookCounter() {
    const [count, setCount] = useState(0)

    const tick = () => {
        setCount(count + 1)
        }
    // calling a function within useEffect



// if you have multiple useEffect functions to run, give each one their own useEffect() wrapper to make it easy to read
        // define functions used within useEffect() so that its easier to see what variables should be listed in the dependency array
    // the empty array at the end makes it load only once, instead of each render, oops, doing it this way keeps the counter at 1... so we add count as a dependency to fix this.
    // remember that parameter is what react uses to trigger the change
    // if we use: 
    //setCount(prevCount => prevCount +1)
    // in the tick fuction then we can use the blank array parameter in useEffect
    
    // the methods used after the return statement allows it to unmount
    useEffect(() => {
        const interval = setInterval(tick, 1000)
        return() => {
            clearInterval(interval)  // Use clearInterval() to stop the time
        }
    }, [count])  

    return(
        <div>
           Interval counter using Hook: {count} 
        </div>  
    )
}

export default IntervalHookCounter