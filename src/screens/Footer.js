import { Fragment } from "react";
import {   FaFacebook } from "react-icons/fa";
import {BsGoogle,BsYoutube, BsInstagram,BsFacebook ,BsTwitter,BsLinkedin,BsGithub } from "react-icons/bs";
// import { FaFacebooke } from "react-icons/bs";

import "../styles/Video.css";
export function Footer() {
  return (
    <Fragment>
<div className="master">

      <div class="container my-7 ">
        <div class="text-center text-black" >
          <div class="container">
            <section class="mt-7">
              <div class="row text-center d-flex justify-content-center pt-5 text_fontsssssss">
               
                <div class="col-md-2">
                  <h6 class="text-uppercase font-weight-bold">
                    <a href="#!" class="  text-black">
                      About us
                    </a>
                  </h6>
                </div>

                <div class="col-md-2">
                  <h6 class="text-uppercase font-weight-bold">
                    <a href="#!" class="  text-black">
                    Contact Us
                    </a>
                  </h6>
                </div>
                <div class="col-md-2">
                  <h6 class="text-uppercase font-weight-bold">
                    <a href="#!" class="  text-black">
                    Privacy & Security Policy
                    </a>
                  </h6>
                </div>

                <div class="col-md-3">
                  <h6 class="text-uppercase font-weight-bold">
                    <a href="#!" class="  text-black">
                    Registration Process 
                    </a>
                  </h6>
                </div>

                <div class="col-md-2">
                  <h6 class="text-uppercase font-weight-bold">
                    <a href="#!" class="  text-black">
                    Cancellation Process 
                    </a>
                  </h6>
                </div>

               

            
              
              </div>
            </section>

            <hr class="my-5" />

            {/* <section class="mb-5 d-sm-none d-md-block d-lg-block">
              <div class="row d-flex justify-content-center">
                <div class="col-lg-8 uclfooter_Image1 ">
                <img   src={require("../images/brand/ISO.png")}/>
                </div>
              </div>
            </section> */}
           
            <section class="text-center mb-5">
            <a href="https://www.facebook.com/VestigeMkt/" target="_blank" title="Facebook"><i class="allIcon fbIcon ">
              
             
             {/* <BsYoutube/> <BsTwitter/> */}
              </i></a>
              <a href="" class="  text-black me-4">
                <i class=" FaFacebook"> < BsFacebook/></i>
              </a>
              <a href="" class="  text-black me-4">
                <i class="fass fa-google"> <BsGoogle/> </i>
              </a>
              <a href="" class="  text-black me-4">
                <i class="fass fa-instagram"> <BsInstagram/> </i>
              </a>
              <a href="" class="  text-black me-4">
                <i class="fass fa-linkedin"> <BsLinkedin/> </i>
              </a>
              {/* <a href="" class="  text-black me-4">
                <i class="fa fa-github"> <BsGithub/> </i>
              </a> */}
            </section>
          </div>

          <div
            class="text-center p-3"
            // style={{background-color:" rgba(0, 0, 0, 0.2)"}}
          >
            © 2020 Copyright:
            <a class="  text-black" href="https://mdbootstrap.com/">
             Helping India PVT LTD
            </a>
          </div>
        </div>{" "}
        </div>

        </div>
    </Fragment>
  );
}

{
  /* <li><a href="/privacy-policy.aspx" title="Privacy &amp; Security Policy">Privacy &amp; Security Policy</a></li>
           <li><a href="/registration.aspx" title="Registration Process">Registration Process</a></li>
          
           <li><a href="/refund.aspx" title="Cancellation/Refund Process">Cancellation/Refund Process</a></li>
           <li><a href="/disclaimer.aspx" title="T&amp;C">T&amp;C </a></li>
           <li><a href="/branches.aspx" title="Branches">Branches</a></li>
         
           <li><a href="/delivery-area.aspx" title="Delivery">Delivery</a></li><br></br>
           <img id="uclfooter_Image1" src="images/ISO.png" /> */
}
{/* <span id="socialBox" class="socialLinks"> */}

           
                
{/* <a href="https://www.facebook.com/VestigeMkt/" target="_blank" title="Facebook"><i class="allIcon fbIcon"></i></a>
<a href="https://twitter.com/vestigemkt" target="_blank" title="Twitter"><i class="allIcon twitterIcon"></i></a>
<a href="https://www.instagram.com/vestige_official" target="_blank" title="Instagram"><i class="allIcon instagramIcon"></i></a>
<a href="http://youtube.com/vestigemedia" target="_blank" title="Youtube"><i class="allIcon youtubeIcon"></i></a>
<hr style="color:aqua;">
 <a href="./new-to-vestige.aspx" class="socialLinks2" style="margin-right: 60px; margin-top: 10px; border-top-color: black;">
    <img id="uclfooter_Image2" src="images/New-in-Vestige-02.jpg">
</a> 

</span> */}