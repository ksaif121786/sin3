import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import axios from '../axios/axios';

export default function Header() {

    const token = localStorage.getItem('token');
    const [name, setname] = useState("");

    useEffect(() => {
        getprofile();
    }, [])

    const getprofile = async () => {
        try {
            var config = {
                headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token'), 'Accept': 'application/jsons' }
            }
            var result = await axios.post('/get-profile', {}, config);
            if (result.data.status == true) {
                setname(result.data.data.profile.name)
            } else {
                console.log('err', result.data.message)
            }
        } catch (err) {
            console.log('err', err)
        }
    }

    return (
        <>
            {/* header start */}
            <header className="header-area">

                <div className="header-middle">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-4 col-12 col-sm-4">
                                <div className="logo">
                                    <Link to="/">
                                        <img alt="" src="assets/img/logo/logo.png" />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-9 col-md-8 col-12 col-sm-8">
                                <div className="header-middle-right f-right">
                                    <div className="header-login">
                                        <Link to="/account">
                                            <div className="header-icon-style">
                                                <i className="icon-user icons" />
                                            </div>
                                        </Link>
                                        {
                                            token ?
                                                <div className="login-text-content">
                                                    <Link to="/account"></Link>
                                                    <p>
                                                        <a href="#" />
                                                        {/* <Link to="/account"></Link> */}
                                                        <br /> {" "}
                                                        <Link to="/account">
                                                            <span style={{ marginTop: 0 }}>{name}</span>
                                                        </Link>
                                                    </p>
                                                </div> :
                                                <div className="login-text-content">
                                                    <a href="#"></a>
                                                    <p>
                                                        <a href="#" />
                                                        <Link to="/login">Register </Link>
                                                        <br /> or{" "}
                                                        <Link to="/login">
                                                            <span style={{ marginTop: 0 }}>Sign in</span>
                                                        </Link>
                                                    </p>
                                                </div>
                                        }

                                    </div>
                                    <div className="header-wishlist">
                                        {/*<a href="wishlist.php">*/}
                                        {/*    <div class="header-icon-style">*/}
                                        {/*        <i class="icon-heart icons"></i>*/}
                                        {/*    </div>*/}
                                        {/*    <div class="wishlist-text">*/}
                                        {/*        <p>Your <br> <span>Wishlist</span></p>*/}
                                        {/*    </div>*/}
                                        {/*</a>*/}
                                    </div>
                                    <div className="cart-header">
                                        <Link to="cart">
                                            <div className="header-icon-style">
                                                <i className="icon-handbag icons" />
                                                <span className="count-style">0</span>
                                            </div>
                                            <div className="cart-text">
                                                <span className="digit">My Cart</span>
                                                <span className="cart-digit-bold">$00.00</span>
                                            </div>
                                        </Link>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-bottom transparent-bar black-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-12">
                                <div className="main-menu">
                                    <nav>
                                        <ul>
                                            <li>
                                                <Link to="/">home </Link>
                                            </li>
                                            <li>
                                                <Link to="/about">about</Link>
                                            </li>
                                            <li>
                                                <Link to="/contact">contact</Link>
                                            </li>
                                        </ul>
                                    </nav>
                                    {/*<div class="searchinput">*/}
                                    {/*    <span class="searchIcon"><img src="assets/img/search.svg" alt="img"></span>*/}
                                    {/*    <input type="text" class="form-control" id="search" placeholder="Search" name="search">*/}
                                    {/*</div>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* mobile-menu-area-start */}
                <div className="mobie_menu_box">
                    <div className="header-middle-right f-right">
                        <div className="header-login">
                            <a href="#">
                                <div className="header-icon-style">
                                    <i className="icon-user icons" />
                                </div>
                            </a>
                            <div className="login-text-content">
                                <a href="#"></a>
                                <p>
                                    <a href="#" />
                                    <Link to="/login">Register </Link>
                                    <br /> or{" "}
                                    <Link to="/login">
                                        <span style={{ marginTop: 0 }}>Sign in</span>
                                    </Link>
                                </p>
                            </div>
                        </div>
                        <div className="header-wishlist"></div>
                        <div className="cart-header">
                            <Link to="cart">
                                <div className="header-icon-style">
                                    <i className="icon-handbag icons" />
                                    <span className="count-style">0</span>
                                </div>
                                <div className="cart-text">
                                    <span className="digit">My Cart</span>
                                    <span className="cart-digit-bold">$00.00</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div id="sidenav" className="sidenav">
                        <a href="#" className="hamburger" />
                        <div className="menu_top">
                            <div className="logo">
                                <Link to="/">
                                    <img alt="" src="assets/img/logo/logo.png" />
                                </Link>
                            </div>
                            <nav id="">
                                <ul className="" id="">
                                    <li>
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li>
                                        <Link to="/about">About</Link>
                                    </li>
                                    <li>
                                        <Link to="/contact">Contact us</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                {/* mobile-menu-area-end */}
            </header>
        </>

    );
}
