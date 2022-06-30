import React, { Component } from 'react';
import PropTypes from 'prop-types';
import md5 from 'crypto-js/md5';
import { connect } from 'react-redux';
import Question from '../components/Question';

class Game extends Component {
  state = {
    emailString: '',
    questions: [],
    category: '',
    correctAnswer: '',
    answers: [],
    question: '',
    index: 0,
  }

  componentDidMount() {
    const { email } = this.props;
    const emailString = md5(email).toString();
    this.setState({ emailString });
    this.getQuestions();
  }

  getQuestions = async () => {
    // const { token } = this.props;
    const token = localStorage.getItem('token');
    const numQuestions = 5;
    const url = `https://opentdb.com/api.php?amount=${numQuestions}&token=${token}`;
    const response = await fetch(url);
    const questions = await response.json();
    console.log(questions);
    this.getTrivia(questions);
  }

  getTrivia = ({ results, response_code: response }) => {
    const { history } = this.props;
    const ERROR_CODE = 3;
    if (response === ERROR_CODE) {
      localStorage.setItem('token', '');
      history.push('/');
    } else {
      this.setState({
        questions: results,
        category: results[0].category,
        correctAnswer: results[0].correct_answer,
        answers: results[0].incorrect_answers.concat(results[0].correct_answer),
        question: results[0].question,
        index: 0,
      });
    }
  }

  nextQuestion = () => {
    const { questions, index } = this.state;
    const next = index + 1;
    this.setState({
      category: questions[next].category,
      correctAnswer: questions[next].correct_answer,
      answers: questions[next].incorrect_answers.concat(questions[next].correct_answer),
      question: questions[next].question,
      index: next,
    });
  }

  render() {
    const {
      emailString,
      category,
      correctAnswer,
      answers,
      question } = this.state;

    const { name } = this.props;
    const gravatar = 'https://www.gravatar.com/avatar/';
    const rng = 0.5;
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
          <Question
            category={ category }
            correctAnswer={ correctAnswer }
            answers={ answers.sort(() => Math.random() - rng) }
            question={ question }
            nextQuestion={ this.nextQuestion }
          />
        </main>
      </>

    );
  }
}

const mapStateToProps = (state) => ({
  name: state.triviaReducer.name,
  email: state.triviaReducer.email,
  // token: state.triviaReducer.token,
});

// const mapDispatchToProps = {}

Game.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  // token: PropTypes.string.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
export default connect(mapStateToProps)(Game);
