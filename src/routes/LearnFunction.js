import React, { Component } from 'react';

export default class LearnFunction extends Component {
  xlog = (x, y = 'World') => {
    console.log(x, y);
  };
  render() {
    return (
      <div>
        <div>{this.xlog('Hello')}</div>
        <div>{this.xlog('Hello', 'China')}</div>
        <div>{this.xlog('Hello', '')}</div>
      </div>
    );
  }
}
