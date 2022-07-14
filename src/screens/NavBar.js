

import { NavLink, Link } from "react-router-dom";
import React, { Fragment } from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
// import "./styles/Signup.css";

export function NavBar() {
  return (
    <Fragment>
      <div
        class="col-12 navbar navbar-expand-lg py-1 shadow-sm top-nav"
        style={{position: "fixed", top: "0", zIndex: "5", padding: "17px" }}
      >
        {/* <div class="container">
          <a href="#" class="navbar-brand">
            <img
              src="https://bootstrapious.com/i/snippets/sn-nav-logo/logo.png"
              width="41"
              alt=""
              class="d-inline-block align-middle mr-2"
            /> */}

           
          {/* </a> */}
          
          {/* <div class="mynewhead">
          <a href="/">
            <i class="allIcon logoIcon"></i>
          </a>
        </div> */}
          <div>HELI </div>
          <input id="menu-toggle" type="checkbox" />
          <label class="menu-button-container" for="menu-toggle">
            <div class="menu-button"></div>
          </label>
          <ul class="menu">
            <li>Home</li>
            <li>
              {" "}
              <Link to="/Product">
                <text style={{ color: "white" }}>Product</text>
              </Link>
            </li>
            {/* <li>Product</li> */}
            <li>Gallery</li>
            <li>Branch</li>
            <li>about us</li>

            <li>
              {" "}
              <Link to="/login">
                <text style={{ color: "white" }}>Login</text>
              </Link>
            </li>
          </ul>
          {/* <div
            className="button active "
           
          >
            {" "}
            <Button variant="primary" size="lg" active type="submit">
            <Link to="/login">Login</Link>
      </Button> */}
          {/* <Button className="btn btn-primary" type="submit">
              <Link to="/login">Login</Link>
            </Button> */}
          {/* </div> */}
        </div>{" "}
     
    </Fragment>
  );
}