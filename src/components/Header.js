import React, { Component } from 'react';
import PropTypes from 'prop-types';
import md5 from 'crypto-js/md5';
import { connect } from 'react-redux';

class Header extends Component {
  state = {
    emailString: '',
  }

  componentDidMount() {
    const { email } = this.props;
    const emailString = md5(email).toString();
    this.setState({ emailString });
  }

  render() {
    const { emailString } = this.state;
    const { name, score } = this.props;
    const gravatar = 'https://www.gravatar.com/avatar/';
    return (
      <header className="game-header">
        <img
          src={ `${gravatar}${emailString}` }
          alt="imagem jogador"
          data-testid="header-profile-picture"
        />
        <span data-testid="header-player-name">{name}</span>
        <span data-testid="header-score">{score}</span>
      </header>
    );
  }
}

const mapStateToProps = ({ player }) => ({
  name: player.name,
  // assertions: player.assertions,
  score: player.score,
  email: player.gravatarEmail,
});

Header.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(Header);
