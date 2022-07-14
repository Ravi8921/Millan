import "../styles/part4.css";
import { Fragment } from "react";
import { Button } from "react-bootstrap";

export function Part4() {
  return (
    <Fragment>
      <h2 class="title">reach out</h2>

      <div className="row">
        <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
          <div class="reachDetail text_fontss ">
            <ul>
              <li>
                <h3>Our Corporate Office</h3>
                <p>
                   HELI LAMP INDIA Pvt. Ltd. <br />
                  A-89,Okhla Industrial Area Phase II <br />
                  New Delhi 110020
                </p>
              </li>
              <li>
                <h3>Phone:</h3>
                <p>
                  <a href="tel:011-43101234">011-43101234</a>
                </p>
              </li>
              <li>
                <h3>All India Toll Free No. :</h3>
                <p>
                  <a href="tel:18001023424">18001023424</a>
                </p>
              </li>
              <li>
                <h3>Whatsapp your queries on: </h3>
                <p>
                  <a href="#">+91 9315955844</a>
                </p>
              </li>

              <li>
                <h3>Customer Care Numbers:</h3>
                <p>
                  Chennai: <a href="tel:044-28252516">044-28252516</a>{" "}
                </p>
                <p>
                  Bhubaneswar: <a href="tel:0674-2573326">0674-2573326</a>
                </p>
                <p>
                  Kolkata North:<a href="tel:033-40016441"> 033-40016441</a>
                </p>
                <p>
                  Kolkata South: <a href="tel:033-40034921">033-40034921</a>
                </p>
              </li>
            </ul>

            {/* <div><a href="contact-us.aspx"><img alt=" Milaan Pvt. Ltd."  src={require("../images/HELI Logo.png")}/></a></div> */}
          </div>{" "}
        </div>
<br></br>
        <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
          <div class="reachEnqForm space bodysss text_fontss">
            <h3>Write to us</h3>
            <p>
              Please write to us using the contact form below if you would like
              to know more about the opportunity, share ideas, give feedback,
              have complaints, or would simply like to request a catalogue
            </p>
            <div>
              <span class="formfield ">
                <input
                  name="ctl00$ContentPlaceHolder1$ReachOut1$txtDistId"
                  type="text"
                  id="ContentPlaceHolder1_ReachOut1_txtDistId"
                  class="txtBox placeTxt "
                  maxlength="8"
                  placeholder="Distributor Id *"
                />
                <input
                  type="hidden"
                  name="ctl00$ContentPlaceHolder1$ReachOut1$hdfCountryName"
                  id="ContentPlaceHolder1_ReachOut1_hdfCountryName"
                  value="1"
                />
              </span>
              <span class="formfield">
                <input
                  name="ctl00$ContentPlaceHolder1$ReachOut1$txtName"
                  type="text"
                  id="ContentPlaceHolder1_ReachOut1_txtName"
                  class="txtBox placeTxt"
                  placeholder="Name *"
                />
              </span>{" "}
              <span class="formfield">
                <input
                  name="ctl00$ContentPlaceHolder1$ReachOut1$txtMobile"
                  type="text"
                  id="ContentPlaceHolder1_ReachOut1_txtMobile"
                  class="txtBox placeTxt"
                  maxlength="10"
                  placeholder="Mobile *"
                />
              </span>{" "}
              <span class="formfield">
                <input
                  name="ctl00$ContentPlaceHolder1$ReachOut1$txtEmail"
                  type="text"
                  id="ContentPlaceHolder1_ReachOut1_txtEmail"
                  class="txtBox placeTxt"
                  placeholder="Email *"
                />
              </span>{" "}
              <span class="formfield">
                <select
                  name="ctl00$ContentPlaceHolder1$ReachOut1$ddlGrievance"
                  id="ContentPlaceHolder1_ReachOut1_ddlGrievance"
                  class="txtBox placeTxt"
                  data-placeholder="Grievance"
                  // style="margin-bottom: 18px; width: 100%; color:#000000"
                >
                  <option value="0">Select Grievance*</option>
                  <option value="1">Company Related</option>
                  <option value="2">Distributor Related</option>
                  <option value="3">Order Related</option>
                  <option value="4">Product Quality-Related</option>
                  <option value="5">Profile Related</option>
                  <option value="6">Refund Related</option>
                  <option value="7">Registration Related</option>
                  <option value="8">RULES OF CONDUCT Related</option>
                  <option value="9">Branch/ DLCP/ Mini DLCP Related</option>
                  <option value="10">Mobile App Related</option>
                  <option value="11">Product Delivery Related</option>
                </select>
                <textarea
                  name="ctl00$ContentPlaceHolder1$ReachOut1$txtMessage"
                  id="ContentPlaceHolder1_ReachOut1_txtMessage"
                  maxlength="500"
                  class="placeTxt"
                  placeholder="Your Message *"
                ></textarea>
                (<span id="spanMessage">500 Characters left</span>)
              </span>
              <span>
                <input
                  name="ctl00$ContentPlaceHolder1$ReachOut1$txtVerify"
                  type="text"
                  maxlength="10"
                  id="ContentPlaceHolder1_ReachOut1_txtVerify"
                  autocomplete="off"
                  class="txtBox placeTxt"
                  placeholder="Enter Captcha *"
                />
                <br></br>
                {/* <div class="row">
                  <img
                    id="ContentPlaceHolder1_ReachOut1_imCaptcha"
                    src="Captcha.ashx"
                  />
                  <input
                    type="image"
                    name="ctl00$ContentPlaceHolder1$ReachOut1$imgRefresh"
                    id="ContentPlaceHolder1_ReachOut1_imgRefresh"
                    src="refresh.png"
                  />
                </div> */}

                <Button
                
                  id="btnSubmit"
                  data-text="Submit"
                  class=""
                >
                  Submit
                </Button>
                &nbsp; &nbsp;
                <Button
                  type="reset"
                  title="Reset"
                  data-text="reset"
                  id="btnReset"
                  class=""
                >
                  reset
                </Button>
              </span>
            </div>
          </div>
        </div>
        
        <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
          <div class="reachMail space text_fontss">
            <ul>
              <li class="col-xs-6 col-sm-12 col-md-12 col-lg-12">
                <h3>For any queries, write to</h3>
                <p>
                  <a href="mailto:info@ HELI.com">info@ HELI.com</a>
                </p>
              </li>
              <li class="col-xs-6 col-sm-12 col-md-12 col-lg-12">
                <div class="salesInfo"></div>
              </li>
              <li class="col-xs-6 col-sm-12 col-md-12 col-lg-12">
                <div class="salesInfo">
                  <h3>For  HELI Magazine queries</h3>
                  <p>
                    <a href="mailto:voice@ HELI.com">voice@ HELI.com</a>
                  </p>
                </div>
              </li>
              <li class="col-xs-6 col-sm-12 col-md-12 col-lg-12">
                <h3>Our CSR initiative</h3>
                {/* <a
                  href="https://www. HELI.com/ HELIhearttoheart/index.html"
                  target="_blank"
                  title=" HELI heart to heart"
                >
                  <img
                    class="lazy-loaded img-responsive"
                    data-src="images/brand/06.png"
                    alt=" HELI heart to heart"
                    src="images/brand/06.png"
                  />
                </a>{" "} */}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
