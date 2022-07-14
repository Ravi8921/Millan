import { Fragment } from "react";

export function Navbar1(){
    return(
        <Fragment>
<div id="style" class="scrollRemove ">
        <a>
          <span class="shine">
            {" "}
            <img
              src={require("../images/brand/111.png")}
              height="68px"
              width="68px"
            />{" "}
          </span>
        </a>

        <div class="topnav" id="myTopnav">
          <a href="#home" class="active">
            Home
          </a>
          <a href="#news">Products</a>
          <a href="#news">Brand</a>
          <a href="#news">News</a>
          <a href="#news">Gallery</a>
          <a href="#news">Downloads</a>
          <a href="#news">Career</a>

          <a href="#contact"  class="active">Contact</a>
          <a href="#about">About</a>
          <a href="javascript:void(0);" class="icon" onclick="myFunction()">
            <i class="fa fa-bars"></i>
          </a>

         
            <div className="boton active ">
              {" "}
              <button
                class="btn btn-outline-success my-1 my-sm-0  "
                type="submit"
              >
                <Link to="/login">Login</Link>
              </button>
            </div>
         
        </div>
      </div> 

        </Fragment>
    )
}
<nav class="navbar navbar-expand-lg navbar-light colors affix ">
<a class="navbar-brand " href="#">
  <img
    style={{ height: 10, width: 10 }}
    src={require("../images/brand/111.png")}
  />
</a>

<button
  class="navbar-toggler"
  type="button"
   data-toggle="collapse"
  data-target="#navbarText"
  aria-controls="navbarText"
  aria-expanded="false"
  aria-label="Toggle navigation"
>
  <span class="navbar-toggler-icon"></span>
</button>
<div class="icons navbar-collapse" id="navbarText">
  <ul class="navbar-nav mr-auto">
    <li class="nav-item active">
      <a class="nav-link buttonn" href="#">
        Home
      </a>
    </li>
    <li class="nav-item ">
      <a class="nav-link buttonn " href="#">
        Products
      </a>
      <br></br>
    </li>
    <li class="nav-item">
      <a class="nav-link buttonn" href="#">
        Brand
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link buttonn" href="#">
        News
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link buttonn" href="#">
        Gallery
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link buttonn" href="#">
        Schedule
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link buttonn" href="#">
        Branch
      </a>
    </li>
    <li class="nav-item ">
      <a class="nav-link buttonn" href="#">
        Downloads
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link buttonn" href="#">
        Career
      </a>
    </li>
  </ul>
</div>

<div className="button">
  {" "}
  <button
    class="btn btn-outline-success my-1 my-sm-0 margin "
    type="submit"
  >
    <Link to="/login">Login</Link>
  </button>
</div>

</nav>


































import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Part3 } from "./Part3";

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

export function NavBar() {
  return (
    <Fragment>
     
     
     <div className="col-md-12 col-lg-12" style={{ position: "fixed", top: "0", zIndex: "1", padding: "0" }}>
     <div id="style" class="scrollRemove ">
     
     <div class="myheading textGlowingBlue styles">All</div>
     
     <div id="4#MEDICAL" class="myheading">
       Home{" "}
     </div>
     <div id="5#FURNITURE" class="myheading">
       Products{" "}
     </div>
     {/* <div id="6#GROCERY" class="myheading">
       Brand{" "}
     </div>
     <div id="7#JEWELLERY" class="myheading">
       News{" "}
     </div>
     <div id="8#BOOK" class="myheading">
       Gallery{" "}
     </div>
     <div id="9#ELECTRONIC" class="myheading">
       Schedule{" "}
     </div> */}
     <div id="10#GARMENT" class="myheading">
       About{" "}
     </div>
    
     <div className="boton active "  style={{  zIndex: "12", paddingBottom: "200" ,marginInlineEnd:'center',justifyContent:'center',display:'flex', }}>
              {" "}
              <button
                class="btn   "
                type="submit"
              >
                <Link to="/login">Login</Link>
              </button>
            </div>
      </div> 
     
        </div> 
    </Fragment>
  );
}
<div
class="col top-nav"
style={{ position: "fixed", top: "0", zIndex: "5", padding: "0" }}
>
{/* <div class="mynewhead">
  <a href="/">
    <i class="allIcon logoIcon"></i>
  </a>
</div> */}
<div>HELI</div>
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
</div>







































 
// <div class="container-fluid">
// <div class="copyright">
//     <span><small>© <script>document.write(new Date().getFullYear())</script>2022 Helping india Private Limited | All rights reserved </small>
                 
//          <span id="socialBox" class="socialLinks">

       
            
