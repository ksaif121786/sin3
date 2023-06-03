import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from '../component/axios/axios';

export default function Login() {
    const navigate = useNavigate();
    const [error, seterror] = useState("")
    const submitHandler = async (e) => {
        e.preventDefault();

        var phone = e.target.phone.value;
        var config = {
            headers: { "Content-Type": "application/json", "Accept": "application/json" }
        }
        var result = await axios.post("/login", { phone: phone }, config);
        if (result.data.status == true) {
            localStorage.setItem('phone', phone);
            navigate('/otp-verify');
        } else {
            seterror(result.data.message);
        }
        // window.location.href = "otp-verify"
    }

    return (
        <div className="otpSection pt-70 pb-70">
            <div className="container">
                <div className="otpBox">
                    <h4 className="otpTitle">Welcome ! </h4>
                    <p className="otpSubtitle">Enter your mobile number to sign in</p>
                    <form method='POST' onSubmit={submitHandler}>
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
                                {/*<p class="did">Did’nt receive the code ?</p>*/}
                                {/*<p class="resendNew">Resend a new code</p>*/}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div >

    );
}
