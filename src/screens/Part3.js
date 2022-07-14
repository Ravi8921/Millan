import { Fragment } from "react";

export function Part3() {
  return (
    <Fragment>
      <div class="container-fluid">
        <div class="productSection clearfix">
          <div class="row">
            <div class=" col-xs-12 col-sm-6 col-md-6 col-lg-6">
              {" "}
              <a href="offer.aspx" class="prodSec">
                <div class="prodImg">
                  <img
                    class="lazy-loaded"
                    data-src="https://www.milaansearch.com/images/001.jpg"
                    alt="#"
                    style={{ width: 750 }}
                    src={require("../images/brand/1AA.jpg")}
                  />
                </div>
                <div class="prodDesc">
                  <h2>HELI Leadership Series</h2>
                  <p>To those who know the way, Show the way and Go the way.</p>
                </div>
                <span class="goBtn">
                  <i class="icon-arrow2"></i>
                </span>{" "}
              </a>{" "}
            </div>
            <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              {" "}
              <a href="news.aspx" class="prodSec ">
                <div class="prodImg">
                  <img
                    class="lazy-loaded"
                    data-src="https://www.milaansearch.com/images/004.jpg"
                    alt="#"
                    style={{ width: 700 }}
                    src={require("../images/brand/3AA.jpg")}
                    // src="https://www.milaansearch.com/images/004.jpg"
                  />
                </div>
                <div class="prodDesc">
                  <h2>what's new</h2>
                  <p>
                    Keep yourself updated with all the latest happenings in
                    HELI.
                  </p>
                </div>
                <span class="goBtn">
                  <i class="icon-arrow2"></i>
                </span>{" "}
              </a>{" "}
            </div>
            <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              {" "}
              <a href="/leadership/index.html" class="prodSec">
                <div class="prodImg">
                  <img
                    class="lazy-loaded"
                    data-src="	https://www.milaansearch.com/images/003.jpg
"
                    alt="#"
                    style={{ width: 700 }}
                    src={require("../images/heli/2A.jpg")}
                    // src="	https://www.milaansearch.com/images/003.jpg"
                  />
                </div>
                <div class="prodDesc">
                  <h2>monthly schemes</h2>
                  <p>
                    Click here to know the latest monthly schemes and special
                    offers.
                  </p>
                </div>
                <span class="goBtn">
                  <i class="icon-arrow2"></i>
                </span>
              </a>{" "}
            </div>
            <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              {" "}
              <a href="company-sucess-stories.aspx" class="prodSec ">
                <div class="prodImg">
                  <img
                    class="lazy-loaded"
                    data-src="images/002.jpg"
                    alt="#"
                    style={{ width: 700 }}
                    src={require("../images/brand/4AA.jpg")}
                    // src="	https://www.milaansearch.com/images/002.jpg"
                  />
                </div>
                <div class="prodDesc">
                  <h2>Car Achievers</h2>
                  <p>
                    Meet the HELI Dream Achievers who have purchased their dream
                    cars.
                  </p>
                </div>
                <span class="goBtn">
                  <i class="icon-arrow2"></i>
                </span>
              </a>{" "}
            </div>
          </div>
        </div>
        {/* <!-- @OUR BRAND --> */}
        <div class="brandSection clearfix">
          <h2 class="title">our brands</h2>
          <div class="brandssecWrap clearfix">
            <div class="row">
              <div class="col-xs-5 col-sm-3 col-md-2 col-lg-2">
                <a
                  href="/truman/index.html"
                  target="_blank"
                  title="Truman"
                  class="brandsimgWrap"
                >
                  <img
                    class="lazy-loaded"
                    data-src="images/brand/04.png"
                    alt="truman"
                    style={{ height: 50, width: 80 }}
                    src="https://telanganatoday.com/wp-content/uploads/2022/05/Instagram-users-irked-with-the-new-update.jpg"
                    // src={require("../images/brand/img04.png")}
                  />
                </a>
              </div>
              &nbsp;
              <div class="col-xs-5 col-sm-3 col-md-2 col-lg-2">
                <a
                  href="http://skinformula9.com/"
                  target="_blank"
                  title="Skin formula 9"
                  class="brandsimgWrap"
                >
                  <img
                    class="lazy-loaded"
                    alt="skin formula 9"
                    style={{ height: 40, width: 80 }}
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Facebook_New_Logo_%282015%29.svg/1200px-Facebook_New_Logo_%282015%29.svg.png"
                    //src={require("../images/brand/img03.png")}
                  />
                </a>
              </div>
              &nbsp;
              <div class="col-xs-5 col-sm-3 col-md-2 col-lg-2">
                <a
                  href="/Hyvest/index.html"
                  target="_blank"
                  title="Hyvest"
                  class="brandsimgWrap"
                >
                  <img
                    class="lazy-loaded"
                    // data-src="images/brand/08.png"
                    alt="Hyvest"
                    style={{ height: 40, width: 80 }}
                    src="https://www.punekarnews.in/wp-content/uploads/2021/03/Twitter.jpg"
                    // src={require("../images/brand/img08.png")}
                  />
                </a>
              </div>
              &nbsp;
              <div class="col-xs-5 col-sm-3 col-md-2 col-lg-2">
                <a
                  href="mistral-of-milaansearch/index.html"
                  target="_blank"
                  title="Mistral of milaansearch"
                  class="brandsimgWrap"
                >
                  <img
                    class="lazy-loaded"
                    data-src="images/brand/02.png"
                    alt="mistral of milaansearch"
                    style={{ height: 40, width: 70 }}
                    //src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Google_Images_2015_logo.svg/640px-Google_Images_2015_logo.svg.png"
                    src={require("../images/brand/Milan.jpg")}
                    //src="https://scontent-bom1-1.xx.fbcdn.net/v/t39.30808-1…p3ZTsDvHDa8Qn8hTSLsPMGSUgJD88pzTCGwFQ&oe=62D3C82B"
                  />
                </a>
              </div>
              &nbsp;
              <div class="col-xs-5 col-sm-3 col-md-2 col-lg-2">
                <a
                  href="/assure-natural/index.html"
                  target="_blank"
                  title="Assure-Natural"
                  class="brandsimgWrap"
                >
                  <img
                    class="lazy-loaded"
                    data-src="images/brand/AssureNatural184X151.png"
                    alt="Assure-Natural"
                    style={{ height: 40, width: 70, textAlign: "center" }}
                    src="https://www.freeiconspng.com/thumbs/youtube-logo-png/youtube-logo-png-picture-2.png"
                    // src={require("../images/HELI Logo.png")}
                  />
                </a>
              </div>
              &nbsp;
              <div class="col-xs-5 col-sm-3 col-md-2 col-lg-1">
                <a
                  href="/assure-natural/index.html"
                  target="_blank"
                  title="Heli"
                  class="brandsimgWrap"
                >
                  <img
                    class="lazy-loaded"
                    data-src="images/brand/AssureNatural184X151.png"
                    alt="Assure-Natural"
                    style={{ height: 55, width: 70, textAlign: "center" }}
                    src={require("../images/121.jpg")}
                    //src={require("../images/HELI Logo.png")}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        
       
        {/* <!-- @VIDEO SECTION --> */}
        <div class="videoSection  clearfix">
          <h2 class="title">Our Videos</h2>



<ul>
          <div class="card-group">
            <div class="card">
              <iframe
                width="100%"
                height={215}
                src="https://www.youtube.com/embed/7SmTOkTju60"
                frameborder="0"
                allowfullscreen=""
              ></iframe>
              <div class="card-body bg-dark carddd">
                <h5 class="card-title ">HELI</h5>

               
              </div>
            </div>{"   "}
            &nbsp; &nbsp;
            <div class="card">
              <iframe
                width="100%"
                height={215}
                //<iframe width="560" height="315" src="https://www.youtube.com/embed/q9Ija7-7sWs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                src="https://www.youtube.com/embed/q9Ija7-7sWs"
                frameborder="0"
                allowfullscreen=""
              ></iframe>
              <div class="card-body bg-dark carddd">
                <h5 class="card-title">HELI</h5>

             
              </div>
            </div>
            &nbsp; &nbsp;
            <div class="card">
              <iframe
                width="100%"
                height={215}
                src="https://www.youtube.com/embed/He-bLYCImyQ"
                frameborder="0"
                allowfullscreen=""
              ></iframe>
              <div class="card-body bg-dark carddd">
                <h5 class="card-title">HELI </h5>

                
              </div>
            </div>
          </div>
          </ul>
          {/* <ul class="row">
            <li class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <div class="videowrapbox">
                <div class="videosec">
                  <iframe
                    width="100%"
                    height={215}
                    src="https://www.youtube.com/embed/7SmTOkTju60"
                    frameborder="0"
                    allowfullscreen=""
                  ></iframe>
                </div>
              </div>
            </li>
            <li class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <div class="videowrapbox">
                <div class="videosec">
                  <iframe
                    width="100%"
                    height={215}
                    //<iframe width="560" height="315" src="https://www.youtube.com/embed/q9Ija7-7sWs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    src="https://www.youtube.com/embed/q9Ija7-7sWs"
                    frameborder="0"
                    allowfullscreen=""
                  ></iframe>
                </div>
              </div>
            </li>
            <li class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <div class="videowrapbox">
                <div class="videosec">
                  <iframe
                    width="100%"
                    height={215}
                    src="https://www.youtube.com/embed/He-bLYCImyQ"
                    frameborder="0"
                    allowfullscreen=""
                  ></iframe>
                </div>
              </div>
            </li>
          </ul> */}
          <div class="txtCenter carddd">
            <a
              href="media.aspx"
              class="buttonn greenColor"
              title="View More"
              data-text="View More"
            >
              View More
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

// {/* <!-- @REACH OUT --> */}
