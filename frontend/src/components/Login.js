import React from 'react';

function Login(props) {
  const [buttonText, setButtonText] = React.useState('Войти уже, ну!');
  const [login, setLogin] = React.useState('');
  const [password, setPassword] = React.useState('');
  function handleLoginChange(e) {
    setLogin(e.target.value);
  }
  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    setButtonText('Вход...')
    fetch(`https://hackathon2025.herokuapp.com/users/`, {
      method: 'GET',
      body: JSON.stringify({
        login: login,
        password: password
        })
      })
      .then((res) => {
        return res.json()
      })
      .then(res => {

      })
      .catch((err) => console.log(err))
      .finally(() => {
        setButtonText('Войти уже, ну!')
      })
    }
  return (
    <section className={`form page ${ props.selected === props.pageNumber && 'page_active'}`}>
      <form className="variant__form">
        <label className="variant__label">
          <input 
            className="variant__input" 
            type="text" 
            placeholder="Логин" 
            onChange={handleLoginChange}
            value={login}
            required />
        </label>
        <label className="variant__label">
          <input 
            className="variant__input" 
            type="password" 
            placeholder="Пароль" 
            onChange={handlePasswordChange}
            value={password}
            required />
        </label>
        <label className="variant__label">
          <div className="variant__buttons">
            <button onSubmit={handleSubmit} className="button button_form page-link" type="submit">{buttonText}</button>
            <button className="button button_form page-link">Ну его нафиг...</button>
          </div>
        </label>
      </form>
    </section>
  )
}

export default Login;