import React, { Component } from 'react';

class Input extends Component {
  render(){
    let curr = new Date();
    let date = curr.toISOString().substr(0, 10);
    let time = curr.toTimeString().substr(0, 5);
    //default value 부분 개선 방법
    return (
      <div>
        <input type="date" defaultValue={date}/>
        <input type="time" defaultValue={time}/>
        <input />
      </div>
    );
  }
}
export default Input;