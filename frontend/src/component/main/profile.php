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
                            <!--<h4 class="rightTitle">Profile View</h4>-->
                            <div class="rightCard">
                                <div class="cardHead">
                                    <h4 class="rightTitle">Profile View</h4>
                                </div>
                                <div class="profilebox">
                                    <img src="../assets/img/user_img.svg" alt="img" class="userImg">
                                    <p class="mb-0">
                                        <span class="userName">David Spade</span>
                                        <br>
                                        <span class="userEmail">iamdavid@gmail.com</span>
                                    </p>
                                </div>
                                <div class="editProfile">
                                    <div class="row">
                                        <div class="col-md-6 col-sm-12">
                                            <div class="createinput">
                                                <span class="inImg"><img src="../assets/img/user.svg" alt="img"></span>
                                                <input type="text" class="form-control" id="uname" placeholder="David Spade" name="uname">
                                            </div>    
                                        </div>
                                        <div class="col-md-6 col-sm-12">
                                            <div class="createinput">
                                                <span class="inImg"><img src="../assets/img/mail.svg" alt="img"></span>
                                                <input type="email" class="form-control" id="email" placeholder="iamdavid@gmail.com" name="email">
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-sm-12">
                                            <div class="createinput">
                                                <span class="inImg"><img src="../assets/img/phone.svg" alt="img"></span>
                                                <input type="text" class="form-control" id="phone" placeholder="0123456789" name="phone">
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-sm-12">
                                            
                                        </div>
                                        <div class="col-md-12 col-sm-12">
                                            <div class="createBtn">
                                                <button type="button" class="btn">Save Setting</button>
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
    </div>

<?php include 'layout/footer2.php'?>