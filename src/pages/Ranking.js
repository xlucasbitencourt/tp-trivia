import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Ranking extends Component {
  state = {
    ranking: [],
  }

  componentDidMount() {
    const list = JSON.parse(localStorage.getItem('ranking'));
    const sortList = list.sort((a, b) => b.score - a.score);
    this.setState({ ranking: sortList });
  }

  render() {
    const { ranking } = this.state;
    return (
      <div className="ranking">
        <p data-testid="ranking-title">Ranking</p>
        {
          ranking.map((player, index) => (
            <div className="player" key={ index }>
              <span data-testid={ `player-name-${index}` }>{player.name}</span>
              <span data-testid={ `player-score-${index}` }>{player.score}</span>
            </div>
          ))
        }
        <br />
        <Link to="/" data-testid="btn-go-home" className="play-again">Play Again</Link>
      </div>
    );
  }
}
export default Ranking;
