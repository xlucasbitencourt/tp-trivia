import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Question extends Component {
  render() {
    const { category, correctAnswer, answers, question, nextQuestion } = this.props;
    return (
      <div>
        <h1 data-testid="question-category">{category}</h1>
        <h2 data-testid="question-text">{question}</h2>
        <div data-testid="answer-options">
          {answers.map((answer, index) => (
            answer !== correctAnswer ? (
              <button
                key={ answer }
                type="button"
                data-testid={ `wrong-answer-${index}` }
                onClick={ nextQuestion }
              >
                {answer}
              </button>
            ) : (
              <button
                key={ answer }
                type="button"
                data-testid="correct-answer"
                onClick={ nextQuestion }
              >
                {answer}
              </button>
            )
          ))}
        </div>
      </div>
    );
  }
}

Question.propTypes = {
  category: PropTypes.string.isRequired,
  correctAnswer: PropTypes.string.isRequired,
  answers: PropTypes.instanceOf(Array).isRequired,
  question: PropTypes.string.isRequired,
  nextQuestion: PropTypes.func.isRequired,
};

export default Question;
