import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery';

import SideBar from './layout/SideBar'

export default function MyOrder() {

    useEffect(() => {
        ordertable();
    }, [])


    const ordertable = () => {
        setTimeout(() => {
            $('#example').DataTable({ destroy: true });
        }, 1000)
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
                                    {/*<h4 class="rightTitle">My Order</h4>*/}
                                    <div className="rightCard">
                                        <div className="cardHead">
                                            <h4 className="rightTitle">My Order</h4>
                                        </div>
                                        <div className="">
                                            <table
                                                id="example"
                                                className="table table-striped "
                                                style={{ width: "100%" }}
                                            >
                                                <thead>
                                                    <tr>
                                                        <th>S.No</th>
                                                        <th>Categories</th>
                                                        <th>Date</th>
                                                        <th>Item</th>
                                                        <th>Price</th>
                                                        <th>Status</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>Weekend Menu</td>
                                                        <td>10/10/2022</td>
                                                        <td>Pizza X 12, Sandwich X 12</td>
                                                        <td>$30</td>
                                                        <td>
                                                            <spna className="prepare">Preparing</spna>
                                                        </td>
                                                        <td>
                                                            {/*<a href="track_order.php" class="actionView"><i class="fas fa-eye"></i></a>*/}
                                                            <a href="track_order.php" className="btn actionView">
                                                                View Details
                                                            </a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>2</td>
                                                        <td>Weekend Menu</td>
                                                        <td>11/10/2022</td>
                                                        <td>Pizza X 12, Sandwich X 12</td>
                                                        <td>$30</td>
                                                        <td>
                                                            <spna className="deleiver">Delivered</spna>
                                                        </td>
                                                        <td>
                                                            {/*<a href="track_order.php" class="actionView"><i class="fas fa-eye"></i></a>*/}
                                                            <a href="track_order.php" className="btn actionView">
                                                                View Details
                                                            </a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>3</td>
                                                        <td>Weekday Menu</td>
                                                        <td>14/10/2022</td>
                                                        <td>Pizza X 12, Sandwich X 12</td>
                                                        <td>$30</td>
                                                        <td>
                                                            <spna className="prepare">Preparing</spna>
                                                        </td>
                                                        <td>
                                                            {/*<a href="track_order.php" class="actionView"><i class="fas fa-eye"></i></a>*/}
                                                            <a href="track_order.php" className="btn actionView">
                                                                View Details
                                                            </a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>4</td>
                                                        <td>Weekday Menu</td>
                                                        <td>15/10/2022</td>
                                                        <td>
                                                            Fresh Peach ( 12 Piece ) X 12, <br />
                                                            Avacoda ( 12 Piece ) X 12
                                                        </td>
                                                        <td>$60</td>
                                                        <td>
                                                            <spna className="orderPlaced">Order Placed</spna>
                                                        </td>
                                                        <td>
                                                            {/*<a href="track_order.php" class="actionView" ><i class="fas fa-eye"></i></a>*/}
                                                            <a href="track_order.php" className="btn actionView">
                                                                View Details
                                                            </a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>5</td>
                                                        <td>Weekend Menu</td>
                                                        <td>16/10/2022</td>
                                                        <td>Pizza X 12, Sandwich X 12</td>
                                                        <td>$30</td>
                                                        <td>
                                                            <spna className="readyPickup">Ready For Pickup</spna>
                                                        </td>
                                                        <td>
                                                            {/*<a href="track_order.php" class="actionView"><i class="fas fa-eye"></i></a>*/}
                                                            <a href="track_order.php" className="btn actionView">
                                                                View Details
                                                            </a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>6</td>
                                                        <td>Weekend Menu</td>
                                                        <td>18/10/2022</td>
                                                        <td>
                                                            Fresh Peach ( 12 Piece ) X 12, <br />
                                                            Avacoda ( 12 Piece ) X 12
                                                        </td>
                                                        <td>$60</td>
                                                        <td>
                                                            <spna className="prepare">Preparing</spna>
                                                        </td>
                                                        <td>
                                                            {/*<a href="track_order.php" class="actionView"><i class="fas fa-eye"></i></a>*/}
                                                            <a href="track_order.php" className="btn actionView">
                                                                View Details
                                                            </a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>7</td>
                                                        <td>Weekday Menu</td>
                                                        <td>18/10/2022</td>
                                                        <td>Pizza X 12, Sandwich X 12</td>
                                                        <td>$30</td>
                                                        <td>
                                                            <spna className="prepare">Preparing</spna>
                                                        </td>
                                                        <td>
                                                            {/*<a href="track_order.php" class="actionView"><i class="fas fa-eye"></i></a>*/}
                                                            <a href="track_order.php" className="btn actionView">
                                                                View Details
                                                            </a>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
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
