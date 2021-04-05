import React, { Component } from "react";
import x from "./x.png";


class Items extends Component {

    constructor(props) {
        super(props);
        this.state = {
            exist: true,
            finished: false
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.handleFinish = this.handleFinish.bind(this);
    }

    handleFinish(e) {
        if (this.state.finished === false) {
            this.props.remainControl(-1); //checked
            console.log(this.state.finished);
        } else {
            this.props.remainControl(1); //unchecked
            //this.props.numOfThingControl(1);
            console.log(this.state.finished);
        }

        this.setState({
            finished: !this.state.finished
        });
    }

    deleteItem() {
        if (this.state.finished === false) {
            this.props.remainControl(-1);
            //this.props.numOfThingControl(-1);
        }
        this.props.numOfThingControl(-1);
        this.setState({
            finished: true,
            exist: false
        });
    }

    componentDidUpdate(prevProps) {//state更新時跑這裡
        if ((this.props.clearCompleted !== prevProps.clearCompleted) && this.state.finished && this.state.exist === true) {
            console.log("update");
            this.deleteItem();
            this.props.numOfThingControl(this.props.ClearLength);
        }
    }

    render() {

        let e;
        const detailStyle = {
            textDecoration: "line-through",
            opacity: 0.5
        };
           
        if (this.state.finished === false) {
            e = <h1 className="todo-app__item-detail">{this.props.thingToDo}</h1>
        } else {
            e = <h1 style={detailStyle}>{this.props.thingToDo}</h1>
        }

        if (this.state.exist && (this.props.displayState === "all" ||
            (this.props.displayState === "active" && !this.state.finished) ||
            (this.props.displayState === "completed" && this.state.finished)
        )) {
            return (

                <li className="todo-app__item">
                    <div className="todo-app__checkbox">
                        <input id={this.props.Num} type="checkbox" onChange={this.handleFinish} />
                        <label htmlFor={this.props.Num} />
                    </div>
                    {e}
                    <img className="todo-app__item-x" src={x} alt="delete"
                        onClick={this.deleteItem} />
                    {/*console.log(this.props.Num)*/}
                </li>
            );
        } else {
            return null;
        }

        
    }
}

export default Items;