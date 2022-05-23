import React, { Component } from 'react';

class App extends Component {
  render() {
      const details = [
          {
              name: 'Tiger',
              number: 3890,
              endangered: true,
              id: 1,
          },
          {
              name: 'Brown Bear',
              number: 200000,
              endangered: false,
              id: 2,
          },
          {
              name: 'Red Panda',
              number: 10000,
              endangered: true,
              id: 3,
          }
      ];
    return (
        <Animal details={details}>
            <h1>Endangered Animals</h1>
        </Animal>
    )
  }
}

export class Animal extends Component {
  render() {
    const details = this.props.details;
    const listDetails = details.map(detail => (
        <li key={detail.id}>
            <div>
                <p>Animal: {detail.name}</p>
                <p>Number: {detail.number}</p>
                <p>Endangered: {detail.endangered ? 'Yes' : 'No'}</p>
            </div>
        </li>
    ))

      return (
          <div>
              {this.props.children}
              <ul>
                  {details.map((detail, index) => (
                      <AnimalDetails detail={detail} key={index} />
                  ))}
              </ul>
          </div>
      );
  }
}

class AnimalDetails extends Component {
    render() {
        const {name, number, endangered} = this.props.detail;

        return (
            <li key={this.props.key}>
                <div>
                    <p>Animal: {name}</p>
                    <p>Number: {number}</p>
                    <p>Endangered: {endangered ? 'Yes' : 'No'}</p>
                </div>
            </li>
        )
    }
}


export default App;
