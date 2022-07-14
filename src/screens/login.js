import axios from "axios";
import { Fragment, useState } from "react";
import { Navbar, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Border } from "./Border";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target.email.value, e.target.password.value, "Form")
    // console.log(email, password, "variable")
    const email = e.target.email.value;
    const pwd = e.target.password.value;
    axios({
      method: "post",
      url: "http://api.milaansearch.com:8092/api/user/login",
      data: {
        deviceId: "NOTLOADED",
        emailId: "v23@milaan.com",
        playerId: "NOTLOADED",
        pwd: "TWlsYWFuQHYy",
      },
    }).then(
      (res) => {
        console.log(res.data);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  return (
    
    <Fragment>
            <div class="card abcd"><Border/>
      <div className="container">
   
        <form onSubmit={handleSubmit} className="form" id="login">
       
          <h1 className="form__title">Login</h1>
        
          <div className="form__message form__message--error"></div>
          <div className="form__input-group">
            <input
              name="email"
              type="text"
              id="email"
              className="form__input"
              autofocus
              placeholder="Username or email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <div className="form__input-error-message"></div>
          </div>
          <div className="form__input-group">
            <input
              name="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
              className="form__input"
              autofocus
              placeholder="Password"
            />
            <div className="form__input-error-message"></div>
          </div>
         
          <br></br>
          <div class="form-outline mb-4">
                        <div class="col-12">
                          <select class="select form-control-lg">
                            <option value="1" disabled>
                              Choose option
                            </option>
                            <option value="2">Admin</option>
                            <option value="3">User</option>
                          
                          </select>

                          &nbsp; &nbsp; &nbsp; &nbsp; 
                          <label class="form-label select-label">
                          User Type
                          </label>
                        </div>
                      </div>
<div className="asdf">
  

          <button className="btn btn-primary" type="submit">
            Continue
          </button>
          &nbsp;
          <p className="form__text">
            <a href="#" className="form__link">
            <Link to="/Forgetpwd"> Forgot your password?</Link>  
            </a>
          </p>
          <p className="form__text">
            <a href="#" className="form__link">
            <Link to="/Adminregistration"> For Admin registration</Link>  
            </a>
          </p>
          <p className="form__text">
            <Link to="/Signup"> Don't have an account? Create account</Link>
           
          </p>
          </div>
        </form>
      </div>  </div>
    </Fragment>
  );
}
