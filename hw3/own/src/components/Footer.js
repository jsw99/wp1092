import React, { Component } from "react";
import Left from "./Left";

class Footer extends Component {

    constructor(props) {
        super(props);
        this.clear = this.clear.bind(this);
        this.displayStateChange = this.displayStateChange.bind(this);
    }

    displayStateChange(dispalyState) {
        this.props.callback(dispalyState);
    }

    clear() {
        this.props.clearCallback(0);
    }

    render() {
        if (this.props.numOfThing === 0) {
            return null;
        } else {
            return (
                <footer className="todo-app__footer" id="todo-footer">
                    <Left remainNum={this.props.remain} />
                    <ul className="todo-app__view-buttons">
                        <button onClick={() => this.displayStateChange("all")}>All</button>
                        <button onClick={() => this.displayStateChange("active")}>Active</button>
                        <button onClick={() => this.displayStateChange("completed")}>Completed</button>
                    </ul>
                    <div className="todo-app__clean">
                        <button onClick={this.clear}>Clear completed</button>
                    </div>
                    
                </footer>
            );
        }    
    }
}

export default Footer;