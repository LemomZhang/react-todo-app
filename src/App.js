import React, { Component } from 'react';
// import logo from './logo.svg';
import Todo from './components/todo';
import Todos from './components/todos';
import AddTodo from './components/addTodo';
import ClearTodo from './components/clearTodo';
import { Empty } from 'antd';
import { BackTop } from 'antd';
import { Row, Col } from 'antd';
import './App.css';
class App extends Component {
	state = {
		todos: JSON.parse(localStorage.getItem('todos')) || []
	};
	// 封装保存todo方法
	saveTodo = todos => {
		localStorage.setItem('todos', JSON.stringify(todos));
	};
	//  更新todo内容
	handleEdit = todo => {
		const index = this.state.todos.indexOf(todo);
		const todos = [...this.state.todos];
		todos[index].content = todo.content;
		this.setState({
			todos
		});
		this.saveTodo(todos);
	};
	// 新增一个todo
	handleAddTodo = todo => {
		const todos = [...this.state.todos];
		todos.unshift(todo);
		this.setState({
			todos
		});
		this.saveTodo(todos);
	};
	// 删除一个todo
	handleDelete = todo => {
		const index = this.state.todos.indexOf(todo);
		const todos = [...this.state.todos];
		todos.splice(index, 1);
		this.setState({
			todos
		});
		this.saveTodo(todos);
	};
	// 清除所有todo
	handleClearTodo = () => {
		localStorage.removeItem('todos');
		this.setState({
			todos: []
		});
	};
	// 改变todo的完成状态
	handleUpdate = todo => {
		const index = this.state.todos.indexOf(todo);
		const todos = [...this.state.todos];
		todos[index].finish = todo.finish;
		this.setState({
			todos
		});
		this.saveTodo(todos);
	};
	// 返回所有todo
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
	// 返回已完成的todo
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
	// 返回未完成的todo
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
				<Row gutter={16} justify="center">
					<Col>
						<AddTodo onAddTodo={this.handleAddTodo} />
					</Col>
					<Col>
						<ClearTodo onClearTodo={this.handleClearTodo} />
					</Col>
				</Row>
				<Todos
					allTodos={this.allTodos}
					finished={this.finished}
					unfinished={this.unfinished}
					todos={this.state.todos}
				/>
				{/* 回到顶部 */}
				<BackTop visibilityHeight />
			</div>
		);
	}
}

export default App;
