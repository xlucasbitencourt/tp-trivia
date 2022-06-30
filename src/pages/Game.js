import React, { Component } from 'react';
import PropTypes from 'prop-types';
import md5 from 'crypto-js/md5';
import { connect } from 'react-redux';

class Game extends Component {
  state = {
    emailString: '',
    questions: [],
  }

  componentDidMount() {
    const { email } = this.props;
    const emailString = md5(email).toString();
    this.setState({ emailString });
    this.getQuestions();
  }

  getQuestions = async () => {
    const { token } = this.props;
    const numQuestions = 5;
    const url = `https://opentdb.com/api.php?amount=${numQuestions}&token=${token}`;
    const response = await fetch(url);
    const questions = await response.json();
    console.log(questions.results);
    this.setState({ questions: questions.results });
  }

  render() {
    const { emailString, questions } = this.state;
    const { name } = this.props;
    const gravatar = 'https://www.gravatar.com/avatar/';
    return (
      <>
        <header className="game-header">
          <img
            src={ `${gravatar}${emailString}` }
            alt="imagem jogador"
            data-testid="header-profile-picture"
          />
          <span data-testid="header-player-name">{name}</span>
          <span data-testid="header-score">0</span>
        </header>
        <main>
          <h1>Categoria</h1>
        </main>
      </>

    );
  }
}

const mapStateToProps = (state) => ({
  name: state.triviaReducer.name,
  email: state.triviaReducer.email,
  token: state.triviaReducer.token,
});

// const mapDispatchToProps = {}

Game.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  token: PropTypes.string.isRequired,
};
export default connect(mapStateToProps)(Game);
