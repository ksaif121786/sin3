import React from 'react';

export default function ProfileSetup() {

    const submitHandler = () => {
        window.location.href = "/"
    }
    return (
        <div className="createProfile pt-70 pb-70">
            <div className="container">
                <div className="createProfileBox">
                    <h4 className="createTtile">Setup Your Profile </h4>
                    <p className="createSubtitle">Quickly setup your profile details</p>
                    <div className="row mt-4">
                        <div className="col-sm-12">
                            <div className="createinput">
                                <span className="inImg">
                                    <img src="assets/img/user.svg" alt="img" />
                                </span>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="uname"
                                    placeholder="Name"
                                    name="uname"
                                />
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="createinput">
                                <span className="inImg">
                                    <img src="assets/img/mail.svg" alt="img" />
                                </span>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    placeholder="Email address"
                                    name="email"
                                />
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="createinput">
                                <span className="inImg">
                                    <img src="assets/img/phone.svg" alt="img" />
                                </span>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="phone"
                                    placeholder={"0123456789"}
                                    name="phone"
                                />
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="createBtn">
                                <button
                                    type="submit"
                                    className="btn"
                                    onClick={submitHandler}
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
