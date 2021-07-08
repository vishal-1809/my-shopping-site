import "./App.css";
import React from "react";
import { useState } from "react";
import Header from "./MyComponents/Header";
import Items from "./MyComponents/Items";
import Favorite from "./MyComponents/Favorite";
import About from "./MyComponents/About";
import Footer from "./MyComponents/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return (
                <>
                  <Items cart={cart} setCart={setCart} />
                </>
              );
            }}
          ></Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/fav">
            <Favorite cart={cart} setCart={setCart} />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
