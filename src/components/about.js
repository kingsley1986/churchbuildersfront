import React, { useState, useEffect } from "react";
import "../components/about.css";


export default function About(props) {
  return (
<div>
        <meta charSet="utf-8" />
        <title>Logistica - Shipping Company Website Template</title>
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <meta content name="keywords" />
        <meta content name="description" />
        {/* Favicon */}
        <link href="img/favicon.ico" rel="icon" />
        {/* Google Web Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Roboto:wght@500;700&display=swap" rel="stylesheet" />
        {/* Icon Font Stylesheet */}
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet" />
        {/* Libraries Stylesheet */}
        <link href="lib/animate/animate.min.css" rel="stylesheet" />
        <link href="lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet" />
        {/* Customized Bootstrap Stylesheet */}
        <link href="css/bootstrap.min.css" rel="stylesheet" />
        {/* Template Stylesheet */}
        <link href="css/style.css" rel="stylesheet" />
       
       
      
        {/* About Start */}
        <div className="container-fluid overflow-hidden py-5 px-lg-0">
          <div className="container about py-5 px-lg-0">
            <div className="row g-5 mx-lg-0">
              <div className="col-lg-6 ps-lg-0 wow fadeInLeft" data-wow-delay="0.1s" style={{minHeight: '400px'}}>
                <div className="position-relative h-100">
                  <img className="position-absolute img-fluid w-100 h-100" src="https://technext.github.io/logistica/img/about.jpg" style={{objectFit: 'cover'}} alt="" />
                </div>
              </div>
              <div className="col-lg-6 about-text wow fadeInUp" data-wow-delay="0.3s">
                <h6 className="text-secondary text-uppercase mb-3">About Us</h6>
                <h1 className="mb-5">Quick Transport and Logistics Solutions</h1>
                <p className="mb-5">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                <div className="row g-4 mb-5">
                  <div className="col-sm-6 wow fadeIn" data-wow-delay="0.5s">
                    <i className="fa fa-globe fa-3x text-primary mb-3" />
                    <h5>Global Coverage</h5>
                    <p className="m-0">Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam justo.</p>
                  </div>
                  <div className="col-sm-6 wow fadeIn" data-wow-delay="0.7s">
                    <i className="fa fa-shipping-fast fa-3x text-primary mb-3" />
                    <h5>On Time Delivery</h5>
                    <p className="m-0">Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam justo.</p>
                  </div>
                </div>
                <a href className="btn btn-primary py-3 px-5">Explore More</a>
              </div>
            </div>
          </div>
        </div>
        {/* About End */}
        {/* Fact Start */}
        <div className="container-xxl py-5">
          <div className="container py-5">
            <div className="row g-5">
              <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                <h6 className="text-secondary text-uppercase mb-3">Some Facts</h6>
                <h1 className="mb-5">#1 Place To Manage All Of Your Shipments</h1>
                <p className="mb-5">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                <div className="d-flex align-items-center">
                  <i className="fa fa-headphones fa-2x flex-shrink-0 bg-primary p-3 text-white" />
                  <div className="ps-4">
                    <h6>Call for any query!</h6>
                    <h3 className="text-primary m-0">+012 345 6789</h3>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="row g-4 align-items-center">
                  <div className="col-sm-6">
                    <div className="bg-primary p-4 mb-4 wow fadeIn" data-wow-delay="0.3s">
                      <i className="fa fa-users fa-2x text-white mb-3" />
                      <h2 className="text-white mb-2" data-toggle="counter-up">1234</h2>
                      <p className="text-white mb-0">Happy Clients</p>
                    </div>
                    <div className="bg-secondary p-4 wow fadeIn" data-wow-delay="0.5s">
                      <i className="fa fa-ship fa-2x text-white mb-3" />
                      <h2 className="text-white mb-2" data-toggle="counter-up">1234</h2>
                      <p className="text-white mb-0">Complete Shipments</p>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="bg-success p-4 wow fadeIn" data-wow-delay="0.7s">
                      <i className="fa fa-star fa-2x text-white mb-3" />
                      <h2 className="text-white mb-2" data-toggle="counter-up">1234</h2>
                      <p className="text-white mb-0">Customer Reviews</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Fact End */}
        {/* Feature Start */}
        <div className="container-fluid overflow-hidden py-5 px-lg-0">
          <div className="container feature py-5 px-lg-0">
            <div className="row g-5 mx-lg-0">
              <div className="col-lg-6 feature-text wow fadeInUp" data-wow-delay="0.1s">
                <h6 className="text-secondary text-uppercase mb-3">Our Features</h6>
                <h1 className="mb-5">We Are Trusted Logistics Company Since 1990</h1>
                <div className="d-flex mb-5 wow fadeInUp" data-wow-delay="0.3s">
                  <i className="fa fa-globe text-primary fa-3x flex-shrink-0" />
                  <div className="ms-4">
                    <h5>Worldwide Service</h5>
                    <p className="mb-0">Diam dolor ipsum sit amet eos erat ipsum lorem sed stet lorem sit clita duo justo magna erat amet</p>
                  </div>
                </div>
                <div className="d-flex mb-5 wow fadeIn" data-wow-delay="0.5s">
                  <i className="fa fa-shipping-fast text-primary fa-3x flex-shrink-0" />
                  <div className="ms-4">
                    <h5>On Time Delivery</h5>
                    <p className="mb-0">Diam dolor ipsum sit amet eos erat ipsum lorem sed stet lorem sit clita duo justo magna erat amet</p>
                  </div>
                </div>
                <div className="d-flex mb-0 wow fadeInUp" data-wow-delay="0.7s">
                  <i className="fa fa-headphones text-primary fa-3x flex-shrink-0" />
                  <div className="ms-4">
                    <h5>24/7 Telephone Support</h5>
                    <p className="mb-0">Diam dolor ipsum sit amet eos erat ipsum lorem sed stet lorem sit clita duo justo magna erat amet</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 pe-lg-0 wow fadeInRight" data-wow-delay="0.1s" style={{minHeight: '400px'}}>
                <div className="position-relative h-100">
                  <img className="position-absolute img-fluid w-100 h-100" src="https://technext.github.io/logistica/img/feature.jpg" style={{objectFit: 'cover'}} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Feature End */}
        {/* Team Start */}
        <div className="container-xxl py-5">
          <div className="container py-5">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
              <h6 className="text-secondary text-uppercase">Our Team</h6>
              <h1 className="mb-5">Expert Team Members</h1>
            </div>
            <div className="row g-4">
              <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                <div className="team-item p-4">
                  <div className="overflow-hidden mb-4">
                    <img className="img-fluid" src="https://technext.github.io/logistica/img/team-1.jpg" alt="" />
                  </div>
                  <h5 className="mb-0">Full Name</h5>
                  <p>Designation</p>
                  <div className="btn-slide mt-1">
                    <i className="fa fa-share" />
                    <span>
                      <a href><i className="fab fa-facebook-f" /></a>
                      <a href><i className="fab fa-twitter" /></a>
                      <a href><i className="fab fa-instagram" /></a>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                <div className="team-item p-4">
                  <div className="overflow-hidden mb-4">
                    <img className="img-fluid" src="https://technext.github.io/logistica/img/team-2.jpg" alt="" />
                  </div>
                  <h5 className="mb-0">Full Name</h5>
                  <p>Designation</p>
                  <div className="btn-slide mt-1">
                    <i className="fa fa-share" />
                    <span>
                      <a href><i className="fab fa-facebook-f" /></a>
                      <a href><i className="fab fa-twitter" /></a>
                      <a href><i className="fab fa-instagram" /></a>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                <div className="team-item p-4">
                  <div className="overflow-hidden mb-4">
                    <img className="img-fluid" src="https://technext.github.io/logistica/img/team-3.jpg" alt="" />
                  </div>
                  <h5 className="mb-0">Full Name</h5>
                  <p>Designation</p>
                  <div className="btn-slide mt-1">
                    <i className="fa fa-share" />
                    <span>
                      <a href><i className="fab fa-facebook-f" /></a>
                      <a href><i className="fab fa-twitter" /></a>
                      <a href><i className="fab fa-instagram" /></a>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.9s">
                <div className="team-item p-4">
                  <div className="overflow-hidden mb-4">
                    <img className="img-fluid" src="https://technext.github.io/logistica/img/team-4.jpg" alt="" />
                  </div>
                  <h5 className="mb-0">Full Name</h5>
                  <p>Designation</p>
                  <div className="btn-slide mt-1">
                    <i className="fa fa-share" />
                    <span>
                      <a href><i className="fab fa-facebook-f" /></a>
                      <a href><i className="fab fa-twitter" /></a>
                      <a href><i className="fab fa-instagram" /></a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Team End */}
    
        {/* Back to Top */}
        <a href="#" className="btn btn-lg btn-primary btn-lg-square rounded-0 back-to-top"><i className="bi bi-arrow-up" /></a>
        {/* JavaScript Libraries */}
        {/* Template Javascript */}
      </div>
    );
}
