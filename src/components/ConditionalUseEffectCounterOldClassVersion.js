import React, { Component } from 'react'

class ConditionalUseEffectCounterOldClassVersion extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            name: ''
        }
    }


componentDidMount() {
    document.title = `Clicked ${this.state.count} times`
}

// to be efficient we only updte the title if the count changes.  This is the conditional part.
componentDidUpdate(prevProps, prevState) {
    if(prevState.count != this.state.count) {
    console.log('updating document title')
    document.title = `Clicked ${this.state.count} times`
    }
}

render() {
    return (
        <div>
            <input type='text'
            value={this.state.name}
            onChange={event => {
                this.setState({name: event.target.value})
            }}
            />
            <button onClick={() => this.setState({ count: this.state.count + 1})}>
            ConditionalUseEffectCounterOldClassVersion - Changes Page Title - Click {this.state.count} times
            </button>
            
        </div>
    )

}
}

export default ConditionalUseEffectCounterOldClassVersion