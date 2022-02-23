import React, { Component } from "react";

import { BrowserRouter, Route, Link, Routes } from "react-router-dom";

import About from "./pages/about";
import Actions from "./pages/actions";
import Admin from "./pages/admin";
import Home from "./pages/home";
import NotFound from "./pages/notfound";
import Parrainage from "./pages/parrainage";

function App() {
  /*  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  componentDidMount() {
    fetch("http://192.168.33.10:5000/getjson")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result,
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  } */

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="actions" element={<Actions />} />
        <Route path="admin" element={<Admin />} />
        <Route path="notfound" element={<NotFound />} />
        <Route path="parrainage" element={<Parrainage />} />
      </Routes>
    </div>
  );

  /*   const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {items.map((item) => (
            <li key={item.first_name}>
              {item.first_name} {item.last_name}
            </li>
          ))}
        </ul>
      );
    } */
}

export default App;
