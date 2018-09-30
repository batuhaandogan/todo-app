import React, { Component } from 'react';
import './App.css';

class App extends Component {

constructor(props) {
super(props)
this.state = {
   message: 'Hello Ironhack',
   newTodo: "",
   todos: "",
   
 }
}

newTodoChanged = (event) => {
  // console.log(event.target.value)
  this.setState({
    newTodo: event.target.value,
  })
}

formSubmitted = (event) => {
  event.preventDefault();
  // console.log(this.state.newTodo);
  this.setState({
    todos: [...this.state.todos, {
      title: this.setState.newTodo,
      done: false,
    }]
  })
}

  render() {
    return (
      <div className="App"> 
      <h1>{this.state.message}</h1>

        <form onSubmit={this.formSubmitted.bind(this)}>
             <label htmlFor="newTodo">New Todo</label>
             <input onChange={(event)=> this.newTodoChanged(event)} name="newTodo"  id="newTodo"/>
             <button type="submit">Add todo</button>
        </form>

      </div>
    );
  }
}

export default App;
