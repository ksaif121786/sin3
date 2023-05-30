import React from 'react';

export default function OtpVerify() {

    const submitHandler = () => {
        window.location.href = "profile-setup"
    }
    return (
        <div className="otpSection pt-70 pb-70">
            <div className="container">
                <div className="otpBox">
                    <h4 className="otpTitle">Enter OTP Number </h4>
                    <p className="otpSubtitle">Enter your OTP code below</p>
                    <div className="otpCard">
                        <div
                            className="ap-otp-inputs"
                            data-username="otibij"
                            data-channel="email"
                            data-nonce="0-8bf87e338f"
                            data-length={6}
                            data-form="registration"
                        >
                            <input
                                className="ap-otp-input"
                                type="tel"
                                maxLength={1}
                                data-index={0}
                            />
                            <input
                                className="ap-otp-input"
                                type="tel"
                                maxLength={1}
                                data-index={1}
                            />
                            <input
                                className="ap-otp-input"
                                type="tel"
                                maxLength={1}
                                data-index={2}
                            />
                            <input
                                className="ap-otp-input"
                                type="tel"
                                maxLength={1}
                                data-index={3}
                            />
                            <input
                                className="ap-otp-input"
                                type="tel"
                                maxLength={1}
                                data-index={4}
                            />
                            <input
                                className="ap-otp-input"
                                type="tel"
                                maxLength={1}
                                data-index={5}
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
                            <p className="did">Did’nt receive the code ?</p>
                            <p className="resendNew">Resend a new code</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    );
}
