import React, { Component } from 'react';
import Winner from './Winner';
import Vote from './Vote';

export default class Voting extends Component {
  getPair() {
    return this.props.pair || [];
  }
  isDisabled() {
    return !!this.props.hasVoted;
  }
  hasVotedFor(entry) {
    return this.props.hasVoted === entry;
  }
  render() {
    return (
      <div className='voting'>
        {
          this.props.winner ?
            <Winner ref='winner' winner={this.props.winner} /> :
            <Vote {...props} />
        }
      </div>
    );
  }
}
