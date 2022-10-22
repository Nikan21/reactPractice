import React from 'react'
import FirstComponent from './firstComponent'
import SecondComponent from './secondComponent'
import Child from './child'

class App extends React.Component {
render() {
return <React.Fragment>
    <FirstComponent></FirstComponent>
    <SecondComponent>
        <Child />
    </SecondComponent>
</React.Fragment>
}
}

export default App