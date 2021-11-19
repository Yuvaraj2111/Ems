import React from 'react';
import '../../assets/css/style.css'
import '../../assets/css/custom.css'
import Header from '../../components/header';
import Dashboard from './dashboard';
const Home = () => {
    return (
        <>

            <Header current="dashboard" />
            <section id="hero" className="d-flex align-items-center">

                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
                            <h1>Exam management systems</h1>
                            <h2></h2>
                            <div className="d-flex">
                                <a href="#" className="btn-get-started scrollto">Get Started</a>
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 hero-img">
                            <img src="assets/img/hero-img.png" className="img-fluid animated" alt="" />
                        </div>
                    </div>
                </div>

            </section>
            <div classNameName="container col-lg-10">
                <Dashboard />
            </div>
        </>
    )
}
export default Home;