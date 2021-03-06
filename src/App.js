import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import contact from "./pages/contact";
import index from "./pages/index";
import portfolio from "./pages/portfolio";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import "./App.css";

function App() {
  return (
    <div className="App">
    <Router>
     <Nav />
      <Switch>
        <Route exact path ={["/","/index"]} component={index} />
        <Route exact path="/portfolio" component={portfolio} />
        <Route exact path="/contact" component={contact} />
      </Switch>
        <Footer />
    </Router>
    </div>
  );
}

export default App;
