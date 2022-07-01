import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Ranking extends Component {
  // state = {  }
  render() {
    return (
      <div className="ranking">
        <p data-testid="ranking-title">Ranking</p>
        <Link to="/" data-testid="btn-go-home">Play Again</Link>
      </div>
    );
  }
}
export default Ranking;
