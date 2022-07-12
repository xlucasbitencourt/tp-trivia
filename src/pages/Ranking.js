import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Ranking extends Component {
  state = {
    ranking: [],
    first: false,
  }

  componentDidMount() {
    if (localStorage.getItem('ranking')) {
      const list = JSON.parse(localStorage.getItem('ranking'));
      const sortList = list.sort((a, b) => b.score - a.score);
      this.setState({
        ranking: sortList,
        first: false,
      });
    } else this.setState({ first: true });
  }

  render() {
    const { ranking, first } = this.state;
    const { history } = this.props;
    // if (first) return <p>Primeira vez</p>;
    return (
      <div className="ranking">
        <p data-testid="ranking-title">Ranking</p>
        {
          !first && (
            <div className="player-container">
              {
                ranking.map((player, index) => (
                  <div className="player" key={ index }>
                    <span data-testid={ `player-name-${index}` }>{player.name}</span>
                    <span data-testid={ `player-score-${index}` }>{player.score}</span>
                  </div>
                ))
              }
            </div>
          )
        }
        <br />
        <button
          className="button-login play-again"
          onClick={ () => history.push('/') }
          type="button"
          data-testid="btn-go-home"
        >
          Play Again
        </button>
      </div>
    );
  }
}

Ranking.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Ranking;
