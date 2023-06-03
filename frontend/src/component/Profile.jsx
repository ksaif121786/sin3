import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from './axios/axios'

import SideBar from './layout/SideBar'

export default function Profile() {

    useEffect(() => {
        getprofile();
    }, [])

    const [msg, setmsg] = useState("");
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [phone, setphone] = useState("");
    const getprofile = async () => {
        try {
            var config = {
                headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token'), 'Accept': 'application/json' }
            }
            var result = await axios.post('/get-profile', {}, config);
            if (result.data.status == true) {
                setname(result.data.data.profile.name);
                setemail(result.data.data.profile.email);
                setphone(result.data.data.profile.phone);
            } else {
                console.log('err', result.data.messagwe)
            }
        } catch (err) {
            console.log('err', err)
        }
    }


    const submitHandler = async (e) => {
        try {
            e.preventDefault()
            var payload = {
                name: e.target.name.value
            }

            var config = {
                headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token'), 'Accept': 'application/json' }
            }

            var result = await axios.post('/update-profile', payload, config);
            if (result.data.status == true) {
                setmsg(result.data.message)
            } else {

            }
        } catch (err) {
            console.log('err', err)
        }
    }
    return (
        <>
            <div className="breadcrumb-area gray-bg">
                <div className="container">
                    <div className="breadcrumb-content">
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li className="active">My Account </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="myAccountSection pt-20 pb-70">
                <div className="container">
                    <div className="myAccountBox">
                        <div className="row">
                            <div className="col-xl-3 col-md-12 mb-xl-0 mb-4 left_main">
                                <SideBar />
                            </div>
                            <div className="col-xl-9 col-md-12">
                                <div className="rightSideBar">
                                    {/*<h4 class="rightTitle">Profile View</h4>*/}
                                    <div className="rightCard">
                                        <div className="cardHead">
                                            <h4 className="rightTitle">Profile View</h4>
                                        </div>
                                        {msg ? <p className="alert alert-success text-center">{msg}</p> : ''}
                                        <div className="profilebox">
                                            <img
                                                src="/assets/img/user_img.svg"
                                                alt="img"
                                                className="userImg"
                                            />
                                            <p className="mb-0">
                                                <span className="userName">{name}</span>
                                                <br />
                                                <span className="userEmail">{email}</span>
                                            </p>
                                        </div>
                                        <form method='POST' onSubmit={submitHandler}>
                                            <div className="editProfile">
                                                <div className="row">
                                                    <div className="col-md-6 col-sm-12">
                                                        <div className="createinput">
                                                            <span className="inImg">
                                                                <img src="/assets/img/user.svg" alt="img" />
                                                            </span>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                id="uname"
                                                                placeholder="David Spade"
                                                                name="name"
                                                                value={name}
                                                                onChange={e => setname(e.target.value)}
                                                                required
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-sm-12">
                                                        <div className="createinput">
                                                            <span className="inImg">
                                                                <img src="/assets/img/mail.svg" alt="img" />
                                                            </span>
                                                            <input
                                                                type="email"
                                                                className="form-control"
                                                                id="email"
                                                                placeholder="iamdavid@gmail.com"
                                                                name="email"
                                                                value={email}
                                                                readOnly
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-sm-12">
                                                        <div className="createinput">
                                                            <span className="inImg">
                                                                <img src="/assets/img/phone.svg" alt="img" />
                                                            </span>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                id="phone"
                                                                placeholder={"0123456789"}
                                                                name="phone"
                                                                value={phone}
                                                                readOnly
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-sm-12"></div>
                                                    <div className="col-md-12 col-sm-12">
                                                        <div className="createBtn">
                                                            <button type="submit" className="btn">
                                                                Save Setting
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}
