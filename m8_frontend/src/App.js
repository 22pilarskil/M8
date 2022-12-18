import './App.css';
import React, { Component, Fragment } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import UserForm from "./components/UserForm";
import { About, Contact, Footer, Home, How_to_use, Navbar, Partnerships, Ym8 } from './components';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={
            <Fragment>
              <div className="App">
                <div className="gradient__bg">
                  <Navbar />
                </div>
                <Home />
                <Ym8 />
                <How_to_use />
                <Partnerships />
                <About />
                <Contact />
                <Footer />
              </div>
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
