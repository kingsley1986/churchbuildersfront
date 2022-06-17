import React, { useState, useEffect } from "react";
import "../components/gallery/videos.css";
// import "../components/gallery/video.js"


export default function Video() {

        return (
            <main>
          
          {/* Whats New Start */}
          <section className="whats-news-area pt-50 pb-20 gray-bg">
            <div className="container">
              <div className="row">
                <div className="col-lg-8">
                  <div className="whats-news-wrapper">
                    
                    {/* Tab content */}
                    <div className="row">
                      <div className="col-12">
                        {/* Nav Card */}
                        <div className="tab-content" id="nav-tabContent">
                        
                          <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                            <div className="row">
                              {/* Left Details Caption */}
                               
                              {/* Right single caption */}
                              <div className="col-xl-6 col-lg-12">
                                <div className="row">
                                  {/* single */}
                                  <div className="col-xl-12 col-lg-6 col-md-6 col-sm-10">
                                    <div className="whats-right-single mb-20">
                                      <div className="whats-right-img">
                                        <img src="assets/img/gallery/whats_right_img1.png" alt="" />
                                      </div>
                                      <div className="whats-right-cap">
                                        <span className="colorb">FASHION</span>
                                        <h4><a href="latest_news.html">Portrait of group of friends ting eat. market in.</a></h4>
                                        <p>Jun 19, 2020</p> 
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-xl-12 col-lg-6 col-md-6 col-sm-10">
                                    <div className="whats-right-single mb-20">
                                      <div className="whats-right-img">
                                        <img src="assets/img/gallery/whats_right_img2.png" alt="" />
                                      </div>
                                      <div className="whats-right-cap">
                                        <span className="colorb">FASHION</span>
                                        <h4><a href="latest_news.html">Portrait of group of friends ting eat. market in.</a></h4>
                                        <p>Jun 19, 2020</p> 
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-xl-12 col-lg-6 col-md-6 col-sm-10">
                                    <div className="whats-right-single mb-20">
                                      <div className="whats-right-img">
                                        <img src="assets/img/gallery/whats_right_img3.png" alt="" />
                                      </div>
                                      <div className="whats-right-cap">
                                        <span className="colorg">FASHION</span>
                                        <h4><a href="latest_news.html">Portrait of group of friends ting eat. market in.</a></h4>
                                        <p>Jun 19, 2020</p> 
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-xl-12 col-lg-6 col-md-6 col-sm-10">
                                    <div className="whats-right-single mb-20">
                                      <div className="whats-right-img">
                                        <img src="assets/img/gallery/whats_right_img4.png" alt="" />
                                      </div>
                                      <div className="whats-right-cap">
                                        <span className="colorr">FASHION</span>
                                        <h4><a href="latest_news.html">Portrait of group of friends ting eat. market in.</a></h4>
                                        <p>Jun 19, 2020</p> 
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Card three */}
                          <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                            <div className="row">
                              {/* Left Details Caption */}
                              <div className="col-xl-6">
                                <div className="whats-news-single mb-40">
                                  <div className="whates-img">
                                    <img src="assets/img/gallery/whats_right_img4.png" alt="" />
                                  </div>
                                  <div className="whates-caption">
                                    <h4><a href="#">Secretart for Economic Air
                                        plane that looks like</a></h4>
                                    <span>by Alice cloe   -   Jun 19, 2020</span>
                                    <p>Struggling to sell one multi-million dollar home currently on the market won’t stop actress and singer Jennifer Lopez.</p>
                                  </div>
                                </div>
                              </div>
                              {/* Right single caption */}
                              <div className="col-xl-6 col-lg-12">
                                <div className="row">
                                  {/* single */}
                                  <div className="col-xl-12 col-lg-6 col-md-6 col-sm-10">
                                    <div className="whats-right-single mb-20">
                                      <div className="whats-right-img">
                                        <img src="assets/img/gallery/whats_right_img1.png" alt="" />
                                      </div>
                                      <div className="whats-right-cap">
                                        <span className="colorb">FASHION</span>
                                        <h4><a href="latest_news.html">Portrait of group of friends ting eat. market in.</a></h4>
                                        <p>Jun 19, 2020</p> 
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-xl-12 col-lg-6 col-md-6 col-sm-10">
                                    <div className="whats-right-single mb-20">
                                      <div className="whats-right-img">
                                        <img src="assets/img/gallery/whats_right_img2.png" alt="" />
                                      </div>
                                      <div className="whats-right-cap">
                                        <span className="colorb">FASHION</span>
                                        <h4><a href="latest_news.html">Portrait of group of friends ting eat. market in.</a></h4>
                                        <p>Jun 19, 2020</p> 
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-xl-12 col-lg-6 col-md-6 col-sm-10">
                                    <div className="whats-right-single mb-20">
                                      <div className="whats-right-img">
                                        <img src="assets/img/gallery/whats_right_img3.png" alt="" />
                                      </div>
                                      <div className="whats-right-cap">
                                        <span className="colorg">FASHION</span>
                                        <h4><a href="latest_news.html">Portrait of group of friends ting eat. market in.</a></h4>
                                        <p>Jun 19, 2020</p> 
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-xl-12 col-lg-6 col-md-6 col-sm-10">
                                    <div className="whats-right-single mb-20">
                                      <div className="whats-right-img">
                                        <img src="assets/img/gallery/whats_right_img4.png" alt="" />
                                      </div>
                                      <div className="whats-right-cap">
                                        <span className="colorr">FASHION</span>
                                        <h4><a href="latest_news.html">Portrait of group of friends ting eat. market in.</a></h4>
                                        <p>Jun 19, 2020</p> 
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* card fure */}
                          <div className="tab-pane fade" id="nav-last" role="tabpanel" aria-labelledby="nav-last-tab">
                            <div className="row">
                              {/* Left Details Caption */}
                              <div className="col-xl-6">
                                <div className="whats-news-single mb-40">
                                  <div className="whates-img">
                                    <img src="assets/img/gallery/whats_right_img2.png" alt="" />
                                  </div>
                                  <div className="whates-caption">
                                    <h4><a href="#">Secretart for Economic Air
                                        plane that looks like</a></h4>
                                    <span>by Alice cloe   -   Jun 19, 2020</span>
                                    <p>Struggling to sell one multi-million dollar home currently on the market won’t stop actress and singer Jennifer Lopez.</p>
                                  </div>
                                </div>
                              </div>
                              {/* Right single caption */}
                              <div className="col-xl-6 col-lg-12">
                                <div className="row">
                                  {/* single */}
                                  <div className="col-xl-12 col-lg-6 col-md-6 col-sm-10">
                                    <div className="whats-right-single mb-20">
                                      <div className="whats-right-img">
                                        <img src="assets/img/gallery/whats_right_img1.png" alt="" />
                                      </div>
                                      <div className="whats-right-cap">
                                        <span className="colorb">FASHION</span>
                                        <h4><a href="latest_news.html">Portrait of group of friends ting eat. market in.</a></h4>
                                        <p>Jun 19, 2020</p> 
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-xl-12 col-lg-6 col-md-6 col-sm-10">
                                    <div className="whats-right-single mb-20">
                                      <div className="whats-right-img">
                                        <img src="assets/img/gallery/whats_right_img2.png" alt="" />
                                      </div>
                                      <div className="whats-right-cap">
                                        <span className="colorb">FASHION</span>
                                        <h4><a href="latest_news.html">Portrait of group of friends ting eat. market in.</a></h4>
                                        <p>Jun 19, 2020</p> 
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-xl-12 col-lg-6 col-md-6 col-sm-10">
                                    <div className="whats-right-single mb-20">
                                      <div className="whats-right-img">
                                        <img src="assets/img/gallery/whats_right_img3.png" alt="" />
                                      </div>
                                      <div className="whats-right-cap">
                                        <span className="colorg">FASHION</span>
                                        <h4><a href="latest_news.html">Portrait of group of friends ting eat. market in.</a></h4>
                                        <p>Jun 19, 2020</p> 
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-xl-12 col-lg-6 col-md-6 col-sm-10">
                                    <div className="whats-right-single mb-20">
                                      <div className="whats-right-img">
                                        <img src="assets/img/gallery/whats_right_img4.png" alt="" />
                                      </div>
                                      <div className="whats-right-cap">
                                        <span className="colorr">FASHION</span>
                                        <h4><a href="latest_news.html">Portrait of group of friends ting eat. market in.</a></h4>
                                        <p>Jun 19, 2020</p> 
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* card Five */}
                          <div className="tab-pane fade" id="nav-nav-Sport" role="tabpanel" aria-labelledby="nav-Sports">
                            <div className="row">
                              {/* Left Details Caption */}
                              <div className="col-xl-6">
                                <div className="whats-news-single mb-40">
                                  <div className="whates-img">
                                    <img src="assets/img/gallery/whats_news_details1.png" alt="" />
                                  </div>
                                  <div className="whates-caption">
                                    <h4><a href="#">Secretart for Economic Air
                                        plane that looks like</a></h4>
                                    <span>by Alice cloe   -   Jun 19, 2020</span>
                                    <p>Struggling to sell one multi-million dollar home currently on the market won’t stop actress and singer Jennifer Lopez.</p>
                                  </div>
                                </div>
                              </div>
                              {/* Right single caption */}
                              <div className="col-xl-6 col-lg-12">
                                <div className="row">
                                  {/* single */}
                                  <div className="col-xl-12 col-lg-6 col-md-6 col-sm-10">
                                    <div className="whats-right-single mb-20">
                                      <div className="whats-right-img">
                                        <img src="assets/img/gallery/whats_right_img1.png" alt="" />
                                      </div>
                                      <div className="whats-right-cap">
                                        <span className="colorb">FASHION</span>
                                        <h4><a href="latest_news.html">Portrait of group of friends ting eat. market in.</a></h4>
                                        <p>Jun 19, 2020</p> 
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-xl-12 col-lg-6 col-md-6 col-sm-10">
                                    <div className="whats-right-single mb-20">
                                      <div className="whats-right-img">
                                        <img src="assets/img/gallery/whats_right_img2.png" alt="" />
                                      </div>
                                      <div className="whats-right-cap">
                                        <span className="colorb">FASHION</span>
                                        <h4><a href="latest_news.html">Portrait of group of friends ting eat. market in.</a></h4>
                                        <p>Jun 19, 2020</p> 
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-xl-12 col-lg-6 col-md-6 col-sm-10">
                                    <div className="whats-right-single mb-20">
                                      <div className="whats-right-img">
                                        <img src="assets/img/gallery/whats_right_img3.png" alt="" />
                                      </div>
                                      <div className="whats-right-cap">
                                        <span className="colorg">FASHION</span>
                                        <h4><a href="latest_news.html">Portrait of group of friends ting eat. market in.</a></h4>
                                        <p>Jun 19, 2020</p> 
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-xl-12 col-lg-6 col-md-6 col-sm-10">
                                    <div className="whats-right-single mb-20">
                                      <div className="whats-right-img">
                                        <img src="assets/img/gallery/whats_right_img4.png" alt="" />
                                      </div>
                                      <div className="whats-right-cap">
                                        <span className="colorr">FASHION</span>
                                        <h4><a href="latest_news.html">Portrait of group of friends ting eat. market in.</a></h4>
                                        <p>Jun 19, 2020</p> 
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* End Nav Card */}
                      </div>
                    </div>
                  </div>
                  {/* Banner */}
                  <div className="banner-one mt-20 mb-30">
                    <img src="assets/img/gallery/body_card1.png" alt="" />
                  </div>
                </div>
                <div className="col-lg-4">
                  {/* Flow Socail */}
                  <div className="single-follow mb-45">
                    <div className="single-box">
                      <div className="follow-us d-flex align-items-center">
                        <div className="follow-social">
                          <a href="#"><img src="assets/img/news/icon-fb.png" alt="" /></a>
                        </div>
                        <div className="follow-count">  
                          <span>8,045</span>
                          <p>Fans</p>
                        </div>
                      </div> 
                      <div className="follow-us d-flex align-items-center">
                        <div className="follow-social">
                          <a href="#"><img src="assets/img/news/icon-tw.png" alt="" /></a>
                        </div>
                        <div className="follow-count">
                          <span>8,045</span>
                          <p>Fans</p>
                        </div>
                      </div>
                      <div className="follow-us d-flex align-items-center">
                        <div className="follow-social">
                          <a href="#"><img src="assets/img/news/icon-ins.png" alt="" /></a>
                        </div>
                        <div className="follow-count">
                          <span>8,045</span>
                          <p>Fans</p>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                  {/* Most Recent Area */}
                  
                </div>
              </div>
            </div>
          </section>
          {/* Whats New End */}
          
          
         
          
        </main>
        
        )
}