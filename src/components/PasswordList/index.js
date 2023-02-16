import './index.css'

const PasswordList = props => {
  const {initialPasswordList, onDeletePasswordList, isChecked} = props
  console.log(isChecked)
  const {id, userNameInput, websiteInput, passwordInput} = initialPasswordList
  const websiteInputValue = websiteInput[0]

  const deletePssword = () => {
    onDeletePasswordList(id)
  }

  const checkedPassword = isChecked ? (
    <p className="user-pswd">{passwordInput}</p>
  ) : (
    <img
      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
      alt="stars"
      className="stars"
    />
  )

  return (
    <li>
      <div className="passwords-list-elements">
        <div className="web">
          <p className="firstName">{websiteInputValue}</p>
        </div>
        <div className="websites-names-passwords">
          <p className="web-name">{websiteInput}</p>
          <p className="user-name">{userNameInput}</p>
          {checkedPassword}
        </div>
        <div className="delete-button">
          <button
            className="deleteButton"
            type="button"
            onClick={deletePssword}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
              alt="delete"
              className="delete"
              testid="delete"
            />
          </button>
        </div>
      </div>
    </li>
  )
}

export default PasswordList
