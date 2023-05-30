import React from 'react';
import { Link } from 'react-router-dom';
export default function CategoryMenu() {
    return (
        <>
            <div className="categoriesSection pt-70 pb-70">
                <div className="container">
                    <div className="categoriesContent">
                        <div className="product-area">
                            <div className="custom-container">
                                <div className="product-tab-list-wrap text-center mb-40">
                                    <div className="product-tab-list nav">
                                        <a className="active" href="#tab1" data-bs-toggle="tab">
                                            <h4>Pizza’s </h4>
                                        </a>
                                        <a href="#tab2" data-bs-toggle="tab">
                                            <h4>Sandwiches </h4>
                                        </a>
                                        <a href="#tab3" data-bs-toggle="tab">
                                            <h4> Burgers </h4>
                                        </a>
                                        <a href="#tab4" data-bs-toggle="tab">
                                            <h4> Fries </h4>
                                        </a>
                                    </div>
                                    {/*<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>*/}
                                </div>
                                <div className="tab-content jump">
                                    <div id="tab1" className="tab-pane active">
                                        <div className="row">
                                            <div className="custom-col-5">
                                                <div className="product-wrapper mb-25">
                                                    <div className="product-img">
                                                        <Link to="/product-detail">
                                                            <img src="assets/img/product/category2.svg" alt="" />
                                                        </Link>
                                                        {/*<span class="added1">Added</span>*/}
                                                    </div>
                                                    <div className="product_botom product-quantity">
                                                        <a title="Add to Cart" className="addCart1" href="#">
                                                            <i className="ion-android-cart" /> Add to cart
                                                        </a>
                                                        <div className="afterAdd1">
                                                            <div className="cart-plus-minus ">
                                                                <div className="dec qtybutton">-</div>
                                                                <input
                                                                    className="cart-plus-minus-box"
                                                                    type="text"
                                                                    name="qtybutton"
                                                                    defaultValue={1}
                                                                />
                                                                <div className="inc qtybutton">+</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="product-content">
                                                        <h4>
                                                            <Link to="/product-detail">PRODUCTS NAME HERE </Link>
                                                        </h4>
                                                        <div className="product-price-wrapper">
                                                            <span>$100.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="custom-col-5">
                                                <div className="product-wrapper mb-25">
                                                    <div className="product-img">
                                                        <Link to="/product-detail">
                                                            <img src="assets/img/product/category2.svg" alt="" />
                                                        </Link>
                                                    </div>
                                                    <div className="product_botom product-quantity">
                                                        <div className="cart-plus-minus">
                                                            <div className="dec qtybutton">-</div>
                                                            <input
                                                                className="cart-plus-minus-box"
                                                                type="text"
                                                                name="qtybutton"
                                                                defaultValue={1}
                                                            />
                                                            <div className="inc qtybutton">
                                                                {/* Button to Open the Modal */}
                                                                <button
                                                                    type="button"
                                                                    className="btn"
                                                                    data-bs-toggle="modal"
                                                                    data-bs-target="#myModal"
                                                                >
                                                                    +
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="product-content">
                                                        <h4>
                                                            <Link to="/product-detail">PRODUCTS NAME HERE </Link>
                                                        </h4>
                                                        <div className="product-price-wrapper">
                                                            <span>$200.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="custom-col-5">
                                                <div className="product-wrapper mb-25">
                                                    <div className="product-img">
                                                        <Link to="/product-detail">
                                                            <img src="assets/img/product/category2.svg" alt="" />
                                                        </Link>
                                                        {/*<span class="added2">Added</span>*/}
                                                    </div>
                                                    <div className="product_botom product-quantity">
                                                        <a title="Add to Cart" className="addCart2" href="#">
                                                            <i className="ion-android-cart" /> Add to cart
                                                        </a>
                                                        <div className="afterAdd2">
                                                            <div className="cart-plus-minus ">
                                                                <div className="dec qtybutton">-</div>
                                                                <input
                                                                    className="cart-plus-minus-box"
                                                                    type="text"
                                                                    name="qtybutton"
                                                                    defaultValue={1}
                                                                />
                                                                <div className="inc qtybutton">+</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="product-content">
                                                        <h4>
                                                            <Link to="/product-detail">PRODUCTS NAME HERE </Link>
                                                        </h4>
                                                        <div className="product-price-wrapper">
                                                            <span>$90.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="custom-col-5">
                                                <div className="product-wrapper mb-25">
                                                    <div className="product-img">
                                                        <Link to="/product-detail">
                                                            <img src="assets/img/product/category2.svg" alt="" />
                                                        </Link>
                                                    </div>
                                                    <div className="product_botom product-quantity">
                                                        <div className="cart-plus-minus">
                                                            <div className="dec qtybutton">-</div>
                                                            <input
                                                                className="cart-plus-minus-box"
                                                                id="cart1"
                                                                type="text"
                                                                name="qtybutton"
                                                                defaultValue={1}
                                                            />
                                                            <input
                                                                className="cart-plus-minus-box"
                                                                id="cart2"
                                                                type="text"
                                                                name="qtybutton"
                                                                defaultValue={2}
                                                            />
                                                            <div className="inc qtybutton">
                                                                {/* Button to Open the Modal */}
                                                                <button
                                                                    type="button"
                                                                    className="btn"
                                                                    data-bs-toggle="modal"
                                                                    data-bs-target="#myModal"
                                                                >
                                                                    +
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="product-content">
                                                        <h4>
                                                            <Link to="/product-detail">PRODUCTS NAME HERE </Link>
                                                        </h4>
                                                        <div className="product-price-wrapper">
                                                            <span>$50.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="custom-col-5">
                                                <div className="product-wrapper mb-25">
                                                    <div className="product-img">
                                                        <Link to="/product-detail">
                                                            <img src="assets/img/product/category2.svg" alt="" />
                                                        </Link>
                                                        {/*<span class="added3">Added</span>*/}
                                                    </div>
                                                    <div className="product_botom product-quantity">
                                                        <a title="Add to Cart" className="addCart3" href="#">
                                                            <i className="ion-android-cart" /> Add to cart
                                                        </a>
                                                        <div className="afterAdd3">
                                                            <div className="cart-plus-minus ">
                                                                <div className="dec qtybutton">-</div>
                                                                <input
                                                                    className="cart-plus-minus-box"
                                                                    type="text"
                                                                    name="qtybutton"
                                                                    defaultValue={1}
                                                                />
                                                                <div className="inc qtybutton">+</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="product-content">
                                                        <h4>
                                                            <Link to="/product-detail">PRODUCTS NAME HERE </Link>
                                                        </h4>
                                                        <div className="product-price-wrapper">
                                                            <span>$90.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="custom-col-5">
                                                <div className="product-wrapper mb-25">
                                                    <div className="product-img">
                                                        <Link to="/product-detail">
                                                            <img src="assets/img/product/category2.svg" alt="" />
                                                        </Link>
                                                        {/*<span class="added3">Added</span>*/}
                                                    </div>
                                                    <div className="product_botom product-quantity">
                                                        <a title="Add to Cart" className="addCart4" href="#">
                                                            <i className="ion-android-cart" /> Add to cart
                                                        </a>
                                                        <div className="afterAdd4">
                                                            <div className="cart-plus-minus ">
                                                                <div className="dec qtybutton">-</div>
                                                                <input
                                                                    className="cart-plus-minus-box"
                                                                    type="text"
                                                                    name="qtybutton"
                                                                    defaultValue={1}
                                                                />
                                                                <div className="inc qtybutton">+</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="product-content">
                                                        <h4>
                                                            <Link to="/product-detail">PRODUCTS NAME HERE </Link>
                                                        </h4>
                                                        <div className="product-price-wrapper">
                                                            <span>$90.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="custom-col-5">
                                                <div className="product-wrapper mb-25">
                                                    <div className="product-img">
                                                        <Link to="/product-detail">
                                                            <img src="assets/img/product/category2.svg" alt="" />
                                                        </Link>
                                                        {/*<span class="added3">Added</span>*/}
                                                    </div>
                                                    <div className="product_botom product-quantity">
                                                        <a title="Add to Cart" className="addCart5" href="#">
                                                            <i className="ion-android-cart" /> Add to cart
                                                        </a>
                                                        <div className="afterAdd5">
                                                            <div className="cart-plus-minus ">
                                                                <div className="dec qtybutton">-</div>
                                                                <input
                                                                    className="cart-plus-minus-box"
                                                                    type="text"
                                                                    name="qtybutton"
                                                                    defaultValue={1}
                                                                />
                                                                <div className="inc qtybutton">+</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="product-content">
                                                        <h4>
                                                            <Link to="/product-detail">PRODUCTS NAME HERE </Link>
                                                        </h4>
                                                        <div className="product-price-wrapper">
                                                            <span>$90.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="custom-col-5">
                                                <div className="product-wrapper mb-25">
                                                    <div className="product-img">
                                                        <Link to="/product-detail">
                                                            <img src="assets/img/product/category2.svg" alt="" />
                                                        </Link>
                                                        {/*<span class="added3">Added</span>*/}
                                                    </div>
                                                    <div className="product_botom product-quantity">
                                                        <a title="Add to Cart" className="addCart6" href="#">
                                                            <i className="ion-android-cart" /> Add to cart
                                                        </a>
                                                        <div className="afterAdd6">
                                                            <div className="cart-plus-minus ">
                                                                <div className="dec qtybutton">-</div>
                                                                <input
                                                                    className="cart-plus-minus-box"
                                                                    type="text"
                                                                    name="qtybutton"
                                                                    defaultValue={1}
                                                                />
                                                                <div className="inc qtybutton">+</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="product-content">
                                                        <h4>
                                                            <Link to="/product-detail">PRODUCTS NAME HERE </Link>
                                                        </h4>
                                                        <div className="product-price-wrapper">
                                                            <span>$90.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="custom-col-5">
                                                <div className="product-wrapper mb-25">
                                                    <div className="product-img">
                                                        <Link to="/product-detail">
                                                            <img src="assets/img/product/category2.svg" alt="" />
                                                        </Link>
                                                        {/*<span class="added3">Added</span>*/}
                                                    </div>
                                                    <div className="product_botom product-quantity">
                                                        <a title="Add to Cart" className="addCart7" href="#">
                                                            <i className="ion-android-cart" /> Add to cart
                                                        </a>
                                                        <div className="afterAdd7">
                                                            <div className="cart-plus-minus ">
                                                                <div className="dec qtybutton">-</div>
                                                                <input
                                                                    className="cart-plus-minus-box"
                                                                    type="text"
                                                                    name="qtybutton"
                                                                    defaultValue={1}
                                                                />
                                                                <div className="inc qtybutton">+</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="product-content">
                                                        <h4>
                                                            <Link to="/product-detail">PRODUCTS NAME HERE </Link>
                                                        </h4>
                                                        <div className="product-price-wrapper">
                                                            <span>$90.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="custom-col-5">
                                                <div className="product-wrapper mb-25">
                                                    <div className="product-img">
                                                        <Link to="/product-detail">
                                                            <img src="assets/img/product/category2.svg" alt="" />
                                                        </Link>
                                                        {/*<span class="added3">Added</span>*/}
                                                    </div>
                                                    <div className="product_botom product-quantity">
                                                        <a title="Add to Cart" className="addCart8" href="#">
                                                            <i className="ion-android-cart" /> Add to cart
                                                        </a>
                                                        <div className="afterAdd8">
                                                            <div className="cart-plus-minus ">
                                                                <div className="dec qtybutton">-</div>
                                                                <input
                                                                    className="cart-plus-minus-box"
                                                                    type="text"
                                                                    name="qtybutton"
                                                                    defaultValue={1}
                                                                />
                                                                <div className="inc qtybutton">+</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="product-content">
                                                        <h4>
                                                            <Link to="/product-detail">PRODUCTS NAME HERE </Link>
                                                        </h4>
                                                        <div className="product-price-wrapper">
                                                            <span>$90.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="tab2" className="tab-pane">
                                        <div className="row">
                                            <div className="custom-col-5">
                                                <div className="product-wrapper mb-25">
                                                    <div className="product-img">
                                                        <Link to="/product-detail">
                                                            <img src="assets/img/product/category1.svg" alt="" />
                                                        </Link>
                                                        {/*<span class="added1">Added</span>*/}
                                                    </div>
                                                    <div className="product_botom product-quantity">
                                                        <a title="Add to Cart" className="addCart1" href="#">
                                                            <i className="ion-android-cart" /> Add to cart
                                                        </a>
                                                        <div className="afterAdd1">
                                                            <div className="cart-plus-minus ">
                                                                <div className="dec qtybutton">-</div>
                                                                <input
                                                                    className="cart-plus-minus-box"
                                                                    type="text"
                                                                    name="qtybutton"
                                                                    defaultValue={1}
                                                                />
                                                                <div className="inc qtybutton">+</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="product-content">
                                                        <h4>
                                                            <Link to="/product-detail">PRODUCTS NAME HERE </Link>
                                                        </h4>
                                                        <div className="product-price-wrapper">
                                                            <span>$100.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="custom-col-5">
                                                <div className="product-wrapper mb-25">
                                                    <div className="product-img">
                                                        <Link to="/product-detail">
                                                            <img src="assets/img/product/category1.svg" alt="" />
                                                        </Link>
                                                    </div>
                                                    <div className="product_botom product-quantity">
                                                        <div className="cart-plus-minus">
                                                            <div className="dec qtybutton">-</div>
                                                            <input
                                                                className="cart-plus-minus-box"
                                                                type="text"
                                                                name="qtybutton"
                                                                defaultValue={1}
                                                            />
                                                            <div className="inc qtybutton">
                                                                {/* Button to Open the Modal */}
                                                                <button
                                                                    type="button"
                                                                    className="btn"
                                                                    data-bs-toggle="modal"
                                                                    data-bs-target="#myModal"
                                                                >
                                                                    +
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="product-content">
                                                        <h4>
                                                            <Link to="/product-detail">PRODUCTS NAME HERE </Link>
                                                        </h4>
                                                        <div className="product-price-wrapper">
                                                            <span>$200.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="custom-col-5">
                                                <div className="product-wrapper mb-25">
                                                    <div className="product-img">
                                                        <Link to="/product-detail">
                                                            <img src="assets/img/product/category1.svg" alt="" />
                                                        </Link>
                                                        {/*<span class="added2">Added</span>*/}
                                                    </div>
                                                    <div className="product_botom product-quantity">
                                                        <a title="Add to Cart" className="addCart2" href="#">
                                                            <i className="ion-android-cart" /> Add to cart
                                                        </a>
                                                        <div className="afterAdd2">
                                                            <div className="cart-plus-minus ">
                                                                <div className="dec qtybutton">-</div>
                                                                <input
                                                                    className="cart-plus-minus-box"
                                                                    type="text"
                                                                    name="qtybutton"
                                                                    defaultValue={1}
                                                                />
                                                                <div className="inc qtybutton">+</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="product-content">
                                                        <h4>
                                                            <Link to="/product-detail">PRODUCTS NAME HERE </Link>
                                                        </h4>
                                                        <div className="product-price-wrapper">
                                                            <span>$90.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="custom-col-5">
                                                <div className="product-wrapper mb-25">
                                                    <div className="product-img">
                                                        <Link to="/product-detail">
                                                            <img src="assets/img/product/category1.svg" alt="" />
                                                        </Link>
                                                    </div>
                                                    <div className="product_botom product-quantity">
                                                        <div className="cart-plus-minus">
                                                            <div className="dec qtybutton">-</div>
                                                            <input
                                                                className="cart-plus-minus-box"
                                                                id="cart1"
                                                                type="text"
                                                                name="qtybutton"
                                                                defaultValue={1}
                                                            />
                                                            <input
                                                                className="cart-plus-minus-box"
                                                                id="cart2"
                                                                type="text"
                                                                name="qtybutton"
                                                                defaultValue={2}
                                                            />
                                                            <div className="inc qtybutton">
                                                                {/* Button to Open the Modal */}
                                                                <button
                                                                    type="button"
                                                                    className="btn"
                                                                    data-bs-toggle="modal"
                                                                    data-bs-target="#myModal"
                                                                >
                                                                    +
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="product-content">
                                                        <h4>
                                                            <Link to="/product-detail">PRODUCTS NAME HERE </Link>
                                                        </h4>
                                                        <div className="product-price-wrapper">
                                                            <span>$50.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="custom-col-5">
                                                <div className="product-wrapper mb-25">
                                                    <div className="product-img">
                                                        <Link to="/product-detail">
                                                            <img src="assets/img/product/category1.svg" alt="" />
                                                        </Link>
                                                        {/*<span class="added3">Added</span>*/}
                                                    </div>
                                                    <div className="product_botom product-quantity">
                                                        <a title="Add to Cart" className="addCart3" href="#">
                                                            <i className="ion-android-cart" /> Add to cart
                                                        </a>
                                                        <div className="afterAdd3">
                                                            <div className="cart-plus-minus ">
                                                                <div className="dec qtybutton">-</div>
                                                                <input
                                                                    className="cart-plus-minus-box"
                                                                    type="text"
                                                                    name="qtybutton"
                                                                    defaultValue={1}
                                                                />
                                                                <div className="inc qtybutton">+</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="product-content">
                                                        <h4>
                                                            <Link to="/product-detail">PRODUCTS NAME HERE </Link>
                                                        </h4>
                                                        <div className="product-price-wrapper">
                                                            <span>$90.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="tab3" className="tab-pane">
                                        <div className="row">
                                            <div className="custom-col-5">
                                                <div className="product-wrapper mb-25">
                                                    <div className="product-img">
                                                        <Link to="/product-detail">
                                                            <img src="assets/img/product/category1.svg" alt="" />
                                                        </Link>
                                                        {/*<span class="added1">Added</span>*/}
                                                    </div>
                                                    <div className="product_botom product-quantity">
                                                        <a title="Add to Cart" className="addCart1" href="#">
                                                            <i className="ion-android-cart" /> Add to cart
                                                        </a>
                                                        <div className="afterAdd1">
                                                            <div className="cart-plus-minus ">
                                                                <div className="dec qtybutton">-</div>
                                                                <input
                                                                    className="cart-plus-minus-box"
                                                                    type="text"
                                                                    name="qtybutton"
                                                                    defaultValue={1}
                                                                />
                                                                <div className="inc qtybutton">+</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="product-content">
                                                        <h4>
                                                            <Link to="/product-detail">PRODUCTS NAME HERE </Link>
                                                        </h4>
                                                        <div className="product-price-wrapper">
                                                            <span>$100.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="custom-col-5">
                                                <div className="product-wrapper mb-25">
                                                    <div className="product-img">
                                                        <Link to="/product-detail">
                                                            <img src="assets/img/product/category2.svg" alt="" />
                                                        </Link>
                                                    </div>
                                                    <div className="product_botom product-quantity">
                                                        <div className="cart-plus-minus">
                                                            <div className="dec qtybutton">-</div>
                                                            <input
                                                                className="cart-plus-minus-box"
                                                                type="text"
                                                                name="qtybutton"
                                                                defaultValue={1}
                                                            />
                                                            <div className="inc qtybutton">
                                                                {/* Button to Open the Modal */}
                                                                <button
                                                                    type="button"
                                                                    className="btn"
                                                                    data-bs-toggle="modal"
                                                                    data-bs-target="#myModal"
                                                                >
                                                                    +
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="product-content">
                                                        <h4>
                                                            <Link to="/product-detail">PRODUCTS NAME HERE </Link>
                                                        </h4>
                                                        <div className="product-price-wrapper">
                                                            <span>$200.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="custom-col-5">
                                                <div className="product-wrapper mb-25">
                                                    <div className="product-img">
                                                        <Link to="/product-detail">
                                                            <img src="assets/img/product/category3.svg" alt="" />
                                                        </Link>
                                                        {/*<span class="added2">Added</span>*/}
                                                    </div>
                                                    <div className="product_botom product-quantity">
                                                        <a title="Add to Cart" className="addCart2" href="#">
                                                            <i className="ion-android-cart" /> Add to cart
                                                        </a>
                                                        <div className="afterAdd2">
                                                            <div className="cart-plus-minus ">
                                                                <div className="dec qtybutton">-</div>
                                                                <input
                                                                    className="cart-plus-minus-box"
                                                                    type="text"
                                                                    name="qtybutton"
                                                                    defaultValue={1}
                                                                />
                                                                <div className="inc qtybutton">+</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="product-content">
                                                        <h4>
                                                            <Link to="/product-detail">PRODUCTS NAME HERE </Link>
                                                        </h4>
                                                        <div className="product-price-wrapper">
                                                            <span>$90.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="custom-col-5">
                                                <div className="product-wrapper mb-25">
                                                    <div className="product-img">
                                                        <Link to="/product-detail">
                                                            <img src="assets/img/product/category4.svg" alt="" />
                                                        </Link>
                                                    </div>
                                                    <div className="product_botom product-quantity">
                                                        <div className="cart-plus-minus">
                                                            <div className="dec qtybutton">-</div>
                                                            <input
                                                                className="cart-plus-minus-box"
                                                                id="cart1"
                                                                type="text"
                                                                name="qtybutton"
                                                                defaultValue={1}
                                                            />
                                                            <input
                                                                className="cart-plus-minus-box"
                                                                id="cart2"
                                                                type="text"
                                                                name="qtybutton"
                                                                defaultValue={2}
                                                            />
                                                            <div className="inc qtybutton">
                                                                {/* Button to Open the Modal */}
                                                                <button
                                                                    type="button"
                                                                    className="btn"
                                                                    data-bs-toggle="modal"
                                                                    data-bs-target="#myModal"
                                                                >
                                                                    +
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="product-content">
                                                        <h4>
                                                            <Link to="/product-detail">PRODUCTS NAME HERE </Link>
                                                        </h4>
                                                        <div className="product-price-wrapper">
                                                            <span>$50.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="custom-col-5">
                                                <div className="product-wrapper mb-25">
                                                    <div className="product-img">
                                                        <Link to="/product-detail">
                                                            <img src="assets/img/product/category3.svg" alt="" />
                                                        </Link>
                                                        {/*<span class="added3">Added</span>*/}
                                                    </div>
                                                    <div className="product_botom product-quantity">
                                                        <a title="Add to Cart" className="addCart3" href="#">
                                                            <i className="ion-android-cart" /> Add to cart
                                                        </a>
                                                        <div className="afterAdd3">
                                                            <div className="cart-plus-minus ">
                                                                <div className="dec qtybutton">-</div>
                                                                <input
                                                                    className="cart-plus-minus-box"
                                                                    type="text"
                                                                    name="qtybutton"
                                                                    defaultValue={1}
                                                                />
                                                                <div className="inc qtybutton">+</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="product-content">
                                                        <h4>
                                                            <Link to="/product-detail">PRODUCTS NAME HERE </Link>
                                                        </h4>
                                                        <div className="product-price-wrapper">
                                                            <span>$90.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="tab4" className="tab-pane">
                                        <div className="row">
                                            <div className="custom-col-5">
                                                <div className="product-wrapper mb-25">
                                                    <div className="product-img">
                                                        <Link to="/product-detail">
                                                            <img src="assets/img/product/category4.svg" alt="" />
                                                        </Link>
                                                        {/*<span class="added1">Added</span>*/}
                                                    </div>
                                                    <div className="product_botom product-quantity">
                                                        <a title="Add to Cart" className="addCart1" href="#">
                                                            <i className="ion-android-cart" /> Add to cart
                                                        </a>
                                                        <div className="afterAdd1">
                                                            <div className="cart-plus-minus ">
                                                                <div className="dec qtybutton">-</div>
                                                                <input
                                                                    className="cart-plus-minus-box"
                                                                    type="text"
                                                                    name="qtybutton"
                                                                    defaultValue={1}
                                                                />
                                                                <div className="inc qtybutton">+</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="product-content">
                                                        <h4>
                                                            <Link to="/product-detail">PRODUCTS NAME HERE </Link>
                                                        </h4>
                                                        <div className="product-price-wrapper">
                                                            <span>$100.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="custom-col-5">
                                                <div className="product-wrapper mb-25">
                                                    <div className="product-img">
                                                        <Link to="/product-detail">
                                                            <img src="assets/img/product/category4.svg" alt="" />
                                                        </Link>
                                                    </div>
                                                    <div className="product_botom product-quantity">
                                                        <div className="cart-plus-minus">
                                                            <div className="dec qtybutton">-</div>
                                                            <input
                                                                className="cart-plus-minus-box"
                                                                type="text"
                                                                name="qtybutton"
                                                                defaultValue={1}
                                                            />
                                                            <div className="inc qtybutton">
                                                                {/* Button to Open the Modal */}
                                                                <button
                                                                    type="button"
                                                                    className="btn"
                                                                    data-bs-toggle="modal"
                                                                    data-bs-target="#myModal"
                                                                >
                                                                    +
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="product-content">
                                                        <h4>
                                                            <Link to="/product-detail">PRODUCTS NAME HERE </Link>
                                                        </h4>
                                                        <div className="product-price-wrapper">
                                                            <span>$200.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="custom-col-5">
                                                <div className="product-wrapper mb-25">
                                                    <div className="product-img">
                                                        <Link to="/product-detail">
                                                            <img src="assets/img/product/category4.svg" alt="" />
                                                        </Link>
                                                        {/*<span class="added2">Added</span>*/}
                                                    </div>
                                                    <div className="product_botom product-quantity">
                                                        <a title="Add to Cart" className="addCart2" href="#">
                                                            <i className="ion-android-cart" /> Add to cart
                                                        </a>
                                                        <div className="afterAdd2">
                                                            <div className="cart-plus-minus ">
                                                                <div className="dec qtybutton">-</div>
                                                                <input
                                                                    className="cart-plus-minus-box"
                                                                    type="text"
                                                                    name="qtybutton"
                                                                    defaultValue={1}
                                                                />
                                                                <div className="inc qtybutton">+</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="product-content">
                                                        <h4>
                                                            <Link to="/product-detail">PRODUCTS NAME HERE </Link>
                                                        </h4>
                                                        <div className="product-price-wrapper">
                                                            <span>$90.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="custom-col-5">
                                                <div className="product-wrapper mb-25">
                                                    <div className="product-img">
                                                        <Link to="/product-detail">
                                                            <img src="assets/img/product/category4.svg" alt="" />
                                                        </Link>
                                                    </div>
                                                    <div className="product_botom product-quantity">
                                                        <div className="cart-plus-minus">
                                                            <div className="dec qtybutton">-</div>
                                                            <input
                                                                className="cart-plus-minus-box"
                                                                id="cart1"
                                                                type="text"
                                                                name="qtybutton"
                                                                defaultValue={1}
                                                            />
                                                            <input
                                                                className="cart-plus-minus-box"
                                                                id="cart2"
                                                                type="text"
                                                                name="qtybutton"
                                                                defaultValue={2}
                                                            />
                                                            <div className="inc qtybutton">
                                                                {/* Button to Open the Modal */}
                                                                <button
                                                                    type="button"
                                                                    className="btn"
                                                                    data-bs-toggle="modal"
                                                                    data-bs-target="#myModal"
                                                                >
                                                                    +
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="product-content">
                                                        <h4>
                                                            <Link to="/product-detail">PRODUCTS NAME HERE </Link>
                                                        </h4>
                                                        <div className="product-price-wrapper">
                                                            <span>$50.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="custom-col-5">
                                                <div className="product-wrapper mb-25">
                                                    <div className="product-img">
                                                        <Link to="/product-detail">
                                                            <img src="assets/img/product/category4.svg" alt="" />
                                                        </Link>
                                                        {/*<span class="added3">Added</span>*/}
                                                    </div>
                                                    <div className="product_botom product-quantity">
                                                        <a title="Add to Cart" className="addCart3" href="#">
                                                            <i className="ion-android-cart" /> Add to cart
                                                        </a>
                                                        <div className="afterAdd3">
                                                            <div className="cart-plus-minus ">
                                                                <div className="dec qtybutton">-</div>
                                                                <input
                                                                    className="cart-plus-minus-box"
                                                                    type="text"
                                                                    name="qtybutton"
                                                                    defaultValue={1}
                                                                />
                                                                <div className="inc qtybutton">+</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="product-content">
                                                        <h4>
                                                            <Link to="/product-detail">PRODUCTS NAME HERE </Link>
                                                        </h4>
                                                        <div className="product-price-wrapper">
                                                            <span>$90.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <nav aria-label="Page navigation">
                                    <ul className="pagination">
                                        <li>
                                            <a href="#" aria-label="Previous">
                                                <span aria-hidden="true">
                                                    <i className="fa fa-chevron-left" aria-hidden="true" />
                                                </span>
                                            </a>
                                        </li>
                                        <li className="active">
                                            <a href="#">01</a>
                                        </li>
                                        <li>
                                            <a href="#">02</a>
                                        </li>
                                        <li>
                                            <a href="#">03</a>
                                        </li>
                                        <li>
                                            <a href="#" aria-label="Next">
                                                <span aria-hidden="true">
                                                    <i className="fa fa-chevron-right" aria-hidden="true" />
                                                </span>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* The Modal */}
            <div className="modal" id="myModal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        {/* Modal Header */}
                        <div className="modal-header">
                            <h4 className="modal-title">Cheese Pizza .$20</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" />
                        </div>
                        {/* Modal body */}
                        <div className="modal-body">
                            <h5 className="addonTitle">Add Addons (Optional)</h5>
                            <div className="addonsBox">
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <span className="extraAdd">
                                            Extra cheese <span className="priceSpan">$5</span>
                                        </span>{" "}
                                        <input
                                            type="radio"
                                            className="form-check-input"
                                            name="optradio"
                                        />
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <span className="extraAdd">
                                            Dip cheese <span className="priceSpan">$7</span>
                                        </span>
                                        <input
                                            type="radio"
                                            className="form-check-input"
                                            name="optradio"
                                        />
                                    </label>
                                </div>
                                <div className="form-check disabled">
                                    <label className="form-check-label">
                                        <span className="extraAdd">
                                            Extra Sauce <span className="priceSpan">$10</span>
                                        </span>
                                        <input
                                            type="radio"
                                            className="form-check-input"
                                            name="optradio"
                                        />
                                    </label>
                                </div>
                            </div>
                        </div>
                        {/* Modal footer */}
                        <div className="modal-footer">
                            {/*<button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>*/}
                            <Link
                                title="Add to Cart"
                                className="btn addCart"
                                to="categories-menu"
                            >
                                <i className="ion-android-cart" /> Add to cart
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}
