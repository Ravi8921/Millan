// import { Fragment } from "react";
import axios from "axios";


import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { Fragment, useState } from "react";
import { Navbar, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Border } from "./Border";

export function Signup() {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [emailId, setemailId] = useState("");
  const [mobileNo, setmobileNo] = useState("");
  // const [pwd, setPwd] = useState("");
  const [Confirm_password, setConfirm_password] = useState("");
  const [referalNumber, setreferalNumber] = useState("");
  const [gender, setgender] = useState("Male");
  const [Register, setRegister] = useState([]);
  const [address, setAdress] = useState("");

  function onChangeValue(event) {
    setgender(event.target.value);
  }

  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handlePasswordChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const registerData = {
      firstName: firstName,
      lastName: lastName,
      mobileNo: mobileNo,
      emailId: emailId,
      Pwd: values.password,
      Confirm_password: Confirm_password,
      referalNumber: referalNumber,
      gender: gender,
      address:address,
    };
    setRegister([...Register, registerData]);
    console.log(registerData);

    axios({
      method: "post",
      url: "http://api.milaansearch.com:8092/api/user/login",
      data: {
        firstName: "",
        lastName: "",
        mobileNo: "",
        emailId: "",
        Pwd: "",
        gender: "",
        referalNumber: "",
        address:""
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
      <section class="vh-100">
     
        <div class="container h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-lg-12 col-xl-11">
              <div class="card text-black">
                <div class="card-body p-md-5">
                  <div class="row justify-content-center">
                 <div className="">  <Border/> </div>
                    <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      
                    {/* <div class="simplePopupClose">  <Link to="/Login">X</Link></div> */}
                      <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Sign up
                      </p>

                      <form>
                        <form class="mx-1 mx-md-4">
                          <div class="d-flex flex-row align-items-center mb-4">
                            <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                            <div class="form-outline flex-fill mb-0">
                              <label class="form-label" for="Full_Name">
                                First Name
                              </label>
                              <input
                                type="text"
                                id="Full_Name"
                                class="form-control"
                                placeholder="enter your first name"
                                value={firstName}
                                onChange={(e) => {
                                  setfirstName(e.target.value.trim());
                                }}
                              />
                            </div>
                          </div>
                          <div class="d-flex flex-row align-items-center mb-4">
                            <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                            <div class="form-outline flex-fill mb-0">
                              <label class="form-label" for="Last_Name">
                                Last Name
                              </label>
                              <input
                                type="text"
                                id="Last_Name"
                                class="form-control"
                                placeholder="enter your last name"
                                value={lastName}
                                onChange={(e) => {
                                  setlastName(e.target.value.trim());
                                }}
                              />
                            </div>
                          </div>
                          <div class="d-flex flex-row align-items-center mb-4">
                            <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                            <div class="form-outline flex-fill mb-0">
                              <label class="form-label" for="gender">
                                Gender
                              </label>

                              <div onChange={onChangeValue}>
                                <input
                                  type="radio"
                                  value="Male"
                                  name="gender"
                                  checked={gender === "Male"}
                                />{" "}
                                Male &nbsp;&nbsp;
                                <input
                                  type="radio"
                                  value="Female"
                                  name="gender"
                                  checked={gender === "Female"}
                                />{" "}
                                Female &nbsp;&nbsp;
                                <input
                                  type="radio"
                                  value="Other"
                                  name="gender"
                                  checked={gender === "Other"}
                                />{" "}
                                Other
                              </div>
                            </div>
                          </div>

                          <div class="d-flex flex-row align-items-center mb-4">
                            <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                            <div class="form-outline flex-fill mb-0">
                              <label class="form-label" for="Email">
                                {" "}
                                Email
                              </label>
                              <input
                                type="email"
                                id="form3Example3c"
                                class="form-control"
                                placeholder="enter your email"
                                value={emailId}
                                onChange={(e) => {
                                  setemailId(e.target.value.trim());
                                }}
                              />
                            </div>
                          </div>

                          <div class="d-flex flex-row align-items-center mb-4">
                            <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                            <div class="form-outline flex-fill mb-0">
                              <label class="form-label" for="Phone_No">
                                {" "}
                                Phone_No
                              </label>
                              <input
                                type="Number"
                                id="Phone_No"
                                class="form-control"
                                placeholder="enter your phone no"
                                value={mobileNo}
                                onChange={(e) => {
                                  setmobileNo(e.target.value.trim());
                                }}
                              />
                            </div>
                          </div>

                          <div class="d-flex flex-row align-items-center mb-4">
                            <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                            <div class="form-outline flex-fill mb-0">
                              <label class="form-label" for="Password">
                                {" "}
                                Password
                              </label>
                            
                              <input
                                type={values.showPassword ? "text" : "password"}
                                onChange={handlePasswordChange("password")}
                                value={values.password}
                                // type="password"
                                id="Password"
                                class="form-control"
                                placeholder="enter your password "

                                // value={pwd}
                                // onChange={(e) => {
                                //   setPwd(e.target.value.trim());
                                // }}
                              />
                                <button
                                type="button"
                                class="btn btn-light position"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                              >
                                {values.showPassword ? (
                                  <BsFillEyeFill />
                                ) : (
                                  <BsFillEyeSlashFill />
                                )}
                              </button>

                            </div>
                          </div>
                          <div class="d-flex flex-row align-items-center mb-4">
                            <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                            <div class="form-outline flex-fill mb-0">
                              <label class="form-label" for="Confirm_password">
                                Confirm_password
                              </label>
                              <input
                                type="password"
                                id="Confirm_password"
                                class="form-control"
                                placeholder="enter your confirm password"
                                value={Confirm_password}
                                onChange={(e) => {
                                  setConfirm_password(e.target.value.trim());
                                }}
                              />
                            </div>
                          </div>

                          <div class="d-flex flex-row align-items-center mb-4">
                            <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                            <div class="form-outline flex-fill mb-0">
                              <label class="form-label" for="Distributor_ID">
                                {" "}
                                Distributor_ID
                              </label>
                              <input
                                type="number"
                                id="Distributor_ID"
                                class="form-control"
                                placeholder="enter your distibutor id"
                                value={referalNumber}
                                onChange={(e) => {
                                  setreferalNumber(e.target.value.trim());
                                }}
                              />
                            </div>
                          </div>
                          <div class="d-flex flex-row align-items-center mb-4">
                            <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                            <div class="form-outline flex-fill mb-0">
                              <label class="form-label" for="Full_Name">
                               Address
                              </label>
                              <input
                                type="text"
                                id="address"
                                class="form-control"
                                placeholder="enter your address "
                                value={address}
                                onChange={(e) => {
                                  setAdress(e.target.value.trim());
                                }}
                              />
                            </div>
                          </div>

                          <div class="form-check d-flex justify-content-center mb-5">
                            <input
                              class="form-check-input me-2"
                              type="checkbox"
                              value=""
                              id="form2Example3c"
                              // checked
                            />
                            <label class="form-check-label" for="form2Example3">
                              I agree all statements in{" "}
                              <a href="#!">Terms of service</a>
                            </label>
                          </div>

                          <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <button
                              type="submit"
                              class="btn btn-primary btn-lg"
                              onClick={handleSubmit}
                            >
                              Register
                            </button>
                          </div>
                        </form>
                      </form>
                    </div>
                    <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src={require("../images/brand/11.jpg")}
                        style={{ height: 300 }}
                        class="img-fluid"
                        alt="Sample image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
