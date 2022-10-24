import {Fragment, useState} from 'react'

function Child(props) {
    const [fruit, setFruit] = useState('Apple')

    return <Fragment>
        <h1>{props.header}</h1>
        <p>{fruit}</p>
        <button onClick={() => {setFruit('Banana')}}>Pick banana</button>
        <button onClick={() => {setFruit('Apple')}}>Pick apple</button>
    </Fragment>
}

export default Child