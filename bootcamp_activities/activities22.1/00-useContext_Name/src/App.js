import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import UserNameTest from "./pages/UserNameTest";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={UserNameTest} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
