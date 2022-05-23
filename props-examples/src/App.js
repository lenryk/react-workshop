import React, { Component } from 'react';

class App extends Component {
  render() {
      const details = [
          {
              name: 'Tiger',
              number: 3890,
              endangered: true,
              photo: 'https://source.unsplash.com/S0txA-JnUFA/400x300',
              id: 1,
              donation: 100,
          },
          {
              name: 'Brown Bear',
              number: 200000,
              endangered: false,
              photo: 'https://source.unsplash.com/c8XlAc1akIU/400x300',
              id: 2,
              donation: 10,
          },
          {
              name: 'Red Panda',
              number: 10000,
              endangered: true,
              photo: 'https://source.unsplash.com/2zYHKx8jtvU/400x300',
              id: 3,
              donation: 50,
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
                      <WrapperComponent image={<Photo path={detail.photo} title={detail.name} />} detail={detail} key={index} />
                  ))}
              </ul>
          </div>
      );
  }
}

class AnimalDetails extends Component {
    render() {
        const {name, number, endangered, id, donation} = this.props.detail;
        const {image, donationColor} = this.props

        console.log(donation)
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

const WrapperComponent = withDonationColor(AnimalDetails)


export default App;
