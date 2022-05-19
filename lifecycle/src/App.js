import './App.css';
import React, {Component} from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('constructor')
    this.state = {
      cycle: 0
    }
    setInterval(
        () => this.setState({cycle: this.state.cycle + 1}), 1000
    )
  }

  componentDidMount() {
    console.log('Component did mount')
  }

  componentDidUpdate() {
    console.log('Component did update')
  }

  render () {
    console.log('render')
    return (
        <div className="App">Hello Lifecycle: Cycle: {this.state.cycle}</div>
    )
  }
}

export default App;
