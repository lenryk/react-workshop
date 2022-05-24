import React, { Component } from 'react';
import './styles.css'

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

    addList(details) {
        this.setState(prevState => {
            const newId = prevState.details.length + 1;
            const newDetails = { ...details, id: newId };
            return { ...prevState, details: [...prevState.details,
                    newDetails] };
        });
    }

    removeList(id) {
        this.setState(prevState => {
            const list = prevState.details.filter(item => item.id !== id)
            return {prevState, details: list}
        })
    }

  render() {

    return (
        <>
            <Animal details={this.state.details}
                    removeList={this.removeList.bind(this)}>
                <h1>Endangered Animals</h1>
            </Animal>
            <AnimalForm addList={this.addList.bind(this)} />
        </>
    )
  }
}

export class AnimalForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            number: 0,
            endangered: false,
            photo: '',
            donations: 0
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        const inputTarget = event.target;
        const inputValue = this.getInputValue(inputTarget);
        const inputName = inputTarget.name;
        this.setState({ [inputName]: inputValue });
    }

    getInputValue(target) {
        if (target.type === 'radio' && target.value === 'yes') {
            return true;
        } else if (target.type === 'radio' && target.value === 'no') {
            return false;
        }
        return target.value;
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.addList(this.state);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h2>Add new animal details</h2>
                <label>
                    <div className='title'>Name:</div>{' '}
                    <input type='text' name='name' onChange={this.handleChange} />
                </label>
                <label>
                    <div className='title'>Number:</div>{' '}
                    <input type='number' name='number' onChange={this.handleChange} />
                </label>
                <div>
                    <div className='title'>Endangered:</div>
                    <label>
                        <input
                            type='radio'
                            name='endangered'
                            value='true'
                            onChange={this.handleChange}
                        />{' '}
                        Yes
                    </label>
                    <label>
                        <input
                            type='radio'
                            name='endangered'
                            value='false'
                            onChange={this.handleChange}
                        />{' '}
                        No
                    </label>
                </div>
                <label>
                    <div className='title'>Photo:</div>{' '}
                    <input type='text' name='photo' onChange={this.handleChange} />
                </label>
                <label>
                    <div className='title'>Donation:</div> $
                    <input type='number' name='donation' onChange={this.handleChange} />
                </label>
                <div>
                    <button>Add to the list</button>
                </div>
            </form>
        );
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
