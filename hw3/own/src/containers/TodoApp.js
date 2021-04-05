import React, { Component } from "react";
import Header from "../components/Header";
import Main from "./Main"
//import Section from "../components/Section";
//import Input from "../components/Input";
//import Ul from "../components/Ul";
//import List from "../components/Li";
import Footer from "../components/Footer";

class TodoApp extends Component {
    render() {
        return (
            <>
                <Header text="todos" />
                <Main />
                
            </>
        );
    }
}

export default TodoApp;
