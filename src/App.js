import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// import ".styles/Bank.css";
import "./styles/Part3.css";
import "./styles/Navbar1.css";

import "./styles/Signup.css";
import "./styles/Login.css";
// import "./styles/Video.css";
import React, { Fragment } from "react";

import { Grid } from "./screens/Grid";
import { Grid1 } from "./screens/Grid1";
import Home from "./screens/Home";
import { Frontpic } from "./screens/Frontpic";
import { Part3 } from "./screens/Part3";
import { Part4 } from "./screens/part4";
import { Signup } from "./screens/Signup";
import { Login } from "./screens/login";

import { alignPropType } from "react-bootstrap/esm/types";
import { Navbar } from "react-bootstrap";
import { Product } from "./screens/Product";
import { NavBar } from "./screens/NavBar";
import { Forgetpwd } from "./screens/Forgetpwd";
import { Otp } from "./screens/Otp";
import { Adminregistration } from "./screens/Adminregistration";

function App(props) {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Forgetpwd" element={<Forgetpwd />} />
          <Route path="/Adminregistration" element={<Adminregistration />} />

          <Route path="/Otp" element={<Otp />} />
          <Route path="/Navbar" element={<NavBar />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/Signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
{
  /* <div style={{display: 'flex', flexDirection: 'column'}}>
<div style={{ width: '100vw', position: "fixed", zIndex: 1 }}>
  <NavBar1 />
</div> */
}
