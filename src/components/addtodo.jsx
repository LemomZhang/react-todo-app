import React, { Component } from 'react';
import { Modal, Button } from 'antd';
import { Input } from 'antd';
import { message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
class AddTodo extends Component {
	state = { visible: false };
	showModal = () => {
		this.setState({
			// 控制弹窗开关
			visible: true
		});
	};
	// 当用户点击确定所要做的事
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
	// 当用户点击取消所要做的事
	handleCancel = e => {
		console.log('用户已取消新增任务');
		this.setState({
			visible: false
		});
	};

	render() {
		return (
			<div style={{ marginTop: 30 }}>
				<Button
					type="primary"
					onClick={this.showModal}
					icon={<PlusOutlined />}
				>
					新增任务
				</Button>
				{/* 弹框 */}
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
