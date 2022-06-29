import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import logo from '../trivia.png';

class Login extends Component {
  state = {
    nome: '',
    email: '',
    btnDisabled: true,
  }

  onHandle = ({ target }) => {
    const { value } = target;
    const { name } = target;

    this.setState({ [name]: value }, this.activateButton());
  }

  activateButton = () => {
    const { nome, email } = this.state;
    if (nome.length > 1 && email.length > 1) {
      this.setState({ btnDisabled: false });
    } else {
      this.setState({ btnDisabled: true });
    }
  }

  submitForm = (e) => {
    e.preventDefault();
    console.log(e);
    console.log(e.target);
    this.fetchToken();
  }

  fetchToken = async () => {
    const { history } = this.props;
    const URL = 'https://opentdb.com/api_token.php?command=request';
    try {
      const response = await fetch(URL);
      const data = await response.json();
      console.log(data);
      localStorage.setItem('token', data.token);
    } catch (e) {
      Error(console.log(e));
    }

    history.push('/game');
  }

  render() {
    const { nome, email, btnDisabled } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={ logo } className="App-logo" alt="logo" />
          <p>SUA VEZ</p>
        </header>
        <form onSubmit={ this.submitForm }>
          <input
            name="nome"
            value={ nome }
            onChange={ this.onHandle }
            data-testid="input-player-name"
            type="text"
            placeholder="Nome"
          />
          <br />
          <input
            name="email"
            value={ email }
            onChange={ this.onHandle }
            data-testid="input-gravatar-email"
            type="text"
            placeholder="Email"
          />
          <br />
          <button
            type="submit"
            data-testid="btn-play"
            disabled={ btnDisabled }
          >
            Play
          </button>
        </form>
        <Link to="/settings" data-testid="btn-settings">Configurações</Link>
      </div>

    );
  }
}

Login.propTypes = {
  history: PropTypes.func.isRequired,
};

export default Login;
