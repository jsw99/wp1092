import React, { Component } from "react";
import Header from "../components/Header";
import Main from "./Main";

class TodoApp extends Component {
	constructor(props) {
		super(props);
	}
    render() {
        return (
            <>
                <Header text="todos" />

                <Main/>


                
            </>
        );
    }
}
/*footer is in main*/
export default TodoApp;
