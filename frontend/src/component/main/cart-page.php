<?php include 'layout/header2.php'; ?>

        <div class="breadcrumb-area gray-bg">
            <div class="container">
                <div class="breadcrumb-content">
                    <ul>
                        <li><a href="index.php">Home</a></li>
                        <li class="active">Cart </li>
                    </ul>
                </div>
            </div>
        </div>
         <!-- shopping-cart-area start -->
        <div class="cart-main-area pt-95 pb-100">
            <div class="container">
                <h3 class="page-title">Your cart items</h3>
                <div class="row">
                    <div class="col-lg-7 col-md-7 col-sm-12 col-12">
                        <form action="#">
                            <div class="table-content table-responsive">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Image</th>
                                            <th>Product Name</th>
                                            <!--<th>Until Price</th>-->
                                            <th>Qty</th>
                                            <th>Subtotal</th>
                                            <!--<th>action</th>-->
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="product-thumbnail">
                                                <a href="#"><img src="../assets/img/cart/cart-3.jpg" alt=""></a>
                                                <span class="deletPro"><i class="fa fa-trash" aria-hidden="true"></i></span>
                                            </td>
                                            <td class="product-name"><a href="#">Product Name </a><br><span class="amount">$260.00</span></td>
                                            <!--<td class="product-price-cart"></td>-->
                                            <td class="product-quantity">
                                                <div class="cart-plus-minus">
                                                    <input class="cart-plus-minus-box" type="text" name="qtybutton" value="2">
                                                </div>
                                                
                                            </td>
                                            <td class="product-subtotal">$110.00</td>
                                           <!-- <td class="product-remove">-->
                                           <!--     <a href="#"><i class="fa fa-times"></i></a>-->
                                           <!--</td>-->
                                        </tr>
                                        <tr>
                                            <td class="product-thumbnail">
                                                <a href="#"><img src="../assets/img/cart/cart-4.jpg" alt=""></a>
                                                <span class="deletPro">
                                                    <i class="fa fa-trash" aria-hidden="true"></i>
                                                    <!--<i class="fa fa-times"></i>-->
                                                </span>
                                            </td>
                                            <td class="product-name"><a href="#">Product Name </a><br><span class="amount">$260.00</span></td>
                                            <!--<td class="product-price-cart"><span class="amount">$150.00</span></td>-->
                                            <td class="product-quantity">
                                                <div class="cart-plus-minus">
                                                    <input class="cart-plus-minus-box" type="text" name="qtybutton" value="2">
                                                </div>
                                            </td>
                                            <td class="product-subtotal">$150.00</td>
                                           <!-- <td class="product-remove">-->
                                           <!--     <a href="#"><i class="fa fa-times"></i></a>-->
                                           <!--</td>-->
                                        </tr>
                                        <tr>
                                            <td class="product-thumbnail">
                                                <a href="#"><img src="../assets/img/cart/cart-5.jpg" alt=""></a>
                                                <span class="deletPro"><i class="fa fa-trash" aria-hidden="true"></i></span>
                                            </td>
                                            <td class="product-name"><a href="#">Product Name </a><br><span class="amount">$260.00</span></td>
                                            <!--<td class="product-price-cart"><span class="amount">$170.00</span></td>-->
                                            <td class="product-quantity">
                                                <div class="cart-plus-minus">
                                                    <input class="cart-plus-minus-box" type="text" name="qtybutton" value="2">
                                                </div>
                                            </td>
                                            <td class="product-subtotal">$170.00</td>
                                           <!-- <td class="product-remove">-->
                                           <!--     <a href="#"><i class="fa fa-times"></i></a>-->
                                           <!--</td>-->
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="cart-shiping-update-wrapper">
                                        <div class="cart-shiping-update">
                                            <a href="categories_menu.php">Continue Shopping</a>
                                        </div>
                                        <div class="cart-clear">
                                            <!--<button>Update Shopping Cart</button>-->
                                            <!--<a href="#">Clear Shopping Cart</a>-->
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="col-lg-5 col-md-5 col-sm-12 col-12">
                        <div class="grand-totall">
                            <div class="title-wrap">
                                <h4 class="cart-bottom-title section-bg-gary-cart">Shopping Cart </h4>
                                <div class="phoneField">
                                    <span class="phoneImg"><img src="../assets/img/et_map-pin.svg" alt="img"></span>
                                    <h6 class="locationBox">
                                        <span>Pickup at</span>
                                        <span>Akshya Nagar 1st Block 1st ....</span>
                                    </h6>
                                    <!--<input type="text" class="form-control" id="location" placeholder="Pickup at" name="location" >-->
                                </div>
                            </div>
                            
                            <div class="total-shipping">
                                <h5>Pickup Schedule</h5>
                                <ul>
                                    <li><input type="radio" name="pickup"> Saturday <span>(Order before 23 friday 11:00 PM)</span></li>
                                    <li><input type="radio" name="pickup"> Sunday <span>(Order before 29 saturday 11:00 PM)</span></li>
                                </ul>
                            </div>
                            <div class="pickupNotes">
                                <div class="form-group">
                                  <!--<label for="comment">Enter Notes ( It Any):</label>-->
                                  <textarea class="form-control" rows="6" id="comment" placeholder="Enter Notes ( It Any)"></textarea>
                                </div>
                            </div>
                            <div class="subTotalBox">
                                <h5>SubTotal <span>$260.00</span></h5>
                                <h5>VAT (14.5%) <span>$14.5</span></h5>    
                            </div>
                            
                            <h4 class="grand-totall-title">Grand Total  <span>$274.5</span></h4>
                            
                            <div class="paymentBox">
                                <div class="ship-wrapper">
                                    <div class="single-ship">
                                        <input type="radio" checked="" value="cash" name="payCard">
                                        <label>Cash </label>
                                    </div>
                                    <div class="single-ship">
                                        <input type="radio" value="pay" name="payCard">
                                        <label>Credit / Debit</label>
                                    </div>
                                </div>
                                <div class="payment-info">
                                    <div class="row">
                                        <div class="col-lg-12 col-md-12">
                                            <div class="billing-info">
                                                <label>Name on Card </label>
                                                <input type="text">
                                            </div>
                                        </div>
                                        <!--<div class="col-lg-6 col-md-6">-->
                                        <!--    <div class="billing-select">-->
                                        <!--        <label>Credit Card Type</label>-->
                                        <!--        <select>-->
                                        <!--            <option>American Express</option>-->
                                        <!--            <option>Visa</option>-->
                                        <!--            <option>MasterCard</option>-->
                                        <!--            <option>Discover</option>-->
                                        <!--        </select>-->
                                        <!--    </div>-->
                                        <!--</div>-->
                                        <div class="col-lg-12 col-md-12">
                                            <div class="billing-info">
                                                <label>Credit Card Number </label>
                                                <input type="text">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="expiration-date">
                                        <label>Expiration Date </label>
                                        <div class="row">
                                            <div class="col-lg-6 col-md-6">
                                                <div class="billing-select">
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
                                            <div class="col-lg-6 col-md-6">
                                                <div class="billing-select">
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
                                    <!--<div class="row">-->
                                    <!--    <div class="col-lg-12 col-md-12">-->
                                    <!--        <div class="billing-info">-->
                                    <!--            <label>Card Verification Number</label>-->
                                    <!--            <input type="text">-->
                                    <!--        </div>-->
                                    <!--    </div>-->
                                    <!--</div>-->
                                </div>
                            </div>
                            <a href="success.php">Place Order</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

<?php include 'layout/footer2.php'; ?>
