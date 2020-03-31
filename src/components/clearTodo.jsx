import React, { Component } from 'react';
import { Modal, Button } from 'antd';
import { message } from 'antd';
import { DeleteOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
const { confirm } = Modal;
class ClearTodo extends Component {
	state = { visible: false };
	showModal = () => {
		this.setState({
			// 控制弹窗开关
			visible: true
		});
	};
	showDeleteConfirm = props => {
		confirm({
			title: `确定要清除所有任务吗？`,
			icon: <ExclamationCircleOutlined />,
			content: '',
			okText: '确定',
			okType: 'danger',
			cancelText: '取消',
			onOk() {
				props.onClearTodo();
				message.success('已成功删除！');
			},
			onCancel() {
				console.log('用户已取消删除');
			}
		});
	};

	render() {
		return (
			<div style={{ marginTop: 30 }}>
				<Button
					type="primary"
					danger
					onClick={() => this.showDeleteConfirm(this.props)}
					icon={<DeleteOutlined />}
				>
					清空所有
				</Button>
			</div>
		);
	}
}

export default ClearTodo;
