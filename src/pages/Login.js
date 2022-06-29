import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getToken } from '../actions';
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
    this.funcFetch();
  }

  funcFetch = async () => {
    const urlToken = 'https://opentdb.com/api_token.php?command=request';
    try {
      const response = await fetch(urlToken);
      const data = await response.json();
      console.log(data.token);
      const { dispatch, history } = this.props;
      dispatch(getToken(data.token));
      localStorage.setItem('token', data.token);
      history.push('/game');
    } catch (error) {
      console.error(error);
    }
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
      </div>
    );
  }
}

export default connect()(Login);
