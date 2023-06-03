import React from 'react';
import { Link, useNavigate } from 'react-router-dom';


export default function SideBar() {

  const navigate = useNavigate();
  const logoutHandler = () => {
    localStorage.clear();
    window.location.href = "/"
    // navigate('/')
  }
  return (
    <div className="leftSidebar">
      <div className="leftBox">
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link className="nav-link" to="/account">
              <img src="/assets/img/edit.svg" alt="img" />
              <span>Edit Profile</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/my-order">
              <img src="/assets/img/notes.svg" alt="img" />
              <span>My Orders</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/tnc">
              <img src="/assets/img/lock.svg" alt="img" />
              <span>Terms &amp; Condition</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/privacy-policy">
              <img src="/assets/img/secure2.svg" alt="img" />
              <span>Privacy Policy</span>
            </Link>
          </li>
          <li className="nav-item">
            <a href="javascript:void(0)" className="nav-link" onClick={logoutHandler}>
              <img src="/assets/img/logout2.svg" alt="img" />
              <span>Log Out</span>
            </a>
          </li>
        </ul>
      </div>
    </div >

  );
}
