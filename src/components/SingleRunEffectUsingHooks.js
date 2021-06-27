import React from 'react'
import { useEffect, useState } from 'react'

function HookMouse() {

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition = event => {
        console.log('Mouse event')
        setX(event.clientX)  //clientX is part of thea MouseEvent() object
        setY(event.clientY)
    }

    useEffect(() => {
        console.log('useEffect called')
        window.addEventListener('mousemove', logMousePosition)

        //this is our cleanup function for when a component unmounts:
        //return runs when the component is unmounted
        return () => {
            console.log('component unmounting code')
            window.removeEventListener('mousemove', logMousePosition)
        }

    }, [])  // the empty array means we call it only once. (the array of delta varibles that trigger the function is null)
           // Not having this makes the component run insanely slow

    return (
        <div>
            Coordinates of Mouse using Hooks: X- {x}, Y - {y}
        </div>
    )
}

export default HookMouse