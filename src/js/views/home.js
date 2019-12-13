import React, { Component } from "react";
import "../../styles/home.scss";
import AddTodo from ".views/form";;

class Home extends Component {
	state = {
		todos: [{ id: 1, content: "Wake up by 5:30am" }, { id: 2, content: "Get ready for work by 6:30am" }]
	};

	deleteTodo = id => {
		const todos = this.state.todos.filter(todo => {
			return todo.id !== id;
		});
		this.setState({
			todos
		});
	};
	addTodo = todo
		todo.id = Math.random();
		let todos = [...this.state.todos, todo];
		this.setState({
			todos
		});
	};

	render() {
		return (
			<div className="home container">
				<h1 className="center purple-text">What To Do Today?</h1>
				<Todo todos={this.state.todos} deleteTodo={this.deleteTodo} />
				<AddTodo addTodo={this.addTodo} />
			</div>
		);
	}
}

export default Home;
