import React from "react";
import Child from './child'

class App extends React.Component{

  render() {
    return (
        <Child header={'Hello, click on the button'}/>
    );
  }
}


export default App;
