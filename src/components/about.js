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
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.2/font/bootstrap-icons.css"></link>
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
              <div className="col-lg-6 ps-lg-0 wow fadeInLeft" data-wow-delay="0.1s" style={{minHeight: '200px', height: "35rem"}}>
                <div className="position-relative h-100">
                  <img className="position-absolute img-fluid w-100 h-100" src="https://technext.github.io/logistica/img/about.jpg" style={{objectFit: 'cover'}} alt="" />
                </div>
              </div>
              <div className="col-lg-6 about-text wow fadeInUp" data-wow-delay="0.3s">
                <h6 className="text-secondary text-uppercase mb-3">About Us</h6>
                <h1 className="mb-5">The Youth Builders</h1>
                <div className="row g-4 mb-5">
                  <div className="col-sm-6 wow fadeIn" data-wow-delay="0.5s">
                    <i className="fa fa-globe fa-3x text-primary mb-3" />
                    <h5>Global Outreach/evangelism</h5>
                    <p className="m-0">We take the gospel to every corner. City, Suburbs, Villages, to the poor and to the rich, and to every race
                    </p>
                  </div>
                  <div className="col-sm-6 wow fadeIn" data-wow-delay="0.7s">
                    <i className="bi bi-cart4 fa-3x text-primary mb-3" />
                    <h5>Humanitarian</h5>
                    <p className="m-0">We believe in the gospel of compassion, love and sharing like Jesus did. We help the poor with food, and help those in need.
                    </p>
                  </div>
                </div>
                <a href className="btn btn-primary py-3 px-5">Explore More</a>
              </div>
                <p className="mb-5">

                  The Youth Builder is an interdenominational Christian training organisation founded in 2020.
                  We are situated at Khayelitsha, a township in Cape Town, South Africa. We have members from the Townships, suburbs and USA who joins our meetings through zoom video conference call.

                  <br></br>
                  We do evangelism and community outreach.
                  We goe house to house, streets, trains, and shopping centres to reach out to people with the gospel


                  <br></br>
                    <br></br>
                   This ministry is where youths, teenagers, kids and adults comes together as a family to learn about Jesus because we believe in the transformation power in the word of God. we use the bible to teach the youths how to be responsible, grow spiritually, morally, academically, get a job and be a good example in our communities.
                  our ministry is actively involved in community development, we don't want to see any of our youths jobless, or without skills. so, we support each other to go to school, acquire skills, etc.

                  <br></br>
                  <br></br>

                  We have a children's ministry called Yeshua Children Ministry, under The Youth Builders. We believe that our children must be trained in the ways of God so that when they grow up they will not depart from it. we are in partnership with CBN (Christian Broadcasting Network) so they supply us with bible animated videos called SuperBook which we use to teach the kids bible visually.


                     <br></br>
                    <br></br>
                  We have a Teenage ministry where we teach teenagers about God and use the bible to teach them how to overcome peer pressure that is leading many youths to drugs and crime in the communities.

                  <h5 style={{padding: 10}}>Our Goals:</h5>

                  (1) To Raise Godly generations through discipleship programs.
                  <br></br>
                  (2) Help the youths acquire relevant skills; we want to encourage youths in our communities to obtain a skill to improve their lives.
                  <br></br>
                  (3) Help our uneducated youths to go back to school (finish matric, night school, or tertiary education).
                  <br></br>
                   <br></br>
                  (4) Help the youths who are struggling with substance abuse find services to help them toward sobriety.
                  <br></br>
                   We goes on the street and reaches out to drug addicts and criminals, if they accept to change and come to Jesus, we take them to a Christian-based Drug Rehabilitation home.
                  <br></br>
                  (5) Find and provide soft skills and character development training for youths so that they can fit in the workforce.
                  <br></br>
                   <br></br>
                  (6) Helping the older people in our communities that require the help of food or run an errand.
                    <br></br>
                  We have a feeding program, helping those in need with food parcels/groceries and assisting helpless old people.
                   <br></br>
                  (7) Help teenagers with their academic needs.

                  <h5 style={{padding: 10}}>Our Objectives:</h5>
                  (1) Affiliate or partner with other Ministries, non-profit organizational trade schools (both online and onsite schools) and companies to secure opportunities for the youths to learn skills.
                  <br></br>
                   <br></br>
                  (2) Partner with substance abuse rehabilitation centers where we can send our youths to go and stay for a while until they have attained sobriety.
                  <br></br>
                   <br></br>
                  (3) Organise social programs for character development and entrepreneurship programs.
                  <br></br>
                   <br></br>
                  (4) Run our own skills programs through our youths who have acquired a different set of relevant skills.
                  <br></br>
                   <br></br>
                  (5) Host a Bible study once a week that reinforces our belief in the word of God and its power to be able to transform a person from bad to good.
                  <br></br>
                   <br></br>
                  (6) Run an after-school teaching program to help those that are struggling with any subject.
                  <br></br> 
                  If we see a youth in our communities who wants to do something good with his/her life but doesn't have money to pay for a short course or skills program, we will pay for him/her to acquire that skill.
                  Any young person who receives help from our movement is required to give back to the community by helping someone else in need. This can be in the form of transport fare to school or work, paying for someone's registration or school fee, a food parcel for those in need because we believe in the chain of help, not selfishness. If one person receives and helps and in turn, helps others, the help will continue, and before you know it, we will no longer have any youth standing alone or helpless in our communities


                   <br></br>
                    <br></br>
                 We have a free computer programing (coding) school where we teach kids and high school students how to code. build websites, basic games, and software.
                  
                </p>
                
            </div>
          </div>
        </div>
         <div className="container-fluid overflow-hidden py-5 px-lg-0">
          <div className="container about py-5 px-lg-0">
            <div className="row g-5 mx-lg-0">
              <div className="col-lg-6 ps-lg-0 wow fadeInLeft" data-wow-delay="0.1s" style={{minHeight: '400px', height: "40rem"}}>
                <div className="position-relative h-100">
                  <img className="position-absolute img-fluid w-100 h-100" src="mecrop.jpg" style={{objectFit: 'cover'}} alt="" />
                </div>
              </div>
              <div className="col-lg-6 about-text wow fadeInUp" data-wow-delay="0.3s">
                <h6 className="text-secondary text-uppercase mb-3">About The Founder</h6>
                <h1 className="mb-5" style={{ fontSize: "2rem"}}>Kingsley Chukwuzitere Chukwuma</h1>
                <p className="mb-5">
                  Bro Kingsley Chukwuma is a full-time preacher of the gospel of Jesus Christ and a missionary.
                  He does streets, door to door and train evangelism, drug addicts/criminals evangelism. children, teenagers, and youth ministry. Helping the poor and elderly. He is also a software developer. After moving into full-time ministry he opened a coding Academy where we teach coding to High school students
                </p>
                <div className="row g-4 mb-5">
                  <div className="col-sm-6 wow fadeIn" data-wow-delay="0.5s">
                    <i className="fa fa-globe fa-3x text-primary mb-3" />
                    <h5>Global Mission Minded</h5>
                    <p className="m-0">
                      Served in Mali as a missionary where we reached out to the Muslims with the gospel
                    </p>
                  </div>
                  
                  <div className="col-sm-6 wow fadeIn" data-wow-delay="0.7s">
                    <i className="bi bi-cart4 fa-3x text-primary mb-3" />
                    <h5>Passion For the Poor</h5>
                    <p className="m-0">
                      Passionate about feeding the poor and empowering them with skills
                    </p>
                  </div>
                </div>
                <a href className="btn btn-primary py-3 px-5">Explore More</a>
              </div>
            </div>
          </div>
        </div>
        {/* About End */}
        {/* Fact Start */}
        {/* <div className="container-xxl py-5">
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
        </div> */}
        {/* Fact End */}
        {/* Feature Start */}
        <div className="container-fluid overflow-hidden py-5 px-lg-0">
          <div className="container feature py-5 px-lg-0">
            <div className="row g-5 mx-lg-0">
              <div className="col-lg-6 feature-text wow fadeInUp" data-wow-delay="0.1s">
                <h6 className="text-secondary text-uppercase mb-3">Our Community Programs</h6>
                <h1 className="mb-5">We are fully commited in :</h1>
                <div className="d-flex mb-5 wow fadeInUp" data-wow-delay="0.3s">
                  <i className="fa fa-globe text-primary fa-3x flex-shrink-0" />
                  <div className="ms-4">
                    <h5>Winnning people to Jesus</h5>
                    <p className="mb-0">Through Door to Door and streets evangelism, and Outreache in the shooping centers, children, teenagers and youths ministry</p>
                  </div>
                </div>
                <div className="d-flex mb-5 wow fadeIn" data-wow-delay="0.5s">
                  <i className="bi bi-cart4 text-primary fa-3x flex-shrink-0" />
                  <div className="ms-4">
                    <h5>Feeding and Helping the Poor</h5>
                    <p className="mb-0">Over the years, we have spent thousands of dollars to help feed and cloth the poor, pay school fees and fix peoples houses</p>
                  </div>
                </div>
                <div className="d-flex mb-0 wow fadeInUp" data-wow-delay="0.7s">
                  <i className="bi bi-mortarboard-fill text-primary fa-3x flex-shrink-0" />
                  <div className="ms-4">
                    <h5>Skills training for youths and teenagers</h5>
                    <p className="mb-0">
                      We believe in helping believers to excel in every areas of their lives, academically, Materially and Spiritually. So, we equip them with different skills to excel eg, Computer programming, Graphic design, barista etc
                    </p>
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
