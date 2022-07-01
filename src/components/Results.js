import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Results extends Component {
  message = () => {
    const { assertions } = this.props;
    const good = 3;
    if (assertions < good) return 'Could be better...';
    return 'Well Done!';
  }

  render() {
    return (
      <p data-testid="feedback-text">{this.message()}</p>
    );
  }
}

const mapStateToProps = ({ player }) => ({
  assertions: player.assertions,
});

// const mapDispatchToProps = {}

Results.propTypes = {
  assertions: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(Results);
