import React, { Component } from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = { todoNum: 0, compNum: 0, filter: "ALL", clear: 0 };
    this.changetodoNum = this.changetodoNum.bind(this);
    this.changecompNum = this.changecompNum.bind(this);
    this.changefilter = this.changefilter.bind(this);
    this.changeclear = this.changeclear.bind(this);
  }
  changetodoNum(num) {
    this.setState({ todoNum: num });
  }
  changecompNum(num) {
    this.setState({ compNum: num });
  }
  changefilter(s) {
    this.setState({ filter: s });
  }
  changeclear(s) {
    this.setState({ clear: s });
  }
  render() {
    return (
      <>
        <Header text="todos" />
        <Main
          filter={this.state.filter}
          clear={this.state.clear}
          changetodoNum={this.changetodoNum}
          changecompNum={this.changecompNum}
          changeclear={this.changeclear}
        />
        <Footer
          todoNum={this.state.todoNum}
          compNum={this.state.compNum}
          changefilter={this.changefilter}
          changeclear={this.changeclear}
        />
      </>
    );
  }
}

export default TodoApp;
