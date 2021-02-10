import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Index from "./pages/Index";
import Portfolio from "./pages/Portfolio";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Route exact path ={["/","/index"]} component={Index} />
        {/* <Route exact path="/index" component={Index} /> */}
        {/* <Route exact path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
        <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
