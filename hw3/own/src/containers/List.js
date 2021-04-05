import React, { Component } from "react";
import Items from "./Items";

class List extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {

        let e = this.props.inputArray.map(
            (x, index) => <Items thingToDo={x} key={index} remainControl={this.props.remainControl}
                numOfThingControl={this.props.numOfThingControl} Num={index}
                clearLength={this.props.clearLength} displayState={this.props.displayState}
                clearCompleted={this.props.clearCompleted}
                            />
        );
        
        return (
            <ul className="todo-app__list" id="todo-list">
                {e}
            </ul>
            );
    }
}

export default List;