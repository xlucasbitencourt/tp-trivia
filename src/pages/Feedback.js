import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getReset } from '../actions';
import Header from '../components/Header';
import Results from '../components/Results';

class Feedback extends Component {
  componentDidMount() {
    if (!localStorage.getItem('ranking')) this.firstPlay();
    else this.otherPlay();
  }

  componentWillUnmount() {
    const { dispatch } = this.props;
    dispatch(getReset());
  }

  firstPlay = () => {
    const { name, score } = this.props;
    const ranking = [{
      name,
      score,
    }];
    localStorage.setItem('ranking', JSON.stringify(ranking));
  }

  otherPlay = () => {
    const { name, score } = this.props;
    const players = JSON.parse(localStorage.getItem('ranking'));
    const newPlayer = {
      name,
      score,
    };
    const newList = [...players, newPlayer];
    localStorage.setItem('ranking', JSON.stringify(newList));
  }

  render() {
    const { history } = this.props;
    return (
      <div data-testid="feedback-text">
        <Header />
        <Results history={ history } />
      </div>
    );
  }
}

const mapStateToProps = ({ player }) => ({
  name: player.name,
  score: player.score,
  // email: player.gravatarEmail,
});

Feedback.propTypes = {
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps)(Feedback);
