import React, { useState, useEffect } from 'react';
import axios from '../component/axios/axios'
import { Link, useNavigate } from 'react-router-dom'

export default function OtpVerify() {

    const navigate = useNavigate();
    const [error, seterror] = useState("");

    const submitHandler = async (e) => {
        e.preventDefault();

        try {
            var otp = e.target.number1.value + e.target.number2.value + e.target.number3.value + e.target.number4.value + e.target.number5.value + e.target.number6.value;

            var config = {
                headers: { "Content-Type": "application/json", "Accept": "application/json" }
            }

            var result = await axios.post('/otp-verify', { phone: localStorage.getItem('phone'), otp: otp }, config);
            if (result.data.status == true) {
                localStorage.setItem('token', result.data.data.token);
                localStorage.setItem('name', result.data.data.name);
                if (result.data.data.setup_profile_status == 0) {
                    navigate('/profile-setup')
                } else {
                    window.location.href = "/"
                    // navigate('/')
                }

                // alert(result.data.message);
            } else {
                seterror(result.data.message);
            }
        } catch (err) {
            // console.log(err)
        }
        // window.location.href = "profile-setup"
    }
    return (
        <div className="otpSection pt-70 pb-70">
            <div className="container">
                <div className="otpBox">
                    <h4 className="otpTitle">Enter OTP Number </h4>
                    <p className="otpSubtitle">Enter your OTP code below</p>
                    {error ? <p className='text-danger text-center'>{error}</p> : ''}
                    <form method='POST' onSubmit={submitHandler}>
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
                                    name="number1"
                                    required
                                />
                                <input
                                    className="ap-otp-input"
                                    type="tel"
                                    maxLength={1}
                                    data-index={1}
                                    name="number2"
                                    required
                                />
                                <input
                                    className="ap-otp-input"
                                    type="tel"
                                    maxLength={1}
                                    data-index={2}
                                    name="number3"
                                    required
                                />
                                <input
                                    className="ap-otp-input"
                                    type="tel"
                                    maxLength={1}
                                    data-index={3}
                                    name="number4"
                                    required
                                />
                                <input
                                    className="ap-otp-input"
                                    type="tel"
                                    maxLength={1}
                                    data-index={4}
                                    name="number5"
                                    required
                                />
                                <input
                                    className="ap-otp-input"
                                    type="tel"
                                    maxLength={1}
                                    data-index={5}
                                    name="number6"
                                    required
                                />
                            </div>
                            <div className="otpFoot">
                                <button
                                    type="submit"
                                    className="btn"
                                >
                                    Next
                                </button>
                                {/* <a href="setup_profile.php" class="btn">Next</a> */}
                                <p className="did">Did’nt receive the code ?</p>
                                <p className="resendNew">Resend a new code</p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div >

    );
}
