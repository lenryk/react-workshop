import React, {Component} from 'react';
import './App.css';
import LifecycleTest from './LifecycleTest';

class App extends Component {

  render() {
    return (
        <div className="App">
          Hello Conditional
            {true && <LifecycleTest />}
        </div>
    )
  }
}

export default App;
