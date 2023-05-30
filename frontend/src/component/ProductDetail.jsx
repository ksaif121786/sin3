import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function ProductDetail() {
    useEffect(() => {
        // alert()
    }, [])
    return (
        <>
            <div className="breadcrumb-area gray-bg">
                <div className="container">
                    <div className="breadcrumb-content">
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li className="active">Product Details </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="product-details pt-100 pb-90">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="product-details-img">
                                <img
                                    className="pro"
                                    src="assets/img/product/category1.svg"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="product-details-content">
                                <h4>Glory of the Snow</h4>
                                <span>$260.00</span>
                                <div className="in-stock">
                                    <p>
                                        Available: <span>In stock</span>
                                    </p>
                                </div>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry. Lorem Ipsum has been the industry's standard dummy text
                                    ever since the 1500s, when an unknown printer took a galley of
                                    type and scrambled it to make a type specimen book. It has
                                    survived not only five centuries, but also the leap into
                                    electronic typesetting, remaining essentially unchanged. It was
                                    popularised in the 1960s with the release of Letraset sheets
                                    containing Lorem Ipsum passages, and more recently with desktop
                                    publishing software like Aldus PageMaker including versions of
                                    Lorem Ipsum.
                                </p>
                                <div className="pro-details-cart-wrap">
                                    <div className="shop-list-cart-wishlist">
                                        <Link title="Add To Cart" to="/cart">
                                            <i className="ion-android-cart" />
                                        </Link>
                                        {/*<Link title="Wishlist" href="#">*/}
                                        {/*    <i class="ion-ios-heart-outline"></i>*/}
                                        {/*</Link>*/}
                                    </div>
                                    <div className="product-quantity">
                                        <div className="cart-plus-minus">
                                            <input
                                                className="cart-plus-minus-box"
                                                type="text"
                                                name="qtybutton"
                                                defaultValue={2}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="pro-dec-categories">
                                    <ul>
                                        <li className="categories-title">Categories:</li>
                                        <li>
                                            <a href="#">Fast Foods,</a>
                                        </li>
                                        <li>
                                            <a href="#"> Rich Foods, </a>
                                        </li>
                                        <li>
                                            <a href="#">Custom Orders,</a>
                                        </li>
                                        <li>
                                            <a href="#">Home Decor,</a>
                                        </li>
                                        <li>
                                            <a href="#">Weddings, </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="">
                                    <div className="createBtn">
                                        <button
                                            type="submit"
                                            className="btn"
                                            onclick="window.location.href='cart-page.php'"
                                        >
                                            View Cart
                                        </button>
                                    </div>
                                </div>
                                {/*<div class="pro-dec-categories">*/}
                                {/*    <ul>*/}
                                {/*        <li class="categories-title">Tags: </li>*/}
                                {/*        <li><Link href="#"> Cheesy,</Link></li>*/}
                                {/*        <li><Link href="#"> Fast Food, </Link></li>*/}
                                {/*        <li><Link href="#"> French Fries,</Link></li>*/}
                                {/*        <li><Link href="#"> Hamburger,</Link></li>*/}
                                {/*        <li><Link href="#"> Pizza </Link></li>*/}
                                {/*    </ul>*/}
                                {/*</div>*/}
                                {/*<div class="pro-dec-social">*/}
                                {/*    <ul>*/}
                                {/*        <li><Link class="tweet" href="#"><i class="ion-social-twitter"></i> Tweet</Link></li>*/}
                                {/*        <li><Link class="share" href="#"><i class="ion-social-facebook"></i> Share</Link></li>*/}
                                {/*        <li><Link class="google" href="#"><i class="ion-social-googleplus-outline"></i> Google+</Link></li>*/}
                                {/*        <li><Link class="pinterest" href="#"><i class="ion-social-pinterest"></i> Pinterest</Link></li>*/}
                                {/*    </ul>*/}
                                {/*</div>*/}
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
                                                    defaultValue={2}
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
