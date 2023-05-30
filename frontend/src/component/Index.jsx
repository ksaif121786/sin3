import React from 'react';
import { Link } from 'react-router-dom'
export default function Index() {
    return (
        <div className="categoriesSection pb-70">
            <div className="">
                <div className="categoriesContent">
                    {/*<div class="topSearchBox">*/}
                    {/*    <div class="searchinput">*/}
                    {/*        <span class="searchIcon"><img src="assets/img/search.svg" alt="img"></span>*/}
                    {/*        <input type="text" class="form-control" id="search" placeholder="Search" name="search">*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    <div className="">
                        {/* start of hero */}
                        <section className="hero-slider hero-style">
                            <div className="swiper-container">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <div
                                            className="slide-inner slide-bg-image"
                                            data-background="assets/img/banner_home.webp"
                                        >
                                            <div className="container">
                                                <div data-swiper-parallax={300} className="slide-title">
                                                    <h2>Why do we use it?</h2>
                                                </div>
                                                <div data-swiper-parallax={400} className="slide-text">
                                                    <p>It is a long established fact that a reader </p>
                                                </div>
                                                <div className="clearfix" />
                                                <div data-swiper-parallax={500} className="slide-btns">
                                                    <a href="#order_scroll" className="theme-btn-s2">
                                                        Order Now
                                                    </a>
                                                    {/*<a href="#" class="theme-btn-s3"><i class="fas fa-chevron-circle-right"></i> Get Info</a>*/}
                                                </div>
                                            </div>
                                        </div>
                                        {/* end slide-inner */}
                                    </div>
                                    {/* end swiper-slide */}
                                    <div className="swiper-slide">
                                        <div
                                            className="slide-inner slide-bg-image"
                                            data-background="assets/img/banner_new-min.jpg"
                                        >
                                            <div className="container">
                                                <div data-swiper-parallax={300} className="slide-title">
                                                    {/*<h2>Why do we use it?</h2>*/}
                                                </div>
                                                <div data-swiper-parallax={400} className="slide-text">
                                                    {/*<p>It is a long established fact that a reader</p>*/}
                                                </div>
                                                <div className="clearfix" />
                                                <div data-swiper-parallax={500} className="slide-btns">
                                                    {/*<a href="index.php" class="theme-btn-s2">Order Now</a>*/}
                                                    {/*<a href="#" class="theme-btn-s3"><i class="fas fa-chevron-circle-right"></i>Get Info</a>*/}
                                                </div>
                                            </div>
                                        </div>
                                        {/* end slide-inner */}
                                    </div>
                                    {/* end swiper-slide */}
                                </div>
                                {/* end swiper-wrapper */}
                                {/* swipper controls */}
                                <div className="swiper-pagination" />
                                <div className="swiper-button-next" />
                                <div className="swiper-button-prev" />
                            </div>
                        </section>
                        {/* end of hero slider */}
                    </div>
                    {/*<div class="slider-area">*/}
                    {/*    style="background-image:url(assets/img/banner.svg);"*/}
                    {/*    <div class="slider-active owl-dot-style owl-carousel">*/}
                    {/*        <div class="single-slider pt-210 pb-220 g-img">*/}
                    {/*            <div class="container">*/}
                    {/*                <div class="slider-content">*/}
                    {/*                    <div class="sliderText">*/}
                    {/*                        <h5>20% off on your <br>first purchase</h5>*/}
                    {/*                    </div>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*        <div class="single-slider pt-210 pb-220 g-img">*/}
                    {/*            <div class="container">*/}
                    {/*                <div class="slider-content">*/}
                    {/*                    <div class="sliderText">*/}
                    {/*                        <h5>40% off on your <br>first purchase</h5>*/}
                    {/*                    </div>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    <div className="product-area pb-70 pt-70" id="order_scroll">
                        <div className="custom-container container">
                            <div className="categoryBox">
                                <h4 className="categoryTtile">Categories</h4>
                                <div className="row justify-content-center">
                                    <div className="custom-col-5">
                                        <div className="product-wrapper mb-25">
                                            <div className="product-img">
                                                <Link to='/category-menu'>
                                                    <img src="assets/img/product/category1.svg" alt="" />
                                                </Link>
                                            </div>
                                            <div className="product-content">
                                                <h5>
                                                    <Link to='/category-menu'>Weekend Menu</Link>
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="custom-col-5">
                                        <div className="product-wrapper mb-25">
                                            <div className="product-img">
                                                <Link to='/category-menu'> <img src="assets/img/product/category2.svg" alt="" /></Link>
                                            </div>
                                            <div className="product-content">
                                                <h5>
                                                    <Link to='/category-menu'>Weekend Menu</Link>
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="custom-col-5">
                                        <div className="product-wrapper mb-25">
                                            <div className="product-img">
                                                <Link to='/category-menu'><img src="assets/img/product/category3.svg" alt="" /></Link>
                                            </div>
                                            <div className="product-content">
                                                <h5>
                                                    <Link to='/category-menu'>Diwali Special</Link>

                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="custom-col-5">
                                        <div className="product-wrapper mb-25">
                                            <div className="product-img">
                                                <a href="categories_menu.php">
                                                    <img src="assets/img/product/category4.svg" alt="" />
                                                </a>
                                            </div>
                                            <div className="product-content">
                                                <h5>
                                                    <Link to='/category-menu'>Christmas Special</Link>
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
