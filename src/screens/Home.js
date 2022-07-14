import React, { Fragment } from "react";
import { Aboutus } from "./about";
import { Footer } from "./Footer";

import { Frontpic } from "./Frontpic";
import { NavBar } from "./NavBar";

import { Part3 } from "./Part3";
import { Part4 } from "./part4";

const Home = () => {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div>
        <Frontpic />
        <div style={{ marginRight: "10px",backgroundColor:"white" }}>
          <Part3 />
          <div style={{ marginRight: "10px", marginLeft: "20px" }}>
            <Aboutus />
          </div>
          <Part4 />
          <Footer />
        </div>
      
      </div>
     
    </div>
  );
};

export default Home;

{
  /* <div style={{display: 'flex', flexDirection: 'column'}}>
<div style={{ width: '100vw', position: "fixed", zIndex: 1 }}>
  <NavBar1 />
</div> */
}
