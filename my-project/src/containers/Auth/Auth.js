import React, {Component} from 'react';
import './Auth.css';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';

export default class Auth extends Component {

  loginHandler = () => {

  }

  registerHandler = () => {

  }

  submitHandler = (event) => {
    event.preventDefault();
  }

  render() {
    return (
      <div className="auth">
        <div>
          <h1>Авторизация</h1>

        <form className="auth-form" onSubmit={this.submitHandler}>
            <Input
              label="Email"
            />

            <Input
              label="Пароль"
              errorMessage={"Test"}
            />

            <Button
              type="button success-button"
              onClick={this.loginHandler}>
              Войти
            </Button>

            <Button
              type="button primary-button"
              onClick={this.registerHandler}>
              Зарегистрироваться
            </Button>
          </form>
        </div>
      </div>
    )
  }
}
