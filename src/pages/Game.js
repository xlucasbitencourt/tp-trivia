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
    answered: false,
    timer: 30,
  }

  componentDidMount() {
    const milliseconds = 1000;
    const { email } = this.props;
    const emailString = md5(email).toString();

    this.timeLeft = setInterval(() => {
      this.setState((prev) => ({ timer: prev.timer - 1 }));
    }, milliseconds);

    this.setState({ emailString });
    this.getQuestions();
  }

  componentDidUpdate() {
    const { timer } = this.state;
    if (timer === 0) this.timesUp();
  }

  getQuestions = async () => {
    const token = localStorage.getItem('token');
    const numQuestions = 5;
    const url = `https://opentdb.com/api.php?amount=${numQuestions}&token=${token}`;
    const response = await fetch(url);
    const questions = await response.json();
    this.getTrivia(questions);
  }

  getTrivia = ({ results, response_code: response }) => {
    const { history } = this.props;
    const rng = 0.5;
    const ERROR_CODE = 3;
    if (response === ERROR_CODE) {
      localStorage.setItem('token', '');
      history.push('/');
    } else {
      this.setState({
        questions: results,
        category: results[0].category,
        correctAnswer: results[0].correct_answer,
        answers: results[0].incorrect_answers.concat(results[0].correct_answer)
          .sort(() => Math.random() - rng),
        question: results[0].question,
        index: 0,
      });
    }
  }

  answer = () => {
    const timeToWait = 1000;
    clearInterval(this.timeLeft);
    this.setState({
      timer: 30,
      answered: true,
    });

    setTimeout(this.nextQuestion, timeToWait);
  }

  timesUp = () => {
    clearInterval(this.timeLeft);
    this.setState({
      timer: 30,
      answered: true,
    });
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
      answered: false,
    });
  }

  render() {
    const {
      emailString,
      category,
      correctAnswer,
      answers,
      question,
      answered,
      timer } = this.state;

    const { name, score } = this.props;
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
          <span data-testid="header-score">{score}</span>
        </header>
        <main>
          <Question
            category={ category }
            correctAnswer={ correctAnswer }
            answers={ answers }
            question={ question }
            nextQuestion={ this.nextQuestion }
            answerF={ this.answer }
            answered={ answered }
            timer={ timer }
          />
        </main>
      </>

    );
  }
}

const mapStateToProps = ({ player }) => ({
  name: player.name,
  email: player.gravatarEmail,
  score: player.score,
});

Game.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  score: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(Game);
