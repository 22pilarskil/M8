import './App.css';
import React, { Component, Fragment } from "react";
import Header from "./components/Header";
import UserForm from "./components/UserForm";


class App extends Component {
  render() {
    return (
      <Fragment>
        <Header/>
        <UserForm/>
      </Fragment>
    );
  }
}



export default App;
