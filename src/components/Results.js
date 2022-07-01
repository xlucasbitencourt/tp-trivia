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
    const { assertions, score } = this.props;
    return (
      <div className="results">
        <p data-testid="feedback-text">{this.message()}</p>
        <p data-testid="feedback-total-score">{score}</p>
        <p data-testid="feedback-total-question">{assertions}</p>
        <Link to="/ranking" data-testid="btn-ranking">Ranking</Link>
        <Link to="/" data-testid="btn-play-again">Play Again</Link>
      </div>
    );
  }
}

const mapStateToProps = ({ player }) => ({
  assertions: player.assertions,
  score: player.score,
});

// const mapDispatchToProps = {}

Results.propTypes = {
  assertions: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(Results);
