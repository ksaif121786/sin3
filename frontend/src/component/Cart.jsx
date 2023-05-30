import React from 'react';
import { Link } from 'react-router-dom'
export default function Cart() {
    return (
        <>
            <div className="breadcrumb-area gray-bg">
                <div className="container">
                    <div className="breadcrumb-content">
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li className="active">Cart </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* shopping-cart-area start */}
            <div className="cart-main-area pt-95 pb-100">
                <div className="container">
                    <h3 className="page-title">Your cart items</h3>
                    <div className="row">
                        <div className="col-lg-7 col-sm-12 col-12">
                            <form action="#">
                                <div className="table-content table-responsive">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Image</th>
                                                <th>Product Name</th>
                                                {/*<th>Until Price</th>*/}
                                                <th>Qty</th>
                                                <th>Subtotal</th>
                                                {/*<th>action</th>*/}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="product-thumbnail">
                                                    <a href="#">
                                                        <img src="assets/img/cart/cart-3.jpg" alt="" />
                                                    </a>
                                                    <span className="deletPro">
                                                        <i className="fa fa-trash" aria-hidden="true" />
                                                    </span>
                                                </td>
                                                <td className="product-name">
                                                    <a href="#">Product Name </a>
                                                    <br />
                                                    <span className="amount">$260.00</span>
                                                </td>
                                                {/*<td class="product-price-cart"></td>*/}
                                                <td className="product-quantity">
                                                    <div className="cart-plus-minus">
                                                        <input
                                                            className="cart-plus-minus-box"
                                                            type="text"
                                                            name="qtybutton"
                                                            defaultValue={2}
                                                        />
                                                    </div>
                                                </td>
                                                <td className="product-subtotal">$110.00</td>
                                                {/* <td class="product-remove">*/}
                                                {/*     <a href="#"><i class="fa fa-times"></i></a>*/}
                                                {/*</td>*/}
                                            </tr>
                                            <tr>
                                                <td className="product-thumbnail">
                                                    <a href="#">
                                                        <img src="assets/img/cart/cart-4.jpg" alt="" />
                                                    </a>
                                                    <span className="deletPro">
                                                        <i className="fa fa-trash" aria-hidden="true" />
                                                        {/*<i class="fa fa-times"></i>*/}
                                                    </span>
                                                </td>
                                                <td className="product-name">
                                                    <a href="#">Product Name </a>
                                                    <br />
                                                    <span className="amount">$260.00</span>
                                                </td>
                                                {/*<td class="product-price-cart"><span class="amount">$150.00</span></td>*/}
                                                <td className="product-quantity">
                                                    <div className="cart-plus-minus">
                                                        <input
                                                            className="cart-plus-minus-box"
                                                            type="text"
                                                            name="qtybutton"
                                                            defaultValue={2}
                                                        />
                                                    </div>
                                                </td>
                                                <td className="product-subtotal">$150.00</td>
                                                {/* <td class="product-remove">*/}
                                                {/*     <a href="#"><i class="fa fa-times"></i></a>*/}
                                                {/*</td>*/}
                                            </tr>
                                            <tr>
                                                <td className="product-thumbnail">
                                                    <a href="#">
                                                        <img src="assets/img/cart/cart-5.jpg" alt="" />
                                                    </a>
                                                    <span className="deletPro">
                                                        <i className="fa fa-trash" aria-hidden="true" />
                                                    </span>
                                                </td>
                                                <td className="product-name">
                                                    <a href="#">Product Name </a>
                                                    <br />
                                                    <span className="amount">$260.00</span>
                                                </td>
                                                {/*<td class="product-price-cart"><span class="amount">$170.00</span></td>*/}
                                                <td className="product-quantity">
                                                    <div className="cart-plus-minus">
                                                        <input
                                                            className="cart-plus-minus-box"
                                                            type="text"
                                                            name="qtybutton"
                                                            defaultValue={2}
                                                        />
                                                    </div>
                                                </td>
                                                <td className="product-subtotal">$170.00</td>
                                                {/* <td class="product-remove">*/}
                                                {/*     <a href="#"><i class="fa fa-times"></i></a>*/}
                                                {/*</td>*/}
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="cart-shiping-update-wrapper">
                                            <div className="cart-shiping-update">
                                                <Link to="/category-menu">Continue Shopping</Link>
                                            </div>
                                            <div className="cart-clear">
                                                {/*<button>Update Shopping Cart</button>*/}
                                                {/*<a href="#">Clear Shopping Cart</a>*/}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-lg-5 col-sm-12 col-12">
                            <div className="grand-totall">
                                <div className="title-wrap">
                                    <h4 className="cart-bottom-title section-bg-gary-cart">
                                        Shopping Cart{" "}
                                    </h4>
                                    <div className="phoneField">
                                        <span className="phoneImg">
                                            <img src="assets/img/et_map-pin.svg" alt="img" />
                                        </span>
                                        <h6 className="locationBox">
                                            <span>Pickup at</span>
                                            <span>Akshya Nagar 1st Block 1st ....</span>
                                        </h6>
                                        {/*<input type="text" class="form-control" id="location" placeholder="Pickup at" name="location" >*/}
                                    </div>
                                </div>
                                <div className="total-shipping">
                                    <h5>Pickup Schedule</h5>
                                    <ul>
                                        <li>
                                            <input type="radio" name="pickup" /> Saturday{" "}
                                            <span>(Order before 23 friday 11:00 PM)</span>
                                        </li>
                                        <li>
                                            <input type="radio" name="pickup" /> Sunday{" "}
                                            <span>(Order before 29 saturday 11:00 PM)</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="pickupNotes">
                                    <div className="form-group">
                                        {/*<label for="comment">Enter Notes ( It Any):</label>*/}
                                        <textarea
                                            className="form-control"
                                            rows={6}
                                            id="comment"
                                            placeholder="Enter Notes ( It Any)"
                                            defaultValue={""}
                                        />
                                    </div>
                                </div>
                                <div className="subTotalBox">
                                    <h5>
                                        SubTotal <span>$260.00</span>
                                    </h5>
                                    <h5>
                                        VAT (14.5%) <span>$14.5</span>
                                    </h5>
                                </div>
                                <h4 className="grand-totall-title">
                                    Grand Total <span>$274.5</span>
                                </h4>
                                <div className="paymentBox">
                                    <div className="ship-wrapper">
                                        <div className="single-ship">
                                            <input
                                                type="radio"
                                                defaultChecked=""
                                                defaultValue="cash"
                                                name="payCard"
                                            />
                                            <label>Cash </label>
                                        </div>
                                        <div className="single-ship">
                                            <input type="radio" defaultValue="pay" name="payCard" />
                                            <label>Credit / Debit</label>
                                        </div>
                                    </div>
                                    <div className="payment-info">
                                        <div className="row">
                                            <div className="col-lg-12 col-md-12">
                                                <div className="billing-info">
                                                    <label>Name on Card </label>
                                                    <input type="text" />
                                                </div>
                                            </div>
                                            {/*<div class="col-lg-6 col-md-6">*/}
                                            {/*    <div class="billing-select">*/}
                                            {/*        <label>Credit Card Type</label>*/}
                                            {/*        <select>*/}
                                            {/*            <option>American Express</option>*/}
                                            {/*            <option>Visa</option>*/}
                                            {/*            <option>MasterCard</option>*/}
                                            {/*            <option>Discover</option>*/}
                                            {/*        </select>*/}
                                            {/*    </div>*/}
                                            {/*</div>*/}
                                            <div className="col-lg-12 col-md-12">
                                                <div className="billing-info">
                                                    <label>Credit Card Number </label>
                                                    <input type="text" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="expiration-date">
                                            <label>Expiration Date </label>
                                            <div className="row">
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="billing-select">
                                                        <select>
                                                            <option>Month</option>
                                                            <option>January</option>
                                                            <option>February</option>
                                                            <option> March</option>
                                                            <option>April</option>
                                                            <option> May</option>
                                                            <option>June</option>
                                                            <option>July</option>
                                                            <option>August</option>
                                                            <option>September</option>
                                                            <option> October</option>
                                                            <option> November</option>
                                                            <option> December</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="billing-select">
                                                        <select>
                                                            <option>Year</option>
                                                            <option>2015</option>
                                                            <option>2016</option>
                                                            <option>2017</option>
                                                            <option>2018</option>
                                                            <option>2019</option>
                                                            <option>2020</option>
                                                            <option>2021</option>
                                                            <option>2022</option>
                                                            <option>2023</option>
                                                            <option>2024</option>
                                                            <option>2025</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/*<div class="row">*/}
                                        {/*    <div class="col-lg-12 col-md-12">*/}
                                        {/*        <div class="billing-info">*/}
                                        {/*            <label>Card Verification Number</label>*/}
                                        {/*            <input type="text">*/}
                                        {/*        </div>*/}
                                        {/*    </div>*/}
                                        {/*</div>*/}
                                    </div>
                                </div>
                                <Link to="/success">Place Order</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}
