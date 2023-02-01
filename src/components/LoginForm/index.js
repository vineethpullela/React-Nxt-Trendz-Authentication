import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', isTrue: false}

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state

    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {method: 'POST', body: JSON.stringify(userDetails)}
    const response = await fetch(url, options)

    if (response.ok === true) {
      this.setState({isTrue: false})
      this.onSubmitSuccess()
    }
    if (response.ok === false) {
      console.log(response)
      this.setState({isTrue: true})
    }
  }

  setUserName = event => {
    this.setState({username: event.target.value})
  }

  setPassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {username, password, isTrue} = this.state
    return (
      <div className="login-container">
        <div className="login-text-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="website login"
            className="login-img"
          />

          <div className="form-text-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
              className="website-logo"
            />
            <form className="form-container" onSubmit={this.submitForm}>
              <label htmlFor="username" className="label">
                USERNAME
              </label>
              <input
                type="text"
                className="input"
                id="username"
                placeholder="Username"
                onChange={this.setUserName}
                value={username}
              />
              <label htmlFor="password" className="label">
                PASSWORD
              </label>
              <input
                type="password"
                className="input"
                id="password"
                placeholder="Password"
                onChange={this.setPassword}
                value={password}
              />

              <button type="submit" className="login-button">
                Login
              </button>
              {isTrue && (
                <p className="error-msg">*Username and Password didn't match</p>
              )}
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default LoginForm
