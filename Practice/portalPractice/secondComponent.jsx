import React from 'react'
import ReactDOM from 'react-dom'

class SecondComponent extends React.Component {
    render() {
        const firstComponent = document.getElementById('test')
        return ReactDOM.createPortal(this.props.children, firstComponent)
    }
}

export default SecondComponent