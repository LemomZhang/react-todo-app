import React, { Component } from 'react';
// import logo from './logo.svg';
import Todo from './components/todo';
import Todos from './components/todos';
import AddTodo from './components/addtodo';

import { Empty } from 'antd';
import { BackTop } from 'antd';
import './App.css';
class App extends Component {
	state = {
		todos: JSON.parse(localStorage.getItem('todos')) || []
	};
	saveTodo = todos => {
		localStorage.setItem('todos', JSON.stringify(todos));
	};
	handleEdit = todo => {
		const index = this.state.todos.indexOf(todo);
		const todos = [...this.state.todos];
		todos[index].content = todo.content;
		this.setState({
			todos
		});
		this.saveTodo(todos);
	};

	handleAddTodo = todo => {
		const todos = [...this.state.todos];
		todos.push(todo);
		this.setState({
			todos
		});
		this.saveTodo(todos);
	};
	handleDelete = todo => {
		const index = this.state.todos.indexOf(todo);
		const todos = [...this.state.todos];
		todos.splice(index, 1);
		this.setState({
			todos
		});
		this.saveTodo(todos);
	};
	handleUpdate = todo => {
		const index = this.state.todos.indexOf(todo);
		const todos = [...this.state.todos];
		todos[index].finish = todo.finish;
		this.setState({
			todos
		});
		this.saveTodo(todos);
	};
	allTodos = () => {
		if (!this.state.todos.length) {
			return (
				<Empty
					description="无数据，请添加"
					image={Empty.PRESENTED_IMAGE_SIMPLE}
				/>
			);
		}
		return this.state.todos.map(todo => (
			<Todo
				onEdit={this.handleEdit}
				onUpdate={this.handleUpdate}
				onDelete={this.handleDelete}
				key={todo.id}
				todo={todo}
			/>
		));
	};
	finished = () => {
		const todos = this.state.todos.filter(todo => todo.finish === true);
		if (!todos.length) {
			return (
				<Empty
					description="暂无已完成的任务"
					image={Empty.PRESENTED_IMAGE_SIMPLE}
				/>
			);
		}
		return todos.map(todo => (
			<Todo
				onEdit={this.handleEdit}
				onUpdate={this.handleUpdate}
				onDelete={this.handleDelete}
				key={todo.id}
				todo={todo}
			/>
		));
	};
	unfinished = () => {
		const todos = this.state.todos.filter(todo => todo.finish === false);
		if (!todos.length) {
			return (
				<Empty
					description="暂无未完成的任务"
					image={Empty.PRESENTED_IMAGE_SIMPLE}
				/>
			);
		}
		return todos.map(todo => (
			<Todo
				onEdit={this.handleEdit}
				onUpdate={this.handleUpdate}
				onDelete={this.handleDelete}
				key={todo.id}
				todo={todo}
			/>
		));
	};
	render() {
		return (
			<div className="App">
				<AddTodo onAddTodo={this.handleAddTodo} />
				<Todos
					allTodos={this.allTodos}
					finished={this.finished}
					unfinished={this.unfinished}
					todos={this.state.todos}
				/>
				<BackTop visibilityHeight />
			</div>
		);
	}
}

export default App;
