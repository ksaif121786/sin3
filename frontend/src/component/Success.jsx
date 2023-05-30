import React from 'react';
import { Link } from 'react-router-dom';

export default function Success() {
    return (
        <div className="successSection pt-70 pb-70">
            <div className="container">
                <div className="successBox">
                    <img src="../assets/img/success.svg" alt="img" />
                    <h4 className="title">Your Order Is Successful </h4>
                    <p className="subtitle">
                        You have completed your payment your order is sucessfully Placed
                    </p>
                    <Link to="/" className="btn">
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>

    );
}
