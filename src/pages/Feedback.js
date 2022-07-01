import React, { Component } from 'react';
import Header from '../components/Header';

class Feedback extends Component {
  // state = {  }
  render() {
    return (
      <div data-testid="feedback-text">
        <Header />
        <h1>Feedback</h1>
      </div>
    );
  }
}

export default Feedback;
