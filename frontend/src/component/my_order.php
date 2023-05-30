<?php include 'layout/header2.php'?>

    <div class="breadcrumb-area gray-bg">
        <div class="container">
            <div class="breadcrumb-content">
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li class="active">My Account </li>
                </ul>
            </div>
        </div>
    </div>
    
    <div class="myAccountSection pt-70 pb-70">
        <div class="container">
            <div class="myAccountBox">
                <div class="row">
                    <div class="col-lg-3 col-md-3">
                        <?php include 'sidebar/left_sidebar.php'?>
                    </div>
                    <div class="col-lg-9 col-md-9">
                        <div class="rightSideBar">
                            <h4 class="rightTitle">My Order</h4>
                            <div class="rightCard">
                                <div class="">
                                    <table id="example" class="table table-striped" style="width:100%">
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Position</th>
                                                <th>Office</th>
                                                <th>Age</th>
                                                <th>Start date</th>
                                                <th>Salary</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Tiger Nixon</td>
                                                <td>System Architect</td>
                                                <td>Edinburgh</td>
                                                <td>61</td>
                                                <td>2011-04-25</td>
                                                <td>$320,800</td>
                                            </tr>
                                            <tr>
                                                <td>Garrett Winters</td>
                                                <td>Accountant</td>
                                                <td>Tokyo</td>
                                                <td>63</td>
                                                <td>2011-07-25</td>
                                                <td>$170,750</td>
                                            </tr>
                                            <tr>
                                                <td>Ashton Cox</td>
                                                <td>Junior Technical Author</td>
                                                <td>San Francisco</td>
                                                <td>66</td>
                                                <td>2009-01-12</td>
                                                <td>$86,000</td>
                                            </tr>
                                            <tr>
                                                <td>Cedric Kelly</td>
                                                <td>Senior Javascript Developer</td>
                                                <td>Edinburgh</td>
                                                <td>22</td>
                                                <td>2012-03-29</td>
                                                <td>$433,060</td>
                                            </tr>
                                            <tr>
                                                <td>Airi Satou</td>
                                                <td>Accountant</td>
                                                <td>Tokyo</td>
                                                <td>33</td>
                                                <td>2008-11-28</td>
                                                <td>$162,700</td>
                                            </tr>
                                            <tr>
                                                <td>Brielle Williamson</td>
                                                <td>Integration Specialist</td>
                                                <td>New York</td>
                                                <td>61</td>
                                                <td>2012-12-02</td>
                                                <td>$372,000</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div class="editProfile">
                                    <div class="row">
                                        <div class="col-md-6 col-sm-12">
                                            <div class="createinput">
                                                <span class="inImg"><img src="assets/img/user.svg" alt="img"></span>
                                                <input type="text" class="form-control" id="uname" placeholder="David Spade" name="uname">
                                            </div>    
                                        </div>
                                        <div class="col-md-6 col-sm-12">
                                            <div class="createinput">
                                                <span class="inImg"><img src="assets/img/mail.svg" alt="img"></span>
                                                <input type="email" class="form-control" id="email" placeholder="iamdavid@gmail.com" name="email">
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-sm-12">
                                            <div class="createinput">
                                                <span class="inImg"><img src="assets/img/phone.svg" alt="img"></span>
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