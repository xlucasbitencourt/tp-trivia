import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Question extends Component {
  render() {
    const { category, correctAnswer, answers, question, answerF, answered } = this.props;
    return (
      <div className="question">
        <h1 data-testid="question-category">{category}</h1>
        <h2 data-testid="question-text">{question}</h2>
        <div data-testid="answer-options" className="question-options">
          {answers.map((answer, index) => (
            answer !== correctAnswer ? (
              <button
                key={ answer }
                type="button"
                data-testid={ `wrong-answer-${index}` }
                onClick={ answerF }
                className={ answered ? 'question-wrong' : undefined }
                disabled={ answered }
              >
                {answer}
              </button>
            ) : (
              <button
                key={ answer }
                type="button"
                data-testid="correct-answer"
                onClick={ answerF }
                className={ answered ? 'question-right' : undefined }
                disabled={ answered }
              >
                {answer}
              </button>
            )
          )) }
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
  answerF: PropTypes.func.isRequired,
  answered: PropTypes.bool.isRequired,
};

export default Question;
