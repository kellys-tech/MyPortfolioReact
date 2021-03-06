import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Contact from "./pages/contact";
import Index from "./pages/index";
import Portfolio from "./pages/portfolio";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import "./App.css";

function App() {
  return (
    <div className="App">
    <Router basename={process.env.PUBLIC_URL}>
     <Nav />
      <Switch>
        <Route exact path ={["/", "/index"]} component={Index} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
        <Footer />
    </Router>
    </div>
  );
}

export default App;
