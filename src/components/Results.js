import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Results extends Component {
  message = () => {
    const { assertions } = this.props;
    const good = 3;
    if (assertions < good) return 'Could be better...';
    return 'Well Done!';
  }

  render() {
    const { assertions, score, history } = this.props;
    return (
      <div className="results">
        <p data-testid="feedback-text">{this.message()}</p>
        <span>Score: </span>
        <span data-testid="feedback-total-score">{score}</span>
        <br />
        <span>Assertions: </span>
        <span data-testid="feedback-total-question">{assertions}</span>
        <br />
        <Link
          className="button-feedback"
          to="/ranking"
          data-testid="btn-ranking"
        >
          Ranking
        </Link>
        <br />
        <button
          className="button-login play-again"
          onClick={ () => history.push('/') }
          type="button"
          data-testid="btn-play-again"
        >
          Play Again
        </button>
      </div>
    );
  }
}

const mapStateToProps = ({ player }) => ({
  assertions: player.assertions,
  score: player.score,
});

Results.propTypes = {
  assertions: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps)(Results);
