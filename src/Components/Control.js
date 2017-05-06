import React from 'react';
import ReactDOM from 'react-dom';
import Heart from './Heart';

export default class Control extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beat: 1
    };
    this.handlePulse = this.handlePulse.bind(this);
  }

  handlePulse(value) {
    value = value == 0 ? 0 : (1 / value);
    this.setState({ beat: value });
  }

  render() {
    return (
      <div>
        <Heart beat={ this.state.beat } />
        <input type="range" max="10" min="0" step="1"
          value={ this.state.beat === 0 ? 0 : (1 / this.state.beat) }
          onChange={ (e) => {
            this.handlePulse(e.target.value);
          } } />
          <p><code>animation-duration: { this.state.beat }s</code></p>
      </div>
    );
  }
}
