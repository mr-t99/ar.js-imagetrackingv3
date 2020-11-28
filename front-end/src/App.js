import React, { Component } from 'react';
import './App.less';
import ViewUpload from "./components/upload/view";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ViewUpload/>
      </div>
    );
  }
}

export default App;