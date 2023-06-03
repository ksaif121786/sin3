<?php include 'layout/header.php'; ?>

        <div class="breadcrumb-area gray-bg">
            <div class="container">
                <div class="breadcrumb-content">
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li class="active"> Login / Register </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="login-register-area pt-95 pb-100">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-7 col-md-12 ml-auto mr-auto">
                        <div class="login-register-wrapper">
                            <div class="login-register-tab-list nav">
                                <a class="active" data-bs-toggle="tab" href="#lg1">
                                    <h4> login </h4>
                                </a>
                                <a data-bs-toggle="tab" href="#lg2">
                                    <h4> register </h4>
                                </a>
                            </div>
                            <div class="tab-content">
                                <div id="lg1" class="tab-pane active">
                                    <div class="login-form-container">
                                        <div class="login-register-form">
                                            <form action="#" method="post">
                                                <div class="row mt-4">
                                                    <div class="col-sm-12">
                                                        <div class="createinput">
                                                            <span class="inImg"><img src="assets/img/user.svg" alt="img"></span>
                                                            <input type="text" class="form-control" id="uname" placeholder="Name" name="uname">
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-12">
                                                        <div class="createinput">
                                                        <span class="inImg"><img src="assets/img/secure.svg" alt="img" style="filter: invert(0.4);"></span>
                                                            <input type="password" class="form-control" id="password" placeholder="Create password" name="password">
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="button-box">
                                                    <div class="login-toggle-btn">
                                                        <input type="checkbox">
                                                        <label>Remember me</label>
                                                        <a href="#">Forgot Password?</a>
                                                    </div>
                                                    <div class="createBtn">
                                                        <button type="button" class="btn" onclick="window.location.href='profile.php'">Login</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div id="lg2" class="tab-pane">
                                    <div class="login-form-container">
                                        <div class="login-register-form">
                                            <h5 class="text-center">Register Your Account<h/5>
                                            <form action="#" method="post">
                                                <div class="row mt-4">
                                                    <div class="col-sm-12">
                                                        <div class="createinput">
                                                            <span class="inImg"><img src="assets/img/user.svg" alt="img"></span>
                                                            <input type="text" class="form-control" id="uname" placeholder="Name" name="uname">
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-12">
                                                        <div class="createinput">
                                                            <span class="inImg"><img src="assets/img/mail.svg" alt="img"></span>
                                                            <input type="email" class="form-control" id="email" placeholder="Email address" name="email">
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-12">
                                                        <div class="createinput">
                                                        <span class="inImg"><img src="assets/img/phone.svg" alt="img"></span>
                                                            <input type="text" class="form-control" id="phone" placeholder="0123456789" name="phone">
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-12">
                                                        <div class="createinput">
                                                        <span class="inImg"><img src="assets/img/secure.svg" alt="img" style="filter: invert(0.4);"></span>
                                                            <input type="password" class="form-control" id="password" placeholder="Create password" name="password">
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-12">
                                                        <div class="createinput">
                                                        <span class="inImg"><img src="assets/img/secure.svg" alt="img" style="filter: invert(0.4);"></span>
                                                            <input type="password" class="form-control" id="cpassword" placeholder="Confirm password" name="cpassword">
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-12">
                                                        <div class="createBtn">
                                                            <button type="submit" class="btn" onclick="window.location.href='#'">Register</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


<?php include 'layout/footer.php'; ?>
