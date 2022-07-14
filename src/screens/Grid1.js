import { Fragment } from "react";

export function Grid1() {
  return (
    <Fragment>
      <div class="row grid-container">
        <div class="col">
          {" "}
          DOWNLINE
          <h5>Check your downline by entering your Distributor</h5>
        </div>
      </div>

      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active">
              <a class="nav-link" >
                Downline of : <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" >
                <div> 90616755 Abhimanyu kumar</div>
              </a>
            </li>
            <li class="nav-item col">
              <a class="nav-link disabled" href="#">
                search by:
              </a>
            </li>
          </ul>

          <form class="form-inline my-2 my-lg-0">
            <div>
              <input
                class="form-check-input"
                type="checkbox"
                id="checkboxNoLabel"
                value=""
                aria-label="..."
              />
            </div>

            <label class="form-check-label col" for="exampleRadios1">
              DistributorId
            </label>

            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Enter your distributor ID"
              aria-label="Search"
            />
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </Fragment>
  );
}

{
  /* <div class="row grid-container">
        <div class="col">
          {" "}
          DOWNLINE
          <h5>Check your downline by entering your Distributor</h5>
        </div>
      </div>

      <div class="row bcol">
        <div class="col-3">
          Downline of :<div> 90616755 Abhimanyu kumar</div>
        </div>

        <div class="col-1">Search By </div>
        <div class="col-4">
          <div class="form-check">
            <div>
              <input
                class="form-check-input"
                type="checkbox"
                id="checkboxNoLabel"
                value=""
                aria-label="..."
              />
            </div>
            <form class="form-inline">
              <div class="form-group mb-2">
                <label class="form-check-label" for="exampleRadios1">
                  DistributorId
                </label>
              </div>
              <div class="form-group mx-sm-3 mb-2">
                <label for="inputPassword2" class="sr-only">
                  Password
                </label>
               
               
               
                <input
                  type="password"
                  class="form-control"
                  id="inputPassword2"
                  placeholder="Enter your distributor ID"
                />
              </div>


              <button type="submit" class="btn btn-primary mb-3">
               submit
              </button>
            </form> */
}
{
  /* <label class="form-check-label" for="exampleRadios1">
              DistributorId
            </label>

            <form class="form-inline">
              <div class="form-group mx-sm-2 mb-2">
                <input
                  type="password"
                  class="form-control"
                  id="inputPassword2"
                  placeholder="Enter your distributor ID"
                />
                <button type="submit " class="btn btn-primary ">
                  Submit
                </button>
              </div>
            </form> */
}
{
  /* </div>{" "}
        </div>
      </div> */
}

//    <div class="row grid-container1 text-center text-nowrap">
