import React, { Component } from "react";



const ALL = 0, ACTIVE = 1, COMPLETED = 2;
class Footer extends Component {
	constructor(props) {
		super(props);
	}

    setDisplayMode = (mode) => {this.props.setDisplayMode(mode)}
    clearComplete = () => {this.props.clearComplete()}
    render() {
		
        return (
            <footer className="todo-app__footer" id="todo-footer" style = {{display:this.props.hide? "none":""}} >
				<div className="todo-app__total">{this.props.leftNum} left</div>
				<ul className="todo-app__view-buttons">
					<button style = {{backgroundColor:this.props.displayMode===ALL? "yellow":""}} onClick = {() => this.setDisplayMode(ALL)}>All</button>
					<button style = {{backgroundColor:this.props.displayMode===ACTIVE? "yellow":""}} onClick = {() => this.setDisplayMode(ACTIVE)}>Active</button>
					<button style = {{backgroundColor:this.props.displayMode===COMPLETED? "yellow":""}} onClick = {() => this.setDisplayMode(COMPLETED)}>Completed</button>
				</ul>
				<div className="todo-app__clean">
					<button  onClick = {()=>this.clearComplete()} style = {{visibility:this.props.completeNum > 0? "visible":"hidden"}}>
						Clear complete
					</button>
				</div>
			</footer>

        );
    }
};
 
export default Footer;