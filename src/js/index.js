import React from "react";
import ReactDOM from "react-dom";

import "../styles/index.scss";

import Home from "./views/home";

//const Todos = ({ todos, deleteTodo }) => {
//const todosList = todos.length ? (
//	todos.map(todo => {
//		return (
//			<div className="list-item" key={todo.id}>
//				<span
//					onClick={() => {
//						deleteTodo(todo.id);
//					}}>
//					{todos.content}
//				</span>
//			</div>
//		);
//	})
//) : (
//	<p className="center">You have nothing to do today.</p>
//);
//	return <div className="todo list">{Todos}</div>;
//};

//export default Todos;
ReactDOM.render(<Home />, document.getElementById("Home"));
