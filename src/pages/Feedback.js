import React, { Component } from 'react';
import Header from '../components/Header';
import Results from '../components/Results';

class Feedback extends Component {
  // state = {  }
  render() {
    return (
      <div data-testid="feedback-text">
        <Header />
        <Results />
      </div>
    );
  }
}

export default Feedback;
