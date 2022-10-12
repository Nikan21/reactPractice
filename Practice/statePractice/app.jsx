import React from 'react'

class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {count: 0}
    }
    componentDidMount() {
        console.log('Start')
    }

    componentWillUnmount() {
        console.log('End')
    }
    

    clickCount = () => {
        this.setState((prev) => {return {count: prev.count + 1}})
    }    

    render() {
        return <div>
        <button onClick={this.clickCount}>Click</button>
        <p>{this.state.count}</p>
        </div>
    }
}

export default Counter