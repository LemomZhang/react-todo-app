import React, { Component } from 'react';
import { Tabs } from 'antd';
import { Badge } from 'antd';
const { TabPane } = Tabs;
class Todos extends Component {
	renderTodos = () => {
		return (
			<div className="todos">
				<Tabs defaultActiveKey="1">
					<TabPane
						tab={
							<span>
								查看全部&nbsp;
								<Badge
									style={{ backgroundColor: '#2db7f5' }}
									count={this.props.allTodos().length}
								/>
							</span>
						}
						key="1"
					>
						<div className="todos-center">
							{this.props.allTodos()}
						</div>
					</TabPane>
					<TabPane
						tab={
							<span>
								已完成&nbsp;
								<Badge
									style={{
										backgroundColor: '#52c41a'
									}}
									count={this.props.finished().length}
								/>
							</span>
						}
						key="2"
					>
						<div className="todos-center">
							{this.props.finished()}
						</div>
					</TabPane>
					<TabPane
						tab={
							<span>
								未完成&nbsp;
								<Badge
									style={{
										backgroundColor: '#f50'
									}}
									count={this.props.unfinished().length}
								/>
							</span>
						}
						key="3"
					>
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
