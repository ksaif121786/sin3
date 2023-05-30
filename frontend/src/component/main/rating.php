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
    
    <div class="myAccountSection pt-70 pb-70">
        <div class="container">
            <div class="myAccountBox">
                <div class="row">
                    <div class="col-xl-3 col-md-12 mb-xl-0 mb-4 left_main">
                        <?php include 'layout/left_sidebar.php'?>
                    </div>
                    <div class="col-xl-9 col-md-12">
                        <div class="rightSideBar">
                            <!--<h4 class="rightTitle">Rate Order</h4>-->
                            <div class="rightCard">
                                <div class="cardHead">
                                    <h4 class="rightTitle">Rate Order</h4>
                                </div>
                                <div class="ratingCard">
                                   <h5 class="">What do you think ?</h5>   
                                   <p>please give your rating by clicking on the stars below</p>
                                   <section class='rating-widget'>
                                      <!-- Rating Stars Box -->
                                      <div class='rating-stars text-center'>
                                        <ul id='stars'>
                                          <li class='star selected' title='Poor' data-value='1'>
                                            <i class='fa fa-star fa-fw'></i>
                                          </li>
                                          <li class='star selected' title='Fair' data-value='2'>
                                            <i class='fa fa-star fa-fw'></i>
                                          </li>
                                          <li class='star selected' title='Good' data-value='3'>
                                            <i class='fa fa-star fa-fw'></i>
                                          </li>
                                          <li class='star selected' title='Excellent' data-value='4'>
                                            <i class='fa fa-star fa-fw'></i>
                                          </li>
                                          <li class='star' title='WOW!!!' data-value='5'>
                                            <i class='fa fa-star fa-fw'></i>
                                          </li>
                                        </ul>
                                    
                                    </section>
                                    <div class="form-group">
                                      <textarea class="form-control" rows="8" id="comment" placeholder="Tell us about your experience"></textarea>
                                      <span class="textImg"><img src="../assets/img/pencil.svg" alt="img"></span>
                                    </div>
                                    <button type="button" class="btn">Rate Now</button>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

<?php include 'layout/footer2.php'?>