import React, { Component } from "react";

class Input extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
        this.handleInput = this.handleInput.bind(this);
        this.enterCheck = this.enterCheck.bind(this);
    }

    handleInput(e) {
        this.setState({ value: e.target.value });
        
    }

    enterCheck(e) {
        if (e.keyCode === 13 && this.state.value !== '') {
            this.props.callback(this.state.value);
            this.setState({ value: '' });
            
        }
    }

    render() {
        return (
            <input className="todo-app__input" placeholder="What needs to be done?"
                onKeyDown={this.enterCheck} onChange={this.handleInput}
                value={this.state.value}
            />
        );
    }
}

export default Input;