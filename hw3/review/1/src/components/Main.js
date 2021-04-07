import React, { Component } from "react";

class TodoMain extends Component {
  constructor(props) {
    super(props);
    this.state = { allList: [], listId: 0, todoNum: 0, compNum: 0 };
    this.todoItem = class todoItem {
      constructor(Id, Index, Detail) {
        this.Id = Id;
        this.Index = Index;
        this.Detail = Detail;
        this.checked = 0;
      }
    };
  }
  newItem = (Id, Detail, Checked) => {
    var ck = Checked ? "checked" : "";
    return (
      <li class="todo-app__item">
        <div class={"todo-app__checkbox " + ck}>
          <input
            id={Id}
            type="checkbox"
            onClick={(e) => this.handleCheck(e)}
          ></input>
          <label for={Id}></label>
        </div>
        <h1 class={"todo-app__item-detail " + ck}>{Detail}</h1>
        <img
          src="./img/x.png"
          class="todo-app__item-x"
          id={Id}
          onClick={(e) => this.handleDel(e.target.id)}
        ></img>
      </li>
    );
  };
  id2Ind = (id) => {
    var sameInd = -1;
    for (let i = 0; i < this.state.allList.length; i++) {
      if (id == this.state.allList[i].Id) {
        sameInd = i;
        break;
      }
    }
    return sameInd;
  };
  handleCheck = (e) => {
    var clickedDetail = e.target.offsetParent.nextSibling;
    var sameInd = this.id2Ind(e.target.id);
    if (this.state.allList[sameInd].checked == 0) {
      //console.log('checked ',sameInd,e.target.id);
      this.state.allList[sameInd].checked = 1;
      this.props.changetodoNum(this.state.todoNum - 1);
      this.setState((state) => ({ todoNum: state.todoNum - 1 }));
      this.props.changecompNum(this.state.compNum + 1);
      this.setState((state) => ({ compNum: state.compNum + 1 }));
    } else {
      //console.log('unchecked ',sameInd,e.target.id);
      this.state.allList[sameInd].checked = 0;
      this.props.changetodoNum(this.state.todoNum + 1);
      this.setState((state) => ({ todoNum: state.todoNum + 1 }));
      this.props.changecompNum(this.state.compNum - 1);
      this.setState((state) => ({ compNum: state.compNum - 1 }));
    }
  };
  handleAdd = (e) => {
    if (e.key === "Enter" && e.target.value !== "") {
      var l = this.state.allList.length;
      var newList = this.state.allList.concat([
        new this.todoItem(this.state.listId, l, e.target.value),
      ]);
      this.setState((state) => ({ allList: newList }));
      this.props.changetodoNum(this.state.todoNum + 1);
      this.setState((state) => ({ listId: state.listId + 1 }));
      this.setState((state) => ({ todoNum: state.todoNum + 1 }));
      e.target.value = "";
    }
  };
  handleDel = (id) => {
    var sameInd = this.id2Ind(id);
    //var  newList =  this.state.allList.map(x => x);
    var ck = this.state.allList[sameInd].checked;
    this.state.allList.splice(sameInd, 1);
    // this.setState({ allList : this.allList });
    if (ck) {
      this.props.changecompNum(this.state.compNum - 1);
      this.setState({ compNum: this.state.compNum - 1 });
    } else {
      this.props.changetodoNum(this.state.todoNum - 1);
      this.setState({ todoNum: this.state.todoNum - 1 });
    }
  };
  filtList = (f) => {
    var oldList = this.state.allList;
    var fList = [];
    if (f == "ACT") {
      for (let i = 0; i < oldList.length; i++) {
        if (oldList[i].checked == 0) fList = fList.concat(oldList[i]);
      }
    } else if (f == "COMP") {
      for (let i = 0; i < oldList.length; i++) {
        if (oldList[i].checked == 1) fList = fList.concat(oldList[i]);
      }
    } else if (f == "ALL") {
      for (let i = 0; i < oldList.length; i++) {
        fList = fList.concat(oldList[i]);
      }
    }
    return fList;
  };
  render() {
    if (this.props.clear) {
      var delList = [];
      for (let i = 0; i < this.state.allList.length; i++) {
        if (this.state.allList[i].checked == 1)
          delList = delList.concat(this.state.allList[i].Id);
      }
      for (let i = 0; i < delList.length; i++) {
        this.handleDel(delList[i]);
      }
      this.props.changeclear(0);
      //this.setState({ allList : newList});
    }
    var oList = this.filtList(this.props.filter);
    var items = oList.map((e) => this.newItem(e.Id, e.Detail, e.checked));
    var hide = "";
    if (this.props.compNum + this.props.todoNum == 0) hide = "none";
    return (
      <section class="todo-app__main">
        <input
          class="todo-app__input"
          placeholder="What needs to be done?"
          onKeyPress={(e) => this.handleAdd(e)}
        ></input>
        <ul class="todo-app__list" id="todo-list" style={{ display: hide }}>
          {items}
        </ul>
      </section>
    );
  }
}
export default TodoMain;
