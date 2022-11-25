import './App.css';
import React, { Component, Fragment } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import UserForm from "./components/UserForm";


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={
            <Fragment>
              <Header/>
              <UserForm/>
            </Fragment>
          }/>
        </Routes>
      </BrowserRouter>
    );
  }
}



export default App;
