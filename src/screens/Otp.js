import { Fragment } from "react";
import "../styles/Otp.css";
export function Otp() {
  return (
    <Fragment>
      <div class="container height-100 d-flex justify-content-center align-items-center">
        <div class="position-relative">
          <div class="card p-2 text-center cardss ">
            <h6>
              Please enter the one time password <br></br> to verify your
              account
            </h6>
            <div>
              {" "}
              <span>A code has been sent to</span> <small>*******9897</small>{" "}
            </div>
            <div
              id="otp"
              class="inputs d-flex flex-row justify-content-center mt-2"
            >
              {" "}
              <input
                class="m-2 text-center form-control rounded"
                type="text"
                id="first"
                maxlength="1"
              />{" "}
              <input
                class="m-2 text-center form-control rounded"
                type="text"
                id="second"
                maxlength="1"
              />{" "}
              <input
                class="m-2 text-center form-control rounded"
                type="text"
                id="third"
                maxlength="1"
              />{" "}
              <input
                class="m-2 text-center form-control rounded"
                type="text"
                id="fourth"
                maxlength="1"
              />{" "}
              <input
                class="m-2 text-center form-control rounded"
                type="text"
                id="fifth"
                maxlength="1"
              />{" "}
              <input
                class="m-2 text-center form-control rounded"
                type="text"
                id="sixth"
                maxlength="1"
              />{" "}
            </div>
            <div class="mt-4">
              {" "}
              <button class="btn btn-danger px-4 validate">
                Validate
              </button>{" "}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
