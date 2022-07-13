import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Question extends Component {
  render() {
    const { category, correctAnswer, answers, question, answerF, answered } = this.props;
    return (
      <main className="question">
        <h1 data-testid="question-category">
          {category
            .replace(/&#039;/g, '\'')
            .replace(/&quot;/g, '"')
            .replace(/&amp;/g, '&')
            .replace(/&deg/g, '°')
            .replace(/&rsquo;/g, '´')
            .replace(/&uuml;/g, 'ü')
            .replace(/&eacute;/g, 'é')}
        </h1>
        <h2 data-testid="question-text">
          {question
            .replace(/&#039;/g, '\'')
            .replace(/&quot;/g, '"')
            .replace(/&amp/g, '&')
            .replace(/&deg/g, '°')
            .replace(/&rsquo;/g, '´')
            .replace(/&uuml;/g, 'ü')
            .replace(/&eacute;/g, 'é')}
        </h2>
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
                {answer
                  .replace(/&#039;/g, '\'')
                  .replace(/&quot;/g, '"')
                  .replace(/&amp/g, '&')
                  .replace(/&deg/g, '°')
                  .replace(/&rsquo;/g, '´')
                  .replace(/&uuml;/g, 'ü')
                  .replace(/&eacute;/g, 'é')}
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
                {answer
                  .replace(/&#039;/g, '\'')
                  .replace(/&quot;/g, '"')
                  .replace(/&amp/g, '&')
                  .replace(/&deg/g, '°')
                  .replace(/&rsquo;/g, '´')
                  .replace(/&uuml;/g, 'ü')
                  .replace(/&eacute;/g, 'é')}
              </button>
            )
          )) }
        </div>
      </main>
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
