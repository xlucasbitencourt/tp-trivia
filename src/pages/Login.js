import React, { Component } from 'react';

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
  }

  render() {
    const { nome, email, btnDisabled } = this.state;
    return (
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
    );
  }
}

export default Login;