//         <a href="https://www.facebook.com/VestigeMkt/" target="_blank" title="Facebook"><i class="allIcon fbIcon"></i></a>
//         <a href="https://twitter.com/vestigemkt" target="_blank" title="Twitter"><i class="allIcon twitterIcon"></i></a>
//         <a href="https://www.instagram.com/vestige_official" target="_blank" title="Instagram"><i class="allIcon instagramIcon"></i></a>
//         <a href="http://youtube.com/vestigemedia" target="_blank" title="Youtube"><i class="allIcon youtubeIcon"></i></a>
      
//   <hr style={{color:"aqua;"}}/>
//          <a href="./new-to-vestige.aspx" class="socialLinks2">
//             <img id="uclfooter_Image2" src="images/New-in-Vestige-02.jpg"/>
//         </a> 

// </span></span></div>

// <div id="multiLanguagePopUp" style="display: none; background: rgb(255, 255, 255); z-index: 9; color: rgb(65, 65, 65); padding: 2px; box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 2px 2px; border-radius: 8px; text-align: right; margin-top: 25px; min-height: 130px; top: 30px; right: 122px; width: 615px;">



// <div id="uclfooter_divUat" class="col-xs-12 col-md-12" style="text-align: left; font-size: 25px;">
// <div class="col-xs-12 col-md-12" style="text-align: center; vertical-align: middle; padding-top: 6px; background-color: rgb(241,241,241); font-family: Verdana; font-size: 18px; height: 40px;">
//    Select Language
// </div>

// <div class="col-xs-12 col-md-12" style="height: 28px;">
// </div>
// <script type="text/javascript" src="//code.jquery.com/jquery-1.10.2.min.js"></script>
// <div class="col-xs-1 col-md-1;"></div>
// <div class="col-xs-1 col-md-1;" style="text-align: center; cursor: pointer; padding-bottom: 5px; min-width:80px;" onmouseover="this.style.color='black'"><a style="font-size: 15px;" onclick="ChangeLanguageUmesh('en-in')">English</a></div>
// <div class="col-xs-1 col-md-1;" style="text-align: center; cursor: pointer; padding-bottom: 5px; min-width:80px;"><a style="font-size: 15px;" onclick="ChangeLanguageUmesh('hi-in')">हिंदी</a></div>
// <div class="col-xs-1 col-md-1;" style="text-align: center; cursor: pointer; padding-bottom: 5px; min-width:80px;"><a style="font-size: 15px;" onclick="ChangeLanguageUmesh('pa-in')">ਪੰਜਾਬੀ</a></div>
// <div class="col-xs-1 col-md-1;" style="text-align: center; cursor: pointer; padding-bottom: 5px; min-width:80px;"><a style="font-size: 15px;" onclick="ChangeLanguageUmesh('bn-in')">বাংলা</a></div>
// <div class="col-xs-1 col-md-1;" style="text-align: center; cursor: pointer; padding-bottom: 5px; min-width:80px;"><a style="font-size: 15px;" onclick="ChangeLanguageUmesh('gu-in')">ગુજરાતી</a></div>
// <div class="col-xs-1 col-md-1;" style="text-align: center; cursor: pointer; padding-bottom: 5px; min-width:80px;"><a style="font-size: 15px;" onclick="ChangeLanguageUmesh('mr-in')">मराठी</a></div>
// <div class="col-xs-1 col-md-1;" style="text-align: center; cursor: pointer; padding-bottom: 5px; min-width:80px;"><a style="font-size: 15px;" onclick="ChangeLanguageUmesh('ta-in')">தமிழ்</a></div>
// <div class="col-xs-1 col-md-1;" style="text-align: center; cursor: pointer; padding-bottom: 5px; min-width:80px;"><a style="font-size: 15px;" onclick="ChangeLanguageUmesh('te-in')">తెలుగు</a></div>
// <div class="col-xs-1 col-md-1;" style="text-align: center; cursor: pointer; padding-bottom: 5px; min-width:80px;"><a style="font-size: 15px;" onclick="ChangeLanguageUmesh('ml-in')">മലയാളം</a></div>
// <div class="col-xs-1 col-md-1;" style="text-align: center; cursor: pointer; padding-bottom: 5px; min-width:80px;"><a style="font-size: 15px;" onclick="ChangeLanguageUmesh('kn-in')">ಕನ್ನಡ</a></div>
// <div class="col-xs-1 col-md-1;"></div>

// {/* <script src="/script/MyVestigeLanguage.js">
//            SetLanguage();
// </script> */}
// </div>

// </div>
// </div>



// const handleSubmit = (e) => {
//   e.preventDefault();
//   // console.log(e.target.email.value, e.target.password.value, "Form")
//   // console.log(email, password, "variable")
//   const registerData = {

//    FulL_Name : e.target.FulL_Name.value,
//    Last_Name : e.target.Last_Name.value,
//    Phone_No : e.target.Phone_No.value,
//    Password : e.target.Password.value,
//    Confirm_password : e.target.Confirm_password.value,
//    Distributor_ID : e.target.Distributor_ID.value,
//   };
//   setRegister([...Register, registerData]);