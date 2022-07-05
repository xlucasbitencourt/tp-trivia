import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Ranking extends Component {
  render() {
    const { history } = this.props;
    return (
      <>
        <p data-testid="ranking-title">Ranking</p>
        <button
          data-testid="btn-go-home"
          type="button"
          value="back"
          onClick={ () => history.push('/') }
        >
          Home
        </button>

      </>
    );
  }
}

Ranking.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default Ranking;
