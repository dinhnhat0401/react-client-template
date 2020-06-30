import React from "react";
import { Link, BrowserRouter } from "react-router-dom";

import Banner from "./banner.jpg";

function AppBar() {
  return (
    <div>
      <a href="https://www.reactboilerplate.com/">
        <img src={Banner} alt="react-boilerplate - Logo" />
      </a>
      <BrowserRouter>
        <Link to="/">Link 1</Link>
        <Link to="/features">Link 2</Link>
      </BrowserRouter>
    </div>
  );
}

export default AppBar;
