import { Fragment } from "react";
import { Link } from "react-router-dom";
import "../styles/Forgetpwd.css";
export function Forgetpwd() {
  return (
    <Fragment>
      <div
        id="forgotpwdPopup"
        class="simplePopup storydetailsPopup bodies"
        style={{ display: "block;", position: "fixed;", top: "269.5px;" }}
      >
        <div class="simplePopupClose">  <Link to="/Login">X</Link></div>
        <span class="loginTestPopup">Forgot Password ?</span>
        <h2>Please Enter Your Distributor ID</h2>

        <ul>
          <li>
            <input
              id="distId"
              class="txtBox"
              maxlength="8"
              placeholder="Enter Your Distributor ID"
              onkeypress="return fnAllowNumeric()"
            />

            <div class="btnWrap">
              <a
                class="btn blueColor"
                id="btnSendPwd"
                href="javascript:void(0);"
                data-text="Send"
                title="Send"
              >
                  <Link to="/OTP">Send</Link>
                
              </a>
             
              <a
                class="btn grayColor cancelPopup"
               
                href="javascript:void(0);"
                data-text="Cancel"
                title="Cancel"
              >
                Cancel
              </a>
            </div>
          </li>
        </ul>
      </div>
    </Fragment>
  );
}
