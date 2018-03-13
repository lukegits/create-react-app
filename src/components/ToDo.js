 import React, { Component } from 'react';
 import { Button } from 'react-native';


 class ToDo extends Component {
 render() {
    return (
      <li>
          <input type="checkbox" checked={ this.props.isCompleted } onChange={ this.props.toggleComplete } />
          <input type="button" onClick= { this.props.deleteTodo } title="Delete" color="#841584"/>
        
       </li>
    );
  }
}
 export default ToDo;
