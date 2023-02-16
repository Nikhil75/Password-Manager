import {Component} from 'react'
import {v4} from 'uuid'
import PasswordList from '../PasswordList'

import './index.css'

class PasswordManager extends Component {
  state = {
    initialPasswordList: [],
    websiteInput: '',
    userNameInput: '',
    passwordInput: '',
    isPasswordListPresent: true,
    searchInput: '',
    isChecked: false,
  }

  submitPasswordForm = event => {
    event.preventDefault()
    const {
      websiteInput,
      userNameInput,
      passwordInput,
      isPasswordListPresent,
    } = this.state
    const newPasswordList = {
      id: v4(),
      websiteInput,
      userNameInput,
      passwordInput,
    }
    this.setState(prevState => ({
      initialPasswordList: [...prevState.initialPasswordList, newPasswordList],
      websiteInput: '',
      userNameInput: '',
      passwordInput: '',
      isPasswordListPresent: [!prevState.isPasswordListPresent],
    }))
  }

  enterWebsite = event => {
    this.setState({
      websiteInput: event.target.value,
    })
  }

  enterUsername = event => {
    this.setState({
      userNameInput: event.target.value,
    })
  }

  enterPassword = event => {
    this.setState({
      passwordInput: event.target.value,
    })
  }

  searchPasswordList = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  onDeletePasswordList = id => {
    const {initialPasswordList} = this.state
    const deletePasswordList = initialPasswordList.filter(
      each => each.id !== id,
    )
    this.setState({
      initialPasswordList: deletePasswordList,
    })
  }

  onChecked = () => {
    this.setState(prevState => ({
      isChecked: !prevState.isChecked,
    }))
  }

  render() {
    const {
      initialPasswordList,
      userNameInput,
      websiteInput,
      passwordInput,
      isPasswordListPresent,
      searchInput,
      isChecked,
    } = this.state

    const updateSearchList = initialPasswordList.filter(eachItem =>
      eachItem.websiteInput.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="password-app-container">
        <div className="app-logo-password">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
            className="app-logo"
          />
        </div>
        <div className="form-control-image">
          <form
            className="password-manager-form"
            onSubmit={this.submitPasswordForm}
          >
            <div className="form-heading">
              <h1 className="heading">Add New Password</h1>
            </div>
            <div className="website-name-input">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
                className="website"
              />
              <hr />
              <input
                type="text"
                className="input-text"
                placeholder="Enter Website"
                value={websiteInput}
                onChange={this.enterWebsite}
              />
            </div>
            <div className="website-name-input">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt="username"
                className="username"
              />
              <hr />
              <input
                type="text"
                className="input-text"
                placeholder="Enter Username"
                value={userNameInput}
                onChange={this.enterUsername}
              />
            </div>
            <div className="website-name-input">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                alt="password"
                className="username"
              />
              <hr />
              <input
                type="password"
                className="input-text"
                placeholder="Enter Password"
                value={passwordInput}
                onChange={this.enterPassword}
              />
            </div>

            <button type="submit" className="add-btn">
              Add
            </button>
          </form>
          <div className="form-image">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="password manager"
              className="password-manager"
            />
          </div>
        </div>
        <div className="password-list-container">
          <div className="your-password-count-search">
            <div className="password-count">
              <h1 className="password">Your Passwords</h1>
              <p className="count">
                {isPasswordListPresent && initialPasswordList.length}
              </p>
            </div>
            <div className="website-name-password">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                className="username"
              />
              <hr />
              <input
                type="search"
                className="input-text"
                placeholder="search"
                onChange={this.searchPasswordList}
              />
            </div>
          </div>
          <hr className="hr" />
          <div className="show-password">
            <input
              type="checkbox"
              id="showPassword"
              onChange={this.onChecked}
              checked={isChecked}
            />
            <label htmlFor="showPassword" className="password-text">
              Show Passwords
            </label>
          </div>
          {initialPasswordList.length === 0 ? (
            <div className="passwords-list-image">
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                alt="no passwords"
                className="no-passwords"
              />
              <p className="noPasswords">No Passwords</p>
            </div>
          ) : (
            <ul className="passwd-list">
              {updateSearchList.map(eachPassword => (
                <PasswordList
                  key={eachPassword.id}
                  initialPasswordList={eachPassword}
                  onDeletePasswordList={this.onDeletePasswordList}
                  isChecked={isChecked}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default PasswordManager
