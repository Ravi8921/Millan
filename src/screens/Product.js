import { Fragment } from "react";
import p1 from "../images/Product/p1.jpg"
import p2 from "../images/Product/p2.jpg"
import p3 from "../images/Product/p3.jpg"
import p4 from "../images/Product/p4.jpg"
import p5 from "../images/Product/p5.jpg"
import "../styles/Product.css";
import { NavBar } from "./NavBar";
export function Product(){
    return(
        <Fragment>
            <div>
              <h1 style={{justifyContent:"center",display:"flex" ,fontWeight:"bold",backgroundColor:"GrayText"}}>Products</h1>
              {/* <NavBar /> */}
            <div className="container page-wrapper">
                <div className="page-inner">
                    <div className="row">
                        <div className="el-wrapper">
                            <div className="box-up">
                                <img className="img" src={p1} alt="" />
                                <div className="img-info">
                                    <div className="info-inner">
                                        <span className="p-name">PRIME MULTI VITA </span>
                                        <span className="p-company">60 Gummies</span>
                                    </div>

                                </div>
                            </div>

                            <div className="box-down">
                                <div className="h-bg">
                                    <div className="h-bg-inner"></div>
                                </div>

                                <a className="cart" href="#">
                                    <span className="price">₹ 825.00 </span>
                                    <span className="add-to-cart">
                                        <span className="txt">Add to cart</span>
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div className="el-wrapper">
                            <div className="box-up">
                                <img className="img" src={p2} alt="" />
                                <div className="img-info">
                                    <div className="info-inner">
                                        <span className="p-name">PRIME METAMIND 30'S </span>
                                        <span className="p-company">30 Tablets</span>
                                    </div>

                                </div>
                            </div>

                            <div className="box-down">
                                <div className="h-bg">
                                    <div className="h-bg-inner"></div>
                                </div>

                                <a className="cart" href="#">
                                    <span className="price">₹ 1400.00 </span>
                                    <span className="add-to-cart">
                                        <span className="txt">Add to cart</span>
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div className="el-wrapper">
                            <div className="box-up">
                                <img className="img" src={p3} alt="" />
                                <div className="img-info">
                                    <div className="info-inner">
                                        <span className="p-name">SEA BUCKTHORN CAPSULE</span>
                                        <span className="p-company">60 Veg. Capsules</span>
                                    </div>

                                </div>
                            </div>

                            <div className="box-down">
                                <div className="h-bg">
                                    <div className="h-bg-inner"></div>
                                </div>

                                <a className="cart" href="#">
                                    <span className="price">₹ 1000.00 </span>
                                    <span className="add-to-cart">
                                        <span className="txt">Add to cart</span>
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div className="el-wrapper">
                            <div className="box-up">
                                <img className="img" src={p4} alt="" />
                                <div className="img-info">
                                    <div className="info-inner">
                                        <span className="p-name">COMBIOTICS</span>
                                        <span className="p-company">30 capsules</span>
                                    </div>

                                </div>
                            </div>

                            <div className="box-down">
                                <div className="h-bg">
                                    <div className="h-bg-inner"></div>
                                </div>

                                <a className="cart" href="#">
                                    <span className="price">₹ 525.00 </span>
                                    <span className="add-to-cart">
                                        <span className="txt">Add to cart</span>
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div className="el-wrapper">
                            <div className="box-up">
                                <img className="img" src={p5} alt="" />
                                <div className="img-info">
                                    <div className="info-inner">
                                        <span className="p-name">KRILL OIL 500 </span>
                                        <span className="p-company">30 Gummies</span>
                                    </div>

                                </div>
                            </div>

                            <div className="box-down">
                                <div className="h-bg">
                                    <div className="h-bg-inner"></div>
                                </div>

                                <a className="cart" href="#">
                                    <span className="price">₹ 1435.00 </span>
                                    <span className="add-to-cart">
                                        <span className="txt">Add to cart</span>
                                    </span>
                                </a>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>


        </div>
    


        </Fragment>
    )
}