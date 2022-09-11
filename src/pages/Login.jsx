import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loginAction } from '../redux/actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      inputEmail: '',
      senha: '',
      // submitted: false,
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  validateButton = () => {
    const { inputEmail, senha } = this.state;
    const regex = /([a-z A-Z 0-9 . _]+)@([a-z A-Z]+).([a-z A-Z]{2,6})(.[a-z]{2,6})?$/;
    const SIX = 6;
    const validation = regex.test(inputEmail) && senha.length >= SIX;
    return validation;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { history, dispatch } = this.props;
    const { inputEmail } = this.state;
    dispatch(loginAction(inputEmail));

    history.push('/carteira');
  };

  render() {
    const { inputEmail, senha } = this.state;
    return (
      <div>
        <h1>Your TrybeWallet</h1>
        <h2>Login</h2>
        <form>
          <label htmlFor="inputEmail">
            Login
            <input
              type="text"
              name="inputEmail"
              placeholder="Digite seu email"
              data-testid="email-input"
              value={ inputEmail }
              onChange={ this.handleChange }

            />
          </label>
          <label htmlFor="senha">
            Senha
            <input
              type="password"
              name="senha"
              placeholder="Digite sua senha"
              data-testid="password-input"
              value={ senha }
              onChange={ this.handleChange }
            />
          </label>
          <button
            type="button"
            disabled={ !this.validateButton() }
            onClick={ this.handleSubmit }
          >
            Entrar

          </button>
        </form>

      </div>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default connect()(Login);
