import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {messages: [], loading: true}
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('prevProps:', prevProps)
    console.log('prevState:', prevState)

  }

  componentDidMount() {
    setTimeout(() => this.setState({messages: ["Hello World", "how are you?"], loading: false}), 10000)
  }

  renderProfile() {
    if (this.state.loading) return <div>Loading...</div>
    if(this.state.messages && this.state.messages.length > 0) {
      return (
          <ul>
            {this.state.messages.map((msg, index) => <li key={`msg-${index}`}>{msg}</li>)}
          </ul>
      )
    } else {
      return <div>No messages!</div>
    }
  }

  render () {
    return (
        <>
          <div className="App">User Profile</div>
          {this.renderProfile()}
        </>

    )
  }
}

export default App;
