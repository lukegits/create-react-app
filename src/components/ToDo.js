 import React, { Component } from 'react';
 import { Button } from 'react-native';


 class ToDo extends Component {
 render() {
    return (
      <li>
          <input type="checkbox" checked={ this.props.isCompleted } onChange={ this.props.toggleComplete } />
          <Button
            onClick={deleteTodo}
            title="Delete" 
            color="#841584"
          />
         <span>{ this.props.description }</span>
         <span>{ this.props.deleteTodo}</span>
       </li>
    );
  }
}
 export default ToDo;
