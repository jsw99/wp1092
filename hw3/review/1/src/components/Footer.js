import React, { Component } from "react";
var clr = ["", "", ""];
var s1 = "rgb(243, 153, 150)";
class TodoFooter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleFilter = (f) => {
    this.props.changefilter(f);
  };
  handleClear = () => {
    this.props.changeclear(1);
    //this.props.changeclear(0);
  };
  render() {
    var hide = "";
    if (this.props.compNum + this.props.todoNum == 0) hide = "none";
    var hideb = "";
    if (this.props.compNum == 0) hideb = "none";
    return (
      <footer
        class="todo-app__footer"
        id="todo-footer"
        style={{ display: hide }}
      >
        <div class="todo-app__total">{this.props.todoNum} left</div>
        <ul class="todo-app__view-buttons">
          <button
            style={{ backgroundColor: clr[0] }}
            onClick={() => {
              this.handleFilter("ALL");
              clr[0] = s1;
              clr[1] = "";
              clr[2] = "";
            }}
          >
            All
          </button>
          <button
            style={{ backgroundColor: clr[1] }}
            onClick={() => {
              this.handleFilter("ACT");
              clr[0] = "";
              clr[1] = s1;
              clr[2] = "";
            }}
          >
            Active
          </button>
          <button
            style={{ backgroundColor: clr[2] }}
            onClick={() => {
              this.handleFilter("COMP");
              clr[0] = "";
              clr[1] = "";
              clr[2] = s1;
            }}
          >
            Completed
          </button>
        </ul>
        <div class="todo-app__clean">
          <button style={{ display: hideb }} onClick={() => this.handleClear()}>
            Clear completed
          </button>
        </div>
      </footer>
    );
  }
}
export default TodoFooter;
