import { Fragment } from "react";
import { Link } from "react-router-dom";
import { FaArrowCircleLeft } from "react-icons/fa";
// import {FaArrowCircleLeft} from "react-icons/Fa";
export function Border() {
  return (
    <Fragment>
      <div class="pos-f-t ">
       
        <nav class="navbar navbar-dark bg-dark">
          <span>
            <button type="button" class="border  ">
              {" "}
              <Link to="/">
                <FaArrowCircleLeft />
              </Link>{" "}
            </button>
          </span>
          <button class="simplePopupClose1">  <Link to="/">X</Link></button>
        </nav>
      </div>
    </Fragment>
  );
}
