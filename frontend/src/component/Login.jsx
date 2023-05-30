import React from 'react';

export default function Login() {

    const submitHandler = () => {
        window.location.href = "otp-verify"
    }

    return (
        <div className="otpSection pt-70 pb-70">
            <div className="container">
                <div className="otpBox">
                    <h4 className="otpTitle">Welcome ! </h4>
                    <p className="otpSubtitle">Enter your mobile number to sign in</p>
                    <div className="otpCard">
                        <div className="phoneField" style={{ margin: "0 23%" }}>
                            <span className="phoneImg">
                                <img src="assets/img/phone.svg" alt="img" />
                            </span>
                            <input
                                type="text"
                                className="form-control"
                                id="phone"
                                placeholder="Enter mobile number"
                                name="phone"
                            />
                        </div>
                        <div className="otpFoot">
                            <button
                                type="button"
                                className="btn"
                                onClick={submitHandler}
                            >
                                Next
                            </button>
                            {/* <a href="setup_profile.php" class="btn">Next</a> */}
                            {/*<p class="did">Did’nt receive the code ?</p>*/}
                            {/*<p class="resendNew">Resend a new code</p>*/}
                        </div>
                    </div>
                </div>
            </div>
        </div >

    );
}
