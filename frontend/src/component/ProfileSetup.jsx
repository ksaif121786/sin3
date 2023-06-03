import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from '../component/axios/axios'
export default function ProfileSetup() {
    var navigate = useNavigate();
    const [error, seterror] = useState('');
    const submitHandler = async (e) => {
        e.preventDefault();
        var payload = {
            name: e.target.name.value,
            email: e.target.email.value,
        }
        var config = {
            headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token'), 'Content-Type': 'application/json', 'Accept': 'application/json' }
        }
        var result = await axios.post('/setup-profile', payload, config);
        if (result.data.status == true) {
            // localStorage.setItem('name', result.data.data.name);
            // navigate('/')
            window.location.href = "/"
        } else {
            seterror(result.data.message)
        }
        // window.location.href = "/"
    }
    return (
        <div className="createProfile pt-70 pb-70">
            <div className="container">
                <div className="createProfileBox">
                    <h4 className="createTtile">Setup Your Profile </h4>
                    <p className="createSubtitle">Quickly setup your profile details</p>
                    {error ? <p className="text-danger text-center">{error}</p> : ''}
                    <form method="POST" onSubmit={submitHandler}>
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
                                        name="name"
                                        required
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
                                        required
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
                                        value={localStorage.getItem('phone')}
                                        readOnly
                                    />
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <div className="createBtn">
                                    <button
                                        type="submit"
                                        className="btn"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
}
