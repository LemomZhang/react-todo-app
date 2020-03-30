import React, { Component } from 'react';
import { Card } from 'antd';
import { EditTwoTone, DeleteTwoTone } from '@ant-design/icons';
import { Switch } from 'antd';
import { Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { message } from 'antd';
const { confirm } = Modal;
class Todo extends Component {
	state = { visible: false };

	showModal = () => {
		this.setState({
			visible: true
		});
	};
	showDeleteConfirm = props => {
		confirm({
			title: `你确定要删除此任务吗？(${props.todo.content})`,
			icon: <ExclamationCircleOutlined />,
			content: '',
			okText: '确定',
			okType: 'danger',
			cancelText: '取消',
			onOk() {
				props.onDelete(props.todo);
			},
			onCancel() {
				console.log('用户已取消删除');
			}
		});
	};
	handleOk = e => {
		const todo = this.props.todo;
		const { value } = this.refs.inputV.state;
		todo.content = value;
		this.setState({
			visible: false
		});
		this.props.onEdit(todo);
	};

	handleCancel = e => {
		this.setState({
			visible: false
		});
	};
	formatSwitch = () => {
		return this.props.todo.finish === false ? false : true;
	};
	handleSwitch = checked => {
		const todo = this.props.todo;
		todo.finish = checked;
		this.props.onUpdate(todo);
	};

	render() {
		return (
			<div style={{}}>
				<Card
					hoverable="true"
					style={{ width: 300, marginTop: 16, marginBottom: 10 }}
					actions={[
						<EditTwoTone
							onClick={() => this.showModal()}
							key="edit"
						/>,
						<DeleteTwoTone
							onClick={() => this.showDeleteConfirm(this.props)}
							key="delete"
						/>
					]}
				>
					<p>{this.props.todo.content}</p>
					<Switch
						onClick={this.handleSwitch}
						checkedChildren="完成"
						unCheckedChildren="未完成"
						checked={this.formatSwitch()}
					/>

					<p>{this.props.todo.date}</p>
					<Modal
						title="更新任务"
						visible={this.state.visible}
						onOk={this.handleOk}
						onCancel={this.handleCancel}
						cancelText="取消"
						okText="确定"
					>
						<Input placeholder="在此更新任务内容" ref="inputV" />
					</Modal>
				</Card>
			</div>
		);
	}
}

export default Todo;
