import React, { Component } from 'react';
import './App.less';
import ViewUpload from "./components/upload/view";
import Sl from "./components/upload/selectGroup";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ViewUpload/>
        <Sl/>
      </div>
    );
  }
}

export default App;