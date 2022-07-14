import { Fragment, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Border } from "./Border";
import webConst from "./baseUrl";

export function Adminregistration() {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [emailId, setemailId] = useState("");
  const [mobileNo, setmobileNo] = useState("");
  // const [pwd, setPwd] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [panNo, setpanNo] = useState("");
  const [gender, setgender] = useState("Male");
  const [Register, setRegister] = useState([]);
  const [adharNo, setAdharNo] = useState("");
  const [description, setDescription] = useState("");
  const [gstNo, setgstNo] = useState("");
  const [userType, setUsertype] = useState("admin");


  function onChangeValue1(event) {
    setUsertype(event.target.value);
  }

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
      pwd: values.password,
      confirmPassword: confirmPassword,
      adharNo: adharNo,
      panNo: panNo,
      gstNo: gstNo,
      description: description,
      gender: gender,
      userType:userType,
    };
    setRegister([...Register, registerData]);
    console.log(registerData);

    axios({
      method: "post",
      url: webConst.BASE_URL +"api/user/login",
      data: {
        firstName: "",
        lastName: "",
        mobileNo: "",
        emailId: "",
        pwd: "",
        gender: "",
        adharNo: "",
        panNo: "",
        userType:"",
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
        <div className="backgroundd">
      <section class="vh-800 bg-image ">
     
        <div class="mask d-flex align-items-center h-100 gradient-custom-3">
          <div class="container h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
              <div class="col-12 col-md-9 col-lg-7  col-xl-12">
                <div class="card">
                  <Border />
                  <div class="card-body p-5">
                    <h2 class="text-uppercase text-center mb-5">
                      Create an account
                    </h2>

                    <form>
                      <div class="form-outline mb-4">
                        <label class="form-label" for="Full_Name">
                          First Name
                        </label>
                        <input
                          type="text"
                          id="Full_Name"
                          class="form-control form-control-lg"
                          placeholder="enter your first name"
                          value={firstName}
                          onChange={(e) => {
                            setfirstName(e.target.value.trim());
                          }}
                        />
                      </div>
                      <div class="form-outline mb-4">
                        <label class="form-label" for="form3Example1cg">
                          Last Name
                        </label>
                        <input
                          type="text"
                          id="form3Example1cg"
                          class="form-control form-control-lg"
                          placeholder="enter your last name"
                          value={lastName}
                          onChange={(e) => {
                            setlastName(e.target.value.trim());
                          }}
                        />
                      </div>

                      <div class="form-outline  mb-4">
                        <label class="form-label" for="phoneNumber">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phoneNumber"
                          class="form-control form-control-lg"
                          placeholder="enter your phone no"
                          value={mobileNo}
                          onChange={(e) => {
                            setmobileNo(e.target.value.trim());
                          }}
                        />
                      </div>

                      <div class="form-outline mb-4">
                        <label class="form-label" for="Email">
                          Your Email
                        </label>
                        <input
                          type="email"
                          id="form3Example3cg"
                          class="form-control form-control-lg"
                          placeholder="enter your email"
                          value={emailId}
                          onChange={(e) => {
                            setemailId(e.target.value.trim());
                          }}
                        />
                      </div>

                      <div class="form-outline mb-4">
                        <label class="form-label" for="Password">
                          Password
                        </label>
                        <input
                          id="form3Example4cg"
                          class="form-control form-control-lg"
                          placeholder="enter your password "
                          type={values.showPassword ? "text" : "password"}
                          onChange={handlePasswordChange("password")}
                          value={values.password}
                        />
                      </div>

                      <div class="form-outline mb-4">
                        <label class="form-label" for=" Repeat your password">
                          Repeat your password
                        </label>
                        <input
                          type="password"
                          id="form3Example4cdg"
                          class="form-control form-control-lg"
                          placeholder="enter your confirm password"
                          value={confirmPassword}
                          onChange={(e) => {
                            setconfirmPassword(e.target.value.trim());
                          }}
                        />
                      </div>

                      <div class="form-outline mb-4">
                        <div class="col-12">
                          <div onChange={onChangeValue1}>
                            <select class="select form-control-lg">
                              <option value="1" disabled>
                                Choose option
                              </option>

                              <option value="Admin">Admin</option>
                              <option value="User">User</option>
                            </select>
                            &nbsp; &nbsp; &nbsp; &nbsp;
                            <label class="form-label select-label">
                              User Type
                            </label>
                          </div>
                        </div>{" "}
                      </div>

                      <div class="d-md-flex justify-content-start align-items-center mb-4 py-2">
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

                      <div class="form-outline  mb-4">
                        <label class="form-label" for="phoneNumber">
                          Adhar Number
                        </label>
                        <input
                          type="number"
                          id="phoneNumber"
                          class="form-control form-control-lg"
                          value={adharNo}
                          onChange={(e) => {
                            setAdharNo(e.target.value.trim());
                          }}
                        />
                      </div>
                      <div class="form-outline  mb-4">
                        <label class="form-label" for="phoneNumber">
                          PAN Number
                        </label>
                        <input
                          type="number"
                          id="panNumber"
                          class="form-control form-control-lg"
                          placeholder="enter your phone no"
                          value={panNo}
                          onChange={(e) => {
                            setpanNo(e.target.value.trim());
                          }}
                        />
                      </div>
                      <div class="form-outline  mb-4">
                        <label class="form-label" for="phoneNumber">
                          GST Number
                        </label>
                        <input
                          type="number"
                          id="phoneNumber"
                          class="form-control form-control-lg"
                          placeholder="enter your phone no"
                          value={gstNo}
                          onChange={(e) => {
                            setgstNo(e.target.value.trim());
                          }}
                        />
                      </div>

                      <div class="form-outline mb-4">
                        <label class="form-label" for="form3Example1cg">
                          {" "}
                          Description
                        </label>
                        <input
                          type="text"
                          id="form3Example1cg"
                          class="form-control form-control-lg"
                          value={description}
                          onChange={(e) => {
                            setDescription(e.target.value.trim());
                          }}
                        />
                      </div>

                      <div class="form-check d-flex justify-content-center mb-5">
                        <input
                          class="form-check-input me-2"
                          type="checkbox"
                          value=""
                          id="form2Example3cg"
                        />
                        <label class="form-check-label" for="form2Example3g">
                          I agree all statements in{" "}
                          <a href="#!" class="text-body">
                            <u>Terms of service</u>
                          </a>
                        </label>
                      </div>

                      <div class="d-flex justify-content-center">
                        <button
                          type="button"
                          class="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                          onClick={handleSubmit}
                        >
                          Register
                        </button>
                      </div>

                      <p class="text-center text-muted mt-5 mb-0">
                        Have already an account?{" "}
                        <a href="#!" class="fw-bold text-body">
                          <u>
                            {" "}
                            <Link to="/Login"> Login here</Link>
                          </u>
                        </a>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    </Fragment>
  );
}
