import React from 'react';
import { HashRouter, Route } from "react-router-dom";
// import "./styles.css";

import Sidebar from "./components/Sidebar";
import Home from './routes/Home';
import About from './routes/About';
import Contact from './routes/Contact';
import Portfolio from './routes/Portfolio';


export default function App() {
  return (
    <div >
      <HashRouter>
        <Sidebar />
        <Route path="/" exact component={Home}></Route>
        <Route path="/about"  component={About}></Route>
        <Route path="/portfolio" component={Portfolio}></Route>
        <Route path="/contact" component={Contact}></Route>         
      </HashRouter>

    </div>
  );
}