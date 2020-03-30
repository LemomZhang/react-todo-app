import React, { Component } from 'react';

import { Modal, Button } from 'antd';
import { Input } from 'antd';
import { message } from 'antd';
class AddTodo extends Component {
	state = { visible: false };
	showModal = () => {
		this.setState({
			visible: true
		});
	};

	handleOk = e => {
		const { value } = this.refs.inputV.state;

		const todo = {
			id: new Date().getTime(),
			content: value,
			date: new Date().toLocaleString(),
			finish: false
		};
		this.setState({
			visible: false
		});
		message.success('新增成功！');
		this.props.onAddTodo(todo);
	};

	handleCancel = e => {
		console.log('用户已取消新增任务');
		this.setState({
			visible: false
		});
	};

	render() {
		return (
			<div style={{ marginTop: 30 }}>
				<Button type="primary" onClick={this.showModal}>
					新增任务
				</Button>

				<Modal
					title="新增任务"
					visible={this.state.visible}
					onOk={this.handleOk}
					onCancel={this.handleCancel}
					cancelText="取消"
					okText="确定"
				>
					<Input placeholder="在此输入需要完成的任务" ref="inputV" />
				</Modal>
			</div>
		);
	}
}

export default AddTodo;
