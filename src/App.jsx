/* eslint-disable no-unused-vars */
import './style.css';
import { Component } from 'react';

// Components
import Header from "./components/header/header";
import Navbar from './components/navbar/navbar';
import Home from './components/home/home';
import Project from './components/projecet/project';
import Assist from './components/assist/assist';
import Contact from './components/contact/contact';

function App() {
  return (
    <>
      <div className="circle-1"></div>
      <div className="circle-2"></div>

      <Header />
      <Navbar />
      <Home />
      <Project />
      <Assist />
      <Contact/>
    </>
  );
}

export default App;
