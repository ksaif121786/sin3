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
                            <!--<h4 class="rightTitle">My Order</h4>-->
                            <div class="rightCard">
                                <div class="cardHead">
                                    <h4 class="rightTitle">My Order</h4>
                                </div>
                                <div class="">
                                    <table id="example" class="table table-striped " style="width:100%">
                                        <thead>
                                            <tr>
                                                <th>S.No</th>
                                                <th>Categories</th>
                                                <th>Date</th>
                                                <th>Item</th>
                                                <th>Price</th>
                                                <th>Status</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>Weekend Menu</td>
                                                <td>10/10/2022</td>
                                                <td>Pizza X 12, Sandwich X 12</td>
                                                <td>$30</td>
                                                <td>
                                                    <spna class="prepare">Preparing</span>
                                                </td>
                                                <td>
                                                    <!--<a href="track_order.php" class="actionView"><i class="fas fa-eye"></i></a>-->
                                                    <a href="track_order.php" class="btn actionView">View Details</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>Weekend Menu</td>
                                                <td>11/10/2022</td>
                                                <td>Pizza X 12, Sandwich X 12</td>
                                                <td>$30</td>
                                                <td>
                                                    <spna class="deleiver">Delivered</span>
                                                </td>
                                                <td>
                                                    <!--<a href="track_order.php" class="actionView"><i class="fas fa-eye"></i></a>-->
                                                    <a href="track_order.php" class="btn actionView">View Details</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>Weekday Menu</td>
                                                <td>14/10/2022</td>
                                                <td>Pizza X 12, Sandwich X 12</td>
                                                <td>$30</td>
                                                <td>
                                                    <spna class="prepare">Preparing</span>
                                                </td>
                                                <td>
                                                    <!--<a href="track_order.php" class="actionView"><i class="fas fa-eye"></i></a>-->
                                                    <a href="track_order.php" class="btn actionView">View Details</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>4</td>
                                                <td>Weekday Menu</td>
                                                <td>15/10/2022</td>
                                                <td>Fresh Peach ( 12 Piece ) X 12, <br>Avacoda ( 12 Piece ) X 12</td>
                                                <td>$60</td>
                                                <td>
                                                    <spna class="orderPlaced">Order Placed</span>
                                                </td>
                                                <td>
                                                    <!--<a href="track_order.php" class="actionView" ><i class="fas fa-eye"></i></a>-->
                                                    <a href="track_order.php" class="btn actionView">View Details</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>5</td>
                                                <td>Weekend Menu</td>
                                                <td>16/10/2022</td>
                                                <td>Pizza X 12, Sandwich X 12</td>
                                                <td>$30</td>
                                                <td>
                                                    <spna class="readyPickup">Ready For Pickup</span>
                                                </td>
                                                <td>
                                                    <!--<a href="track_order.php" class="actionView"><i class="fas fa-eye"></i></a>-->
                                                    <a href="track_order.php" class="btn actionView">View Details</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>6</td>
                                                <td>Weekend Menu</td>
                                                <td>18/10/2022</td>
                                                <td>Fresh Peach ( 12 Piece ) X 12, <br>Avacoda ( 12 Piece ) X 12</td>
                                                <td>$60</td>
                                                <td>
                                                    <spna class="prepare">Preparing</span>
                                                </td>
                                                <td>
                                                    <!--<a href="track_order.php" class="actionView"><i class="fas fa-eye"></i></a>-->
                                                    <a href="track_order.php" class="btn actionView">View Details</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>7</td>
                                                <td>Weekday Menu</td>
                                                <td>18/10/2022</td>
                                                <td>Pizza X 12, Sandwich X 12</td>
                                                <td>$30</td>
                                                <td>
                                                    <spna class="prepare">Preparing</span>
                                                </td>
                                                <td>
                                                    <!--<a href="track_order.php" class="actionView"><i class="fas fa-eye"></i></a>-->
                                                    <a href="track_order.php" class="btn actionView">View Details</a>
                                                </td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

<?php include 'layout/footer2.php'?>