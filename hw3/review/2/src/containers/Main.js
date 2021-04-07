import React, { Component } from "react";
import TodoItem from "../components/TodoItem.js";
import TodoList from "../components/TodoList.js";
import Footer from "../components/Footer.js";

const ALL = 0, ACTIVE = 1, COMPLETED = 2;
class Main extends Component {
	constructor(props) {
        super(props);
        this.state = {
        	items:[],
        	hide:true,
        	leftNum:0,
        	itemsFiltered:[],
        	displayMode: ALL,
        }
    }


    updateLeftNum = () => {
		this.setState((state)=>{
    		let filteredItems = state.items.filter((e)=>{return (e.completed === false);});
			return {
				leftNum: filteredItems.length
			};
		})
    }
    setDisplayMode = (mode) => {
    	this.setState((state)=>{
    		return {
    			displayMode:mode
    		};
    	})
    	this.setDisplayItems();
    }
    setDisplayItems = () => {
    	this.setState((state)=>{
    		let filteredItems;
	    	if (state.displayMode === ACTIVE) {
	    		filteredItems = state.items.filter((e)=>{return (e.completed === false);});
	    		
	    	} else if (state.displayMode === COMPLETED) {
	    		filteredItems = state.items.filter((e)=>{return (e.completed === true);});

	    	} else {
	    		filteredItems = state.items
	    	}

    		//console.log(state.displayMode, filteredItems);
			return {
				itemsFiltered: filteredItems
			};
		})
    }

  	/*newTodo = (e) => {
  		this.setState(state => ({items: [...state.items, e.target.value] }) )
  	}*/
    handleInput = (e) => {
	    if (e.key === 'Enter' && this._inputElement.value !== "") {
			//console.log('do validate', e.target.value);
			//this.newTodo(e);
			//this.setState(state => ({items:[...state.items, e.target.value]}	));
			//this.setState(state => ({value:e.target.value}));
			//this.newTodo(e);
			let newItem = {
				text: this._inputElement.value,
				key: Date.now(),
				completed:false
			};
	 
			this.setState((prevState) => {
				return { 
					items: prevState.items.concat(newItem) 
			  	};
			});
	   
	   		this._inputElement.value = "";

	   		this.setState((prevState) => {
				return { 
					hide: false
			  	};
			});
			this.updateLeftNum();
			this.setDisplayItems();
		}
  	}
  	deleteItem = (Key)=>{
  		this.setState((state) => { 
  			let filteredItems = this.state.items.filter((e)=>{return (e.key !== Key);});
  			return {
  				items: filteredItems
  			}
  		})

  		this.setState((state) => {
				return { 
					hide: state.items.length === 0? true : false
			  	};
		});
		this.updateLeftNum();
		this.setDisplayItems();
  	}
  	checkComplete = (Key)=>{
  		let newItems = this.state.items
  		let objIndex = newItems.findIndex((obj => obj.key === Key));
  		if (newItems[objIndex].completed === true) {
  			newItems[objIndex].completed = false
  			
  		} else {
  			newItems[objIndex].completed = true

  		}
  		this.setState((state)=>{
			return {
				items: newItems
			};
		})

		this.updateLeftNum();
		this.setDisplayItems();
		
  		/*console.log('check complete');
		console.log(this.state.items);
		console.log(this.state.leftNum);*/
  	}
  	clearComplete = ()=>{
  		this.setState((state) => { 
    		let filteredItems = state.items.filter((e)=>{return (e.completed === false);});
  			return {
  				items: filteredItems
  			}
  		})

  		this.setState((state) => {
				return { 
					hide: state.items.length === 0? true : false
			  	};
		});
		this.updateLeftNum();
		this.setDisplayItems();
  	}
	render() {
		return (
			<>
				<section className="todo-app__main">
					<input className="todo-app__input" type="text" ref={(a) => this._inputElement = a} onKeyDown = {this.handleInput} 
						placeholder="What needs to be done?"/>
					<TodoList items={this.state.mode === ALL? this.state.items:this.state.itemsFiltered} delete = {this.deleteItem} 
						hide={this.state.hide} checkComplete={this.checkComplete}/>
				</section>

				<Footer leftNum = {this.state.leftNum} 
					completeNum = {this.state.items.length - this.state.leftNum} hide={this.state.hide} 
					setDisplayMode = {this.setDisplayMode} displayMode = {this.state.displayMode} clearComplete = {this.clearComplete}/>
			</>
		);
	}
}
export default Main;