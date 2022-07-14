import { Fragment } from "react";
import "../styles/Part5.css";
import { Link } from "react-router-dom";

export function Part5() {
  return (
    <Fragment>
    <div class="newSchemeBtn ">

      <Link className="btn btn-md abc redColor" to=''>Grievance Redressal</Link>
                {/* <a
                  href="#Grievance"
                  class="btn redColor"
                  data-text="Grievance Redressal"
                >
                  <i class="icon-clock"></i> Grievance Redressal
                </a> */}

                <a
                  href="https://play.google.com/store/apps/details?id=com.milaan.mart"
                  class="btn blueColor abc"
                  data-text="Mobile App"
                >
                  <i class="icon-mobile"></i> Mobile app
                </a>

                <a
                  href="training-event.aspx"
                  class="btn blueColor abc"
                  data-text="Schedule"
                >
                  <i class="icon-clock "></i> Schedule
                </a>
               

                <a
                  id="btnBankPan"
                  href="#"
                  class="btn redColor abc"
                  data-text="Bank Pan"
                >
                  <i class="icon-bank"></i> Bank Pan
                </a>
              </div>
    </Fragment>
  );
}
