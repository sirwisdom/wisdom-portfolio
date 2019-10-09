import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/pages/About";
import Navbar from "./components/pages/Navbar";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "./components/scss/main.scss";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <Router>
      {/* <Navbar NavLinks={NavLinks} /> */}

      <Switch>
        <Route exact path="/" component={Navbar} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;
