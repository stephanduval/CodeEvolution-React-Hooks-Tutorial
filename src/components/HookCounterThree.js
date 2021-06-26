import React, { useState } from 'react'




function HookCounterThree() {

    // this time the default value for the hook will be an object
    const [name, setName] = useState({firstName: '', LastName:''})

     // The ellipsis spread property is used to preserve(make a copy) of the previous state before appending the new state to it
    return(
        <div>
        <form>
       
            <input type="text" value={name.firstName} onChange={event => setName({...name, firstName: event.target.value })}    
            />
            <input type="text" value={name.lastName} onChange={event => setName({...name, lastName: event.target.value})}   
            />
            <h2>Your first name is {name.firstName}</h2>
            <h2>Your last name is {name.lastName}</h2>
            <h2>{JSON.stringify(name)}</h2>
        </form>
        </div>
    )

}

export default HookCounterThree