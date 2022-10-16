import React from 'react'
import GretingsContext from './context'

class Hello extends React.Component {

    render(){
        return<GretingsContext.Consumer>
            {value => (
                <p>{value.text}</p>
            )}
        </GretingsContext.Consumer>
    }
}

export default Hello