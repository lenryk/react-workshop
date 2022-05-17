import React, {Component} from 'react'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {field:'', submitDisabled: true}
      this.handleType = this.handleType.bind(this)
  }

  handleType(event) {
      console.log(event.target.value)
      this.setState({...this.state, field: event.target.value})
      this.fieldLength()
      console.log(this.state)
  }

  calcLength() {
    return this.state.field.length
  }

    fieldLength() {
        if (this.state.field.length >= 100) this.setState({...this.state.field, submitDisabled: false})
        else if (this.state.field.length < 100) this.setState({...this.state.field, submitDisabled: true})
    }

  render() {
    return (
        <div className="app">
          <textarea name='text' onChange={this.handleType} />
          <br/>
          Posts must be 100 characters, your post is currently: {this.calcLength(this.state)} characters long
          <br/>
          <button disabled={this.state.submitDisabled} onClick={() => alert('Blog post submitted')}>Submit Post</button>
        </div>

    )
  }

}

export default App;
