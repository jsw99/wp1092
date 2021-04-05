import React, { Component } from "react";

class Left extends Component {
    render() {
        return (
            <div className="todo-app__total">{this.props.remainNum} Left</div>
        );
    }
}

export default Left;