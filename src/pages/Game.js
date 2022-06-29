import React, { Component } from 'react';
import md5 from 'crypto-js/md5';

class Game extends Component {
  // state = {  }
  componentDidMount() {
    const email = md5('teste@teste.com').toString();
    console.log(email);
    console.log(this.props);
  }

  render() {
    return (
      <header>
        <img src="#" alt="imagem jogador" data-testid="header-profile-picture" />
        <p data-testid="header-player-name">Nome jogador</p>
        <p data-testid="header-score">0</p>
      </header>
    );
  }
}

export default Game;
