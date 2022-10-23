import React from 'react'
import PropTypes from 'prop-types'

class Child extends React.Component {
    render() {
        return <div>{this.props.data}</div>
    }
}

Child.propTypes = {
    data: PropTypes.bool
}

export default Child