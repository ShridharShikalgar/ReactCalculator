import React, {Component} from 'react';
import Calculator from "./components/Calculator";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <h1 className="App-title">React Calculator</h1>
          <br/>
        </div>
        <div id="wrapper">
          <div id="calculator-wrapper">
            <Calculator/>
          </div>
        </div>
      </div>);
  }
}

export default App;
