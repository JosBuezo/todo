import React, { Component } from "react";

import "../../styles/demo.scss";

//render your react application

const Todos = ({ todos, deleteTodo }) => {
	const todosList = todos.length ? (
		todos.map(todos => {
			return (
				<div className="list-item" key={todos.id}>
					<span
						onClick={() => {
							deleteTodo(todos.id);
						}}>
						{todos.content}
					</span>
				</div>
			);
		})
	) : (
		<p className="center">You have nothing to do today.</p>
	);
	return <div className="todo list">{Todos}</div>;
};

export default Todos;
