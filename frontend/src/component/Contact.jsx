import React from 'react';
import { Link } from 'react-router-dom';
export default function Contact() {
    return (
        <>
            <div className="breadcrumb-area gray-bg">
                <div className="container">
                    <div className="breadcrumb-content">
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li className="active"> Contact Us </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="contact-area pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="contact-info-wrapper text-center mb-30">
                                <div className="contact-info-icon">
                                    <i className="ion-ios-location-outline" />
                                </div>
                                <div className="contact-info-content">
                                    <h4>Our Location</h4>
                                    <p>012 345 678 / 123 456 789</p>
                                    <p>
                                        <a href="#">info@example.com</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="contact-info-wrapper text-center mb-30">
                                <div className="contact-info-icon">
                                    <i className="ion-ios-telephone-outline" />
                                </div>
                                <div className="contact-info-content">
                                    <h4>Contact us Anytime</h4>
                                    <p>Mobile: 012 345 678</p>
                                    <p>Fax: 123 456 789</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="contact-info-wrapper text-center mb-30">
                                <div className="contact-info-icon">
                                    <i className="ion-ios-email-outline" />
                                </div>
                                <div className="contact-info-content">
                                    <h4>Write Some Words</h4>
                                    <p>
                                        <a href="#">Support24/7@example.com </a>
                                    </p>
                                    <p>
                                        <a href="#">info@example.com</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="contact-message-wrapper">
                                <h4 className="contact-title">GET IN TOUCH</h4>
                                <div className="contact-message">
                                    <form
                                        id="contact-form"
                                        action="https://htmldemo.net/billy/billy/assets/mail.php"
                                        method="post"
                                    >
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="contact-form-style mb-20">
                                                    <input name="name" placeholder="Full Name" type="text" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="contact-form-style mb-20">
                                                    <input
                                                        name="email"
                                                        placeholder="Email Address"
                                                        type="email"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="contact-form-style mb-20">
                                                    <input name="subject" placeholder="Subject" type="text" />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="contact-form-style">
                                                    <textarea
                                                        name="message"
                                                        placeholder="Message"
                                                        defaultValue={""}
                                                    />
                                                    <button className="submit btn-style" type="submit">
                                                        SEND MESSAGE
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                    <p className="form-messege" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*<div class="contact-map">*/}
                    {/*    <div id="map"></div>*/}
                    {/*</div>*/}
                </div>
            </div>
        </>

    );
}
