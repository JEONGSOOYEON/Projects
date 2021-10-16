import Title from './components/Title'
import Input from './components/Input'
import React, { Component } from 'react';

class ToDo extends Component {
  handleClick(e) {
    e.preventDefault();
  }
  render(){
    return (
      <div className="Reminder">
        <Title title="Reminder"></Title>
        {/* <Subject />와 동일 */}
        <Input />
        {/*<input type="date"></input>
        <input type="time"></input>
        <input type="text"></input>*/}
        <button onClick={this.handleClick}>Submit</button>
      </div>      
    );
  }
}
export default ToDo;
