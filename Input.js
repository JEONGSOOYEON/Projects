import React, { Component } from 'react';

class Input extends Component {
  render(){
    return (
      <div>
        <input type="date"/>
        <input type="time" />
        <input />
        <input type="button" value="Submit" />
      </div>
    );
  }
}
export default Input;