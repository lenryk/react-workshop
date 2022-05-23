import React, { Component } from 'react';

class App extends Component {
  render() {
      const details = [
          {
              name: 'Tiger',
              number: 3890,
              endangered: true,
              photo: 'https://source.unsplash.com/S0txA-JnUFA/200x100',
              id: 1,
          },
          {
              name: 'Brown Bear',
              number: 200000,
              endangered: false,
              photo: 'https://source.unsplash.com/c8XlAc1akIU/200x100',
              id: 2,
          },
          {
              name: 'Red Panda',
              number: 10000,
              endangered: true,
              photo: 'https://source.unsplash.com/2zYHKx8jtvU/200x100',
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

      return (
          <div>
              {this.props.children}
              <ul>
                  {details.map((detail, index) => (
                      <AnimalDetails image={<Photo path={detail.photo} title={detail.name} />} detail={detail} key={index} />
                  ))}
              </ul>
          </div>
      );
  }
}

class AnimalDetails extends Component {
    render() {
        const {name, number, endangered, id} = this.props.detail;
        const {image} = this.props

        return (
            <li key={id}>
                <div>
                    <p>{image}</p>
                    <p>Animal: {name}</p>
                    <p>Number: {number}</p>
                    <p>Endangered: {endangered ? 'Yes' : 'No'}</p>
                </div>
            </li>
        )
    }
}

class Photo extends Component {
    render () {

        return (
            <img src={this.props.path} alt={this.props.name} />
        )
    }
}


export default App;
