import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Question from '../components/Question';
import { getAssertion, getScore } from '../actions';
import Header from '../components/Header';

class Game extends Component {
  state = {
    questions: [],
    category: '',
    correctAnswer: '',
    difficulty: '', // easy, medium or hard
    answers: [],
    question: '',
    index: 0,
    answered: false,
    timer: 30,
    next: false,
  };

  componentDidMount() {
    this.getQuestions();
    this.counter();
  }

  componentDidUpdate() {
    const { timer } = this.state;
    if (timer === 0) this.timesUp();
  }

  counter = () => {
    const milliseconds = 1000;

    this.timeLeft = setInterval(() => {
      this.setState((prev) => ({ timer: prev.timer - 1 }));
    }, milliseconds);
  };

  getQuestions = async () => {
    const token = localStorage.getItem('token');
    const numQuestions = 5;
    const url = `https://opentdb.com/api.php?amount=${numQuestions}&token=${token}`;
    const response = await fetch(url);
    const questions = await response.json();
    this.getTrivia(questions);
  };

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
        difficulty: results[0].difficulty,
        answers: results[0].incorrect_answers
          .concat(results[0].correct_answer)
          .sort(() => Math.random() - rng),
        question: results[0].question,
        index: 0,
      });
    }
  };

  answer = ({ target }) => {
    const correct = target.dataset.testid;
    if (correct === 'correct-answer') this.setScore();

    clearInterval(this.timeLeft);
    this.setState({
      timer: 30,
      answered: true,
      next: true,
    });
  };

  timesUp = () => {
    clearInterval(this.timeLeft);
    this.setState({
      timer: 30,
      answered: true,
      next: true,
    });
  };

  nextQuestion = () => {
    const { questions, index } = this.state;
    const { history } = this.props;
    const maxQuestions = 4;
    const next = index + 1;
    if (index === maxQuestions) history.push('/feedback');
    else {
      this.setState({
        category: questions[next].category,
        correctAnswer: questions[next].correct_answer,
        answers: questions[next].incorrect_answers.concat(questions[next].correct_answer),
        question: questions[next].question,
        index: next,
        answered: false,
        next: false,
      });
      this.counter();
    }
  };

  setScore = () => {
    const { timer, difficulty } = this.state;
    const { dispatch, score, assertions } = this.props;
    const easy = 1;
    const medium = 2;
    const hard = 3;
    const base = 10;
    let diff = 0;
    switch (difficulty) {
    case 'easy':
      diff = easy;
      break;
    case 'medium':
      diff = medium;
      break;
    case 'hard':
      diff = hard;
      break;
    default:
      diff = 0;
    }
    const total = score + (base + timer * diff);
    const assertion = assertions + 1;
    dispatch(getScore(total));
    dispatch(getAssertion(assertion));
  };

  render() {
    const {
      category,
      correctAnswer,
      answers,
      question,
      answered,
      next,
      index,
      timer } = this.state;

    const maxQuestions = 4;
    return (
      <>
        <Header />
        <div className="container">
          <Question
            category={ category }
            correctAnswer={ correctAnswer }
            answers={ answers }
            question={ question }
            nextQuestion={ this.nextQuestion }
            answerF={ this.answer }
            answered={ answered }
          />
          {
            next && (
              <button
                className="next"
                type="button"
                data-testid="btn-next"
                onClick={ this.nextQuestion }
              >
                {index === maxQuestions ? 'Feedback' : 'Next'}
              </button>
            )
          }
          <p className="timer">{timer}</p>
        </div>
      </>
    );
  }
}

const mapStateToProps = ({ player }) => ({
  name: player.name,
  assertions: player.assertions,
  score: player.score,
  email: player.gravatarEmail,
});

Game.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  score: PropTypes.number.isRequired,
  assertions: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(Game);
