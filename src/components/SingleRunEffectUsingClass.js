import React, { Component } from 'react'

class ClassMouse extends Component {
    constructor(props) {
        super(props)

            this.state = {
                x: 0,
                y: 0
            }
    }


logMousePosition = event => {
    this.setState({ x: event.clientX, y: event.clientY})
}

// when something happens only once we used to use the componentDidMount() function to envelope it
componentDidMount(){
    window.addEventListener('mousemove', this.logMousePosition)
}

//How to handle if we unmount the component
componentWillUnmount() {
    window.removeEventListener('mousemove', this.logMousePosition)
}

render () {
    return (
    <div>
       X/Y coordinates of mouse in window object using Classes:  X - {this.state.x} Y - {this.state.y}
    </div>
    )
}
}

export default ClassMouse