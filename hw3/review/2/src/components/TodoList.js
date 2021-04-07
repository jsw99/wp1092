import React, { Component } from "react";
import TodoItem from "./TodoItem.js";
 
class TodoList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let items = this.props.items;
        return (
            <ul className="todo-app__list" id="todo-list" hidden = {this.props.hide}>
                {items.map(e => {
                    return <TodoItem text = {e.text} Key = {e.key} key = {e.key} completed={e.completed} 
                    delete = {this.props.delete} checkComplete = {this.props.checkComplete}/>}) 
                }            
            </ul>
        );
    }
};
 
export default TodoList;