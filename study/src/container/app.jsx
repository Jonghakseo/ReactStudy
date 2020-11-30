import React, { useState } from "react";
import Header from "../components/header";
import Nav from "../components/nav";
import About from "../components/about";
import Career from "../components/career";
import Education from "../components/education";
// import Contact from "../components/contact";
import Note from "../components/note";
import Footer from "../components/footer";
import "./app.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function App() {
  const [items, setItems] = useState([]);
  const [myName, setMyName] = useState("namu");

  const addToDom = (item) => {
    setItems((prevItems) => {
      return [...prevItems, item];
    });

    setMyName(item);

    // console.log(items);
  };

  return (
    <div className="App">
      <Router>
        {/* <Link to="/about">about</Link> */}
        <Switch>
          <Route path="/" exact>
            {/* <Header /> */}
            <Education />
            <Nav />
            {/* <p>My Name is {myName}</p> */}
            {/* {items.map((note, index) => {
              return <Note key={index} id={index} name={note} />;
            })}
            <Contact onAdd={addToDom} /> */}
            <Footer />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/career">
            <Career />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
