import React, { Component } from 'react'

import AddTodo from './AddTodo'
import Todos from './Todos'

class AppTodo extends Component {
  
  state = {
    todos: [
      {id: 1, content: 'Wash dishes'},
      {id: 2, content: 'Do Laundry'},
    ]
  }
  
  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos
    });
  }

  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos: todos
    })
  }
  
  render() {
    return(
      <div className="App">
        <div className="todo-app container">
          <h1 className="center blue-text">Todo's</h1>
          <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
          <AddTodo addTodo={this.addTodo} />
        </div>
      </div>
    )
  }
}
export default AppTodo;