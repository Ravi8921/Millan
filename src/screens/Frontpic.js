import Carousel from 'react-bootstrap/Carousel';



import { Fragment } from "react";
import { Button } from "react-bootstrap";
import { Part5 } from "./Part5";
// import Button from 'react-bootstrap/Button';

export function Frontpic() {
  return (
    <Fragment>
     
    <Carousel className='topfront  carousel-fade heli'>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          style={{ height: 350 }}
          src="	https://www.myvestige.com/images/2-Crore-Pool-Web-banner-Jul22.jpg"
          // src="holder.js/800x400?text=First slide&bg=373940"
          alt="First slide"
        />
        <Carousel.Caption>
        <h3> <Part5 /></h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100 carousel-fade"
         style={{ height: 350 }}
          src={require("../images/brand/11.jpg")}
          // src="holder.js/800x400?text=Second slide&bg=282c34"
          alt="Second slide"
        />
        <Carousel.Caption>
        <h3> <Part5 /></h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
         style={{ height: 350 }}
              src={require("../images/heli/2.jpg")}
          // src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />
        <Carousel.Caption>
        <h3> <Part5 /></h3>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          style={{ height: 350 }}
              src={require("../images/brand/111.jpg")}
          // src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="fourth slide"
        />
        <Carousel.Caption>
          <h3> <Part5 /></h3>
          {/* <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  



      {/* <div 
        id="carouselExampleCaptions"
        class="carousel slide topfront"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="Button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
           <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
            
             // style={{ height: 500 }}
              src={require("../images/brand/11.jpg")}
              //src="https://images.unsplash.com/photo-1646495191965-05f13a3f194c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption d-md-block">
              <Part5 />
            </div>
          </div>
          <div class="carousel-item">
            <img
             // style={{ height: 500 }}
              src={require("../images/heli/1.jpg")}
              //src="https://images.unsplash.com/photo-1655212874354-5dace1fdc6ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption  d-md-block">
              <Part5 />
            </div>



            
          </div>
          <div class="carousel-item">
            <img
             // style={{ height: 500 }}
              src={require("../images/brand/33.jpg")}
             // src="https://images.unsplash.com/photo-1654240878922-158e0ab5f685?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDExM3w2c01WalRMU2tlUXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60"
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption  d-md-block">
              

              <Part5 />
            </div>
          </div>
          <div class="carousel-item">
            <img
             // style={{ height: 500 }}
              src={require("../images/brand/111.jpg")}
             // src="https://images.unsplash.com/photo-1654240878922-158e0ab5f685?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDExM3w2c01WalRMU2tlUXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60"
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption  d-md-block">
              

              <Part5 />
            </div>
          </div>



        </div>
        <button
          class="carousel-control-prev "
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div> */}
    
    </Fragment>
  );
}
