import React, {Component} from 'react'
import './App.css'

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            passwordConfirmation: '',
            email: '',
            errors: {},
        }

        this.validateUsernameOnBlur = this.validateUsernameOnBlur.bind(this)
        this.validatePasswordOnBlur = this.validatePasswordOnBlur.bind(this)
        this.validateEmailOnBlur = this.validateEmailOnBlur.bind(this)
        this.validatePasswordConfirmationOnBlur = this.validatePasswordConfirmationOnBlur.bind(this)
    }



    submitForm(event) {
        event.preventDefault()
        console.log('Submitting the form now...')
    }

    validateUsernameOnBlur = (event) => {
        const username = event.target.value;
        const errors = this.state.errors;
        errors.username = this.validateNotEmpty('Username', username)
        this.setState({username, errors})
    }

    validatePasswordOnBlur = (event) => {
        const password = event.target.value;
        const errors = this.state.errors;
        errors.password = this.validateNotEmpty('Password', password)
        this.setState({password, errors})
    }

    validateEmailOnBlur = (event) => {
        const email = event.target.value;
        const errors = this.state.errors;
        errors.email = this.validateNotEmpty('Email', email)
        this.setState({email, errors})
    }

    validateEmailFormat(fieldName, value) {
        let [lhs, rhs] = value.split("@")
        lhs = lhs || ' '
        rhs = rhs || ' '
        if (lhs.length <= 0 || rhs.length <=0) return `${fieldName} must be in a standard email format`
    }

    validatePasswordConfirmationOnBlur(event) {
        const passwordConfirmation = event.target.value;
        const errors = this.state.errors;
        if (passwordConfirmation !== this.state.password) {
            errors.passwordMatch = 'Passwords must match password confirmation.'
        }

        this.setState({passwordConfirmation, errors})
    }

    validateNotEmpty(fieldName, value) {
        if (value.length <= 0) {
            return `${fieldName} must be filled out`
        }
    }

    displayErrors() {
        return (
            <div className='errors'>
                {Object.values(this.state.errors).map((err, i) => <p key={`err-${i}`}>{err}</p>)}
            </div>
        )
    }

    displayForm() {
        return (
            <div>
                Username: <input type='text' onBlur={this.validateUsernameOnBlur}/><br/>
                Password: <input type='text' onBlur={this.validatePasswordOnBlur}/><br/>
                Password Confirmation: <input type='text' onBlur={this.validatePasswordConfirmationOnBlur}/><br />
                Email: <input type='text' onBlur={this.validateEmailOnBlur}/><br />
                <br />
                <button onClick={this.submitForm}>Submit</button>
            </div>
        )
    }

  render() {
    return (
        <div className='App'>
         Create Account
            {this.displayErrors()}
            <hr />
            {this.displayForm()}
        </div>
    )
  }
}

export default App
