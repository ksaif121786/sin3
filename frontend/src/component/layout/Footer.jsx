import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <>
            <div className="footer-area black-bg-2 pt-70">
                <div className="footer-top-area pb-18">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="footer-about mb-40">
                                    <div className="footer-logo">
                                        <a href="index.php">
                                            <img src="assets/img/logo/footer-logo.png" alt="" />
                                        </a>
                                    </div>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                        eiusmod tempor incidi ut labore et dolore magna aliqua. Ut enim
                                        ad minim veniam,
                                    </p>
                                    {/*<div class="payment-img">*/}
                                    {/*    <a href="#">*/}
                                    {/*        <img src="assets/img/icon-img/payment.png" alt="">*/}
                                    {/*    </a>*/}
                                    {/*</div>*/}
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="footer-widget mb-40">
                                    <div className="footer-title mb-22">
                                        <h4>Information</h4>
                                    </div>
                                    <div className="footer-content">
                                        <ul>
                                            <li>
                                                <Link to="/">Home</Link>
                                            </li>
                                            <li>
                                                <Link to="/about">About Us</Link>
                                            </li>
                                            <li>
                                                <Link to="/contact">Contact Us</Link>
                                            </li>
                                            {/*<li><a href="javascript:void(0)">Privacy Policy</a></li>*/}
                                            {/*<li><a href="javascript:void(0)">Terms & Conditions</a></li>*/}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/*<div class="col-lg-2 col-md-6 col-sm-6">*/}
                            {/*    <div class="footer-widget mb-40">*/}
                            {/*        <div class="footer-title mb-22">*/}
                            {/*            <h4>My Account</h4>*/}
                            {/*        </div>*/}
                            {/*        <div class="footer-content">*/}
                            {/*            <ul>*/}
                            {/*                <li><a href="javascript:void(0)">My Account</a></li>*/}
                            {/*                <li><a href="javascript:void(0)">Order History</a></li>*/}
                            {/*            </ul>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="footer-widget mb-40">
                                    <div className="footer-title mb-22">
                                        <h4>Get in touch</h4>
                                    </div>
                                    <div className="footer-contact">
                                        <ul>
                                            <li>Address: 123 Main Your address goes here.</li>
                                            <li>Telephone Enquiry: (012) 800 456 789-987 </li>
                                            <li>
                                                Email: <a href="#">Info@example.com</a>
                                            </li>
                                        </ul>
                                    </div>
                                    {/*<div class="mt-35 footer-title mb-22">*/}
                                    {/*    <h4>Get in touch</h4>*/}
                                    {/*</div>*/}
                                    {/*<div class="footer-time">*/}
                                    {/*    <ul>*/}
                                    {/*        <li>Open:  <span>8:00 AM</span> - Close: <span>18:00 PM</span></li>*/}
                                    {/*        <li>Saturday - Sunday: <span>Close</span></li>*/}
                                    {/*    </ul>*/}
                                    {/*</div>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom-area border-top-4">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-7">
                                <div className="copyright">
                                    <p>
                                        © 2022 Copyright by <strong> Sinoy's </strong>
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-5">
                                <div className="footer-social">
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <i className="ion-social-facebook" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="ion-social-twitter" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="ion-social-instagram-outline" />
                                            </a>
                                        </li>
                                        {/*<li><a href="#"><i class="ion-social-googleplus-outline"></i></a></li>*/}
                                        {/*<li><a href="#"><i class="ion-social-rss"></i></a></li>*/}
                                        {/*<li><a href="#"><i class="ion-social-dribbble-outline"></i></a></li>*/}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Modal */}
            <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-md-5 col-sm-5 col-xs-12">
                                    {/* Thumbnail Large Image start */}
                                    <div className="tab-content">
                                        <div id="pro-1" className="tab-pane fade show active">
                                            <img
                                                src="assets/img/product-details/product-detalis-l1.jpg"
                                                alt=""
                                            />
                                        </div>
                                        <div id="pro-2" className="tab-pane fade">
                                            <img
                                                src="assets/img/product-details/product-detalis-l2.jpg"
                                                alt=""
                                            />
                                        </div>
                                        <div id="pro-3" className="tab-pane fade">
                                            <img
                                                src="assets/img/product-details/product-detalis-l3.jpg"
                                                alt=""
                                            />
                                        </div>
                                        <div id="pro-4" className="tab-pane fade">
                                            <img
                                                src="assets/img/product-details/product-detalis-l4.jpg"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                    {/* Thumbnail Large Image End */}
                                    {/* Thumbnail Image End */}
                                    <div className="product-thumbnail">
                                        <div
                                            className="thumb-menu owl-carousel nav nav-style"
                                            role="tablist"
                                        >
                                            <a className="active" data-bs-toggle="tab" href="#pro-1">
                                                <img
                                                    src="assets/img/product-details/product-detalis-s1.jpg"
                                                    alt=""
                                                />
                                            </a>
                                            <a data-bs-toggle="tab" href="#pro-2">
                                                <img
                                                    src="assets/img/product-details/product-detalis-s2.jpg"
                                                    alt=""
                                                />
                                            </a>
                                            <a data-bs-toggle="tab" href="#pro-3">
                                                <img
                                                    src="assets/img/product-details/product-detalis-s3.jpg"
                                                    alt=""
                                                />
                                            </a>
                                            <a data-bs-toggle="tab" href="#pro-4">
                                                <img
                                                    src="assets/img/product-details/product-detalis-s4.jpg"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                    </div>
                                    {/* Thumbnail image end */}
                                </div>
                                <div className="col-md-7 col-sm-7 col-xs-12">
                                    <div className="modal-pro-content">
                                        <h3>PRODUCTS NAME HERE </h3>
                                        <div className="product-price-wrapper">
                                            <span>$120.00</span>
                                            <span className="product-price-old">$162.00 </span>
                                        </div>
                                        <p>
                                            Pellentesque habitant morbi tristique senectus et netus et
                                            malesuada fames ac turpis egestas. Vestibulum tortor quam,
                                            feugiat vitae, ultricies eget, tempor sit amet.
                                        </p>
                                        <div className="quick-view-select">
                                            <div className="select-option-part">
                                                <label>Size*</label>
                                                <select className="select">
                                                    <option value="">S</option>
                                                    <option value="">M</option>
                                                    <option value="">L</option>
                                                </select>
                                            </div>
                                            <div className="quickview-color-wrap">
                                                <label>Color*</label>
                                                <div className="quickview-color">
                                                    <ul>
                                                        <li className="blue">b</li>
                                                        <li className="red">r</li>
                                                        <li className="pink">p</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-quantity">
                                            <div className="cart-plus-minus">
                                                <input
                                                    className="cart-plus-minus-box"
                                                    type="text"
                                                    name="qtybutton"
                                                    defaultValue={"02"}
                                                />
                                            </div>
                                            <button>Add to cart</button>
                                        </div>
                                        <span>
                                            <i className="fa fa-check" /> In stock
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Modal end */}
        </>

    );
}
