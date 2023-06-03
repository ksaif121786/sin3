import React from 'react';
import { Link } from 'react-router-dom';

export default function Privacy() {
    return (
        <>
            <div className="breadcrumb-area gray-bg">
                <div className="container">
                    <div className="breadcrumb-content">
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li className="active">Privacy </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="about-us-area pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="overview-img text-center">
                                <a href="#">
                                    <img src="assets/img/banner/about-us.jpg" alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6 d-flex align-items-center">
                            <div className="overview-content-2">
                                <h2>
                                    Welcome To <span>Sinoy's</span> Store !
                                </h2>
                                <p className="peragraph-blog">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry. Lorem Ipsum has been the industry's standard dummy text
                                    ever since the 1500s, when an unknown printer took a galley of
                                    type and scrambled it to make a type specimen book.
                                </p>
                                <p>
                                    There are many variations of passages of Lorem Ipsum available,
                                    but the majority have suffered alteration in some form, by
                                    injected humour, or randomised words which don't look even
                                    slightly believable. If you are going to use a passage of Lorem
                                    Ipsum, you need to be sure there isn't anything embarrassing
                                    hidden in the middle of text.
                                </p>
                                <p>
                                    The theme design package provides a complete Magento theme set for
                                    your online store according to your desired theme.
                                </p>
                                <div className="overview-btn mt-45">
                                    <Link className="btn-style-2" to="/category-menu">
                                        Order Now!
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}
