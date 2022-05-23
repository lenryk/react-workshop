import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
        <Animal name="Tiger" number={3890} endangered={true}>
            <h1>Endangered Animals</h1>
        </Animal>
    )
  }
}

export class Animal extends Component {
  render() {
    const { name, number, endangered, children } = this.props;

    return (
        <div>
            {children}
          <p>Animal: {name}</p>
          <p>Number: {number}</p>
          <p>Endangered: {endangered ? 'Yes' : 'No'}</p>
        </div>
    );
  }
}


export default App;
