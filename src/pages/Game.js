import React, { Component } from 'react';
import PropTypes from 'prop-types';
import md5 from 'crypto-js/md5';
import { connect } from 'react-redux';

class Game extends Component {
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
    const { name } = this.props;
    const gravatar = 'https://www.gravatar.com/avatar/';
    return (
      <header>
        <img
          src={ `${gravatar}${emailString}` }
          alt="imagem jogador"
          data-testid="header-profile-picture"
        />
        <p data-testid="header-player-name">{name}</p>
        <p data-testid="header-score">0</p>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  name: state.triviaReducer.name,
  email: state.triviaReducer.email,
});

// const mapDispatchToProps = {}

Game.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
export default connect(mapStateToProps)(Game);
