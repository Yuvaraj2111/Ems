import React from 'react';
import '../assets/css/style.css'
const Header = ({ current }) => {
    return (
        <>
            <header id="header" className="fixed-top">
                <div className="container d-flex align-items-center justify-content-between">

                    <h1 className="logo"><a href="/">EMSs</a></h1>

                    <a href="index.html" className="logo"><img src="assets/img/logo.png" alt="" className="img-fluid" /></a>

                    <nav id="navbar" className="navbar">
                        <ul>
                            <li><a className={`nav-link scrollto ${current === "dashboard" && "active"}`} href="/">Dashboard</a></li>
                            {/* <li><a className="nav-link scrollto" href="/">Circular</a></li> */}
                            <li><a className={`nav-link scrollto ${current === "enroll" && "active"}`} href="/enrollment">Enrollment</a></li>
                            <li><a className={`nav-link scrollto ${current === "mark" && "active"}`} href="/mark">Attendance {'&'} Marks</a></li>
                            <li><a className={`nav-link scrollto ${current === "fee" && "active"}`} href="/fee">Examination Fee</a></li>
                            <li><a className={`nav-link scrollto ${current === "result" && "active"}`} href="#contact">Academic Result</a></li>
                            <li><a className="getstarted scrollto" href="#about">Log out</a></li>
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle"></i>
                    </nav>
                </div>
            </header>
        </>
    )
}
export default Header;