import React, { Component } from "react";
import Input from "./Input";
import List from "./List";
import Footer from "../components/Footer";

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputArray: [],
            numOfThing: 0,
            remain: 0,
            displayState: "all",
            clearCompleted: true
        };
        this.handleInputCallback = this.handleInputCallback.bind(this);
        this.remainControl = this.remainControl.bind(this);
        this.numOfThingControl = this.numOfThingControl.bind(this);
        this.handleFooterCallback = this.handleFooterCallback.bind(this);
        this.clearCompleted = this.clearCompleted.bind(this);
    }

    handleInputCallback(thing) {
        let newArray = this.state.inputArray;
        newArray.push(thing);
        this.setState({
            inputArray: newArray,
            numOfThing: this.state.numOfThing + 1,
            remain: this.state.remain + 1
        });
    }

    handleFooterCallback(controlState) {
        if (controlState !== this.state.displayState) {
            this.setState({
                displayState: controlState
            });
        }
    }

    remainControl(n) {
        this.setState({
            remain: this.state.remain + n
        });
    }

    numOfThingControl(n = -1) {
        this.setState({
            numOfThing: this.state.numOfThing + n
        });
    }

    clearCompleted(e) {
        this.setState({
            clearCompleted: !this.state.clearCompleted
        });
    }

    render() {
        return (
            <>
                <section className="todo-app__main">
                    <Input callback={this.handleInputCallback} />
                    <List inputArray={this.state.inputArray} remainControl={this.remainControl}
                        numOfThingControl={this.numOfThingControl} clearLength={this.state.remain - this.state.numOfThing}
                        displayState={this.state.displayState} clearCompleted={this.state.clearCompleted}
                    />
                    {console.log(this.state.inputArray, this.state.numOfThing, this.state.remain)}
                </section>
                <Footer numOfThing={this.state.numOfThing} remain={this.state.remain}
                    callback={this.handleFooterCallback} display={this.state.displayState}
                    clearCallback={this.clearCompleted}
                />
            </>
            )
    }
}

export default Main;