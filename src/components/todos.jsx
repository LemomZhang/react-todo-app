import React, { Component } from 'react';
import { Tabs } from 'antd';
const { TabPane } = Tabs;
class Todos extends Component {
	renderTodos = () => {
		return (
			<div className="todos">
				<Tabs defaultActiveKey="1">
					<TabPane tab="查看全部" key="1">
						<div className="todos-center">
							{this.props.allTodos()}
						</div>
					</TabPane>
					<TabPane tab="已完成" key="2">
						<div className="todos-center">
							{this.props.finished()}
						</div>
					</TabPane>
					<TabPane tab="未完成" key="3">
						<div className="todos-center">
							{this.props.unfinished()}
						</div>
					</TabPane>
				</Tabs>
			</div>
		);
	};
	render() {
		return <React.Fragment>{this.renderTodos()}</React.Fragment>;
	}
}

export default Todos;
