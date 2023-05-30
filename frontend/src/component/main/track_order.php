<?php include 'layout/header2.php'?>

    <div class="breadcrumb-area gray-bg">
        <div class="container">
            <div class="breadcrumb-content">
                <ul>
                    <li><a href="index.php">Home</a></li>
                    <li class="active">My Account </li>
                </ul>
            </div>
        </div>
    </div>
    
    <div class="myAccountSection pt-20 pb-70">
        <div class="container">
            <div class="myAccountBox">
                <div class="row">
                    <div class="col-xl-3 col-md-12 mb-xl-0 mb-4 left_main">
                        <?php include 'layout/left_sidebar.php'?>
                    </div>
                    <div class="col-xl-9 col-md-12">
                        <div class="rightSideBar">
                            <!--<h4 class="rightTitle">View Order</h4>-->
                            <div class="rightCard">
                                <div class="cardHead">
                                    <h4 class="rightTitle">View Order</h4>
                                </div>
                                <div class="orderDetailBox">
                                   <div class="row">
                                       <div class="col-md-6">
                                           <div class="order_Detail">
                                               <h5 class="order_Title">Bill Details</h5>
                                               <div class="order_detail_card">
                                                   <p><span>Cheese Pizza X 12</span><span>$8.00</span></p>
                                                   <p><span><span class="add_On"></span>Add on - Extra Cheese</span><span>$1.00</span></p>
                                                   <p><span>Sandwich X 3</span><span>$7.00</span></p>
                                                   <p class="sub_order"><span>Subtotal</span><span>$15</span></p>
                                                   <p class="sub_order"><span>VAT(14.5%)</span><span>$14.5</span></p>
                                                   <h6><span>Total</span><span>$31.5</span></h6>
                                               </div>
                                           </div>
                                           <div class="order_Detail">
                                               <h5 class="order_Title">Pickup Details</h5>
                                               <div class="order_detail_card">
                                                   <div class="pickupCard">
                                                       <span class="picImg"><img src="../assets/img/pickup.svg"></span>
                                                       <p>Pickup From <br><span>Akshya Nagar 1st Block 1st ....</span></p>
                                                   </div>
                                                   <div class="pickupCard">
                                                       <span class="picImg"><img src="../assets/img/home.svg" style="margin-top: 0px"></span>
                                                       <p>Pickup Schedule <br><span>Akshya Nagar 1st Block 1st ....</span></p>
                                                   </div>
                                                   <div class="pickupCard">
                                                       <span class="picImg"><img src="../assets/img/right.svg" class="rightImg"></span>
                                                       <p>Order Placed on 22 Nov 2021, 17.45</p>
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                       <div class="col-md-6">
                                            <div class="trackOrderBox">
                                                <h5 class="trackTitle">Track Order</h5>    
                                                <section class="trackroot">
                                                  <figure>
                                                    <img src="../assets/img/product/category3.svg" alt="img">
                                                    <figcaption>
                                                      <h4>Order #90897 </h4>
                                                      <h5>Weekend Menu</h5>
                                                      <h6>Placed on Octobar 19 2021</h6>
                                                      <h3>Total: $58.2</h3>
                                                    </figcaption>
                                                  </figure>
                                                  <div class="order-track">
                                                    <div class="order-track-step">
                                                      <div class="order-track-status">
                                                        <span class="order-track-status-dot active"><img src="../assets/img/box.svg" alt="img"></span>
                                                        <span class="order-track-status-line"></span>
                                                      </div>
                                                      <div class="order-track-text">
                                                        <p class="order-track-text-stat">Order Placed</p>
                                                        <span class="order-track-text-sub">Octobar 21 2021</span>
                                                      </div>
                                                    </div>
                                                    <div class="order-track-step">
                                                      <div class="order-track-status">
                                                        <span class="order-track-status-dot"><img src="../assets/img/truck.svg" alt="img"></span>
                                                        <span class="order-track-status-line"></span>
                                                      </div>
                                                      <div class="order-track-text">
                                                        <p class="order-track-text-stat">Preparing</p>
                                                        <span class="order-track-text-sub">Pending</span>
                                                      </div>
                                                    </div>
                                                    <div class="order-track-step">
                                                      <div class="order-track-status">
                                                        <span class="order-track-status-dot"><img src="../assets/img/home_tran.svg" alt="img"></span>
                                                        <span class="order-track-status-line"></span>
                                                      </div>
                                                      <div class="order-track-text">
                                                        <p class="order-track-text-stat">Ready to Pickup</p>
                                                        <span class="order-track-text-sub">Pending</span>
                                                      </div>
                                                    </div>
                                                    <div class="order-track-step">
                                                      <div class="order-track-status">
                                                        <span class="order-track-status-dot"><img src="../assets/img/bg_tick.svg" alt="img"></span>
                                                        <span class="order-track-status-line"></span>
                                                      </div>
                                                      <div class="order-track-text">
                                                        <p class="order-track-text-stat">Order Delivered</p>
                                                        <span class="order-track-text-sub">Pending</span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </section>
                                            </div>
                                       </div>
                                       
                                   </div>
                                </div>
                                <!--<div class="trackOrderBox">-->
                                <!--    <section class="trackroot">-->
                                <!--      <h5 class="trackTitle">Track Order</h5>    -->
                                <!--      <figure>-->
                                <!--        <img src="../assets/img/product/category3.svg" alt="img">-->
                                <!--        <figcaption>-->
                                <!--          <h4>Order #90897 </h4>-->
                                <!--          <h5>Weekend Menu</h5>-->
                                <!--          <h6>Placed on Octobar 19 2021</h6>-->
                                <!--          <h3>Total: $58.2</h3>-->
                                <!--        </figcaption>-->
                                <!--      </figure>-->
                                <!--      <div class="order-track">-->
                                <!--        <div class="order-track-step">-->
                                <!--          <div class="order-track-status">-->
                                <!--            <span class="order-track-status-dot active"><img src="../assets/img/box.svg" alt="img"></span>-->
                                <!--            <span class="order-track-status-line"></span>-->
                                <!--          </div>-->
                                <!--          <div class="order-track-text">-->
                                <!--            <p class="order-track-text-stat">Order Placed</p>-->
                                <!--            <span class="order-track-text-sub">Octobar 21 2021</span>-->
                                <!--          </div>-->
                                <!--        </div>-->
                                <!--        <div class="order-track-step">-->
                                <!--          <div class="order-track-status">-->
                                <!--            <span class="order-track-status-dot"><img src="../assets/img/truck.svg" alt="img"></span>-->
                                <!--            <span class="order-track-status-line"></span>-->
                                <!--          </div>-->
                                <!--          <div class="order-track-text">-->
                                <!--            <p class="order-track-text-stat">Preparing</p>-->
                                <!--            <span class="order-track-text-sub">Pending</span>-->
                                <!--          </div>-->
                                <!--        </div>-->
                                <!--        <div class="order-track-step">-->
                                <!--          <div class="order-track-status">-->
                                <!--            <span class="order-track-status-dot"><img src="../assets/img/home_tran.svg" alt="img"></span>-->
                                <!--            <span class="order-track-status-line"></span>-->
                                <!--          </div>-->
                                <!--          <div class="order-track-text">-->
                                <!--            <p class="order-track-text-stat">Ready to Pickup</p>-->
                                <!--            <span class="order-track-text-sub">Pending</span>-->
                                <!--          </div>-->
                                <!--        </div>-->
                                <!--        <div class="order-track-step">-->
                                <!--          <div class="order-track-status">-->
                                <!--            <span class="order-track-status-dot"><img src="../assets/img/bg_tick.svg" alt="img"></span>-->
                                <!--            <span class="order-track-status-line"></span>-->
                                <!--          </div>-->
                                <!--          <div class="order-track-text">-->
                                <!--            <p class="order-track-text-stat">Order Delivered</p>-->
                                <!--            <span class="order-track-text-sub">Pending</span>-->
                                <!--          </div>-->
                                <!--        </div>-->
                                <!--      </div>-->
                                <!--    </section>-->
                                <!--</div>-->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

<?php include 'layout/footer2.php'?>