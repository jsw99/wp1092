import React, { Component } from "react";

class TodoItem extends Component {
	constructor(props) {
		super(props);
	}

	delete = (Key) => {this.props.delete(Key)}
	checkComplete = (Key) => {this.props.checkComplete(Key)}

	render() {
		return (
			<li className="todo-app__item">
				<div className="todo-app__checkbox">
					<input id={this.props.Key} type='checkbox' onClick={()=>this.checkComplete(this.props.Key)} defaultChecked = {this.props.completed? true:false}/>
					<label htmlFor={this.props.Key}/>
				</div>
				<h1 className="todo-app__item-detail"  style = {{textDecoration:this.props.completed? "line-through":"", opacity:this.props.completed? 0.5:1}} >{this.props.text}</h1>
				<img src="./img/x.png" className="todo-app__item-x" onClick={()=>this.delete(this.props.Key)}/>
			</li>
		);
	}

}

export default TodoItem;