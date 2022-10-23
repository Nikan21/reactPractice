import React from "react";
import Child from './child'

class App extends React.Component{

  render() {
    return (
        <Child data={123}/>
    );
  }
}


export default App;
