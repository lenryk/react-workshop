import React, { Component } from 'react';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            details: [
                {
                    id: '1',
                    name: 'Tiger',
                    number: 3890,
                    endangered: true,
                    photo: 'https://source.unsplash.com/Si6Obte6Bu0/200x100',
                    donation: 100,
                },
                {
                    id: '2',
                    name: 'Brown Bear',
                    number: 200000,
                    endangered: false,
                    photo: 'https://source.unsplash.com/c8XlAc1akIU/200x100',
                    donation: 10,
                },
                {
                    id: '3',
                    name: 'Red Panda',
                    number: 10000,
                    endangered: true,
                    photo: 'https://source.unsplash.com/2zYHKx8jtvU/200x100',
                    donation: 50,
                },
            ],
        };
    }

    removeList(id) {
        this.setState(prevState => {
            const list = prevState.details.filter(item => item.id !== id)
            return {prevState, details: list}
        })
    }

  render() {

    return (
        <Animal details={this.state.details} removeList={this.removeList.bind(this)}>
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
                      <WrapperComponent
                          key={index}
                          image={<Photo path={detail.photo} title={detail.name} />}
                          detail={detail}
                          index={index}
                          removeList={this.props.removeList}
                          />
                  ))}
              </ul>
          </div>
      );
  }
}

class AnimalDetails extends Component {
    render() {
        const {name, number, endangered, id, donation} = this.props.detail;
        const {image, donationColor, removeList} = this.props

        return (
            <li key={id}>
                <div>
                    <p>{image}</p>
                    <p>Animal: {name}</p>
                    <p>Number: {number}</p>
                    <p>Endangered: {endangered ? 'Yes' : 'No'}</p>
                    <p style={{ color: donationColor }}>
                        Donation amount: <span className='donation-color'>${donation}</span>
                    </p>
                    <button onClick={() => removeList(id)}>Remove from the list</button>
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


const withDonationColor = WrapperComponent => {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {donationColor: 'black'}
        }

        componentDidMount() {
            const donationAmount = this.props.donation;
            const donationColor = donationAmount > 50 ? 'green' : 'red'
            this.setState({donationColor})
        }

        render() {
            return <WrapperComponent {...this.props} donationColor={this.state.donationColor} />
        }
    }
}

// class WrapperComponent extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {donationColor: 'black'}
//     }
//
//
//     componentDidMount() {
//         const donationAmount = this.props.donationAmount;
//         const donationColor = donationAmount > 50 ? 'green' : 'red';
//         this.setState({donationColor})
//     }
//
//     render() {
//         return this.props.render({donationColor: this.state.donationColor})
//     }
// }

const WrapperComponent = withDonationColor(AnimalDetails);

export default App;
