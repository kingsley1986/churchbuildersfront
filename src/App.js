import React from "react";

import {  BrowserRouter as Router,
  Routes,
  Route,
  Link, } from "react-router-dom";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";
import PostsList from "./components/posts-list.component";
import PostAndComments from "./components/post-comments.component";
import EventsList from "./components/events-list.component";
import EventAndComments from "./components/event-comments.component";
import GalleryList from "./components/galleries-list";
import Program from "./components/programs";
import ProgramComments from "./components/program-comments";
import Slider from "react-animated-slider";
import image1 from "./images/one.jpg";
import "react-animated-slider/build/horizontal.css";
import "normalize.css/normalize.css";
import "./components/homepage.css";
import "./components/event-home.css";
import "./components/home-programs.css";
import "./components/programs.css";
import "./components/events.css";
import "./components/posts.css";
import "./components/galleries.css";

import ProductCard from "./components/product";
import Slider2 from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card } from "react-bootstrap";
import AddComingWithModal from "./components/coming-with-modal.component";

import Header from "./components/Header";
import Home from "./components/home";
import Footer from "./components/footer";
import About from "./components/about";
import Video from "./components/videos";



import ContactForm from "./components/contactForm";

export default function App(props) {
  return (
    <Router>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programs" element={<Program/>} />
        <Route path="/programs/:id/programcomments" element={<ProgramComments />} />
        <Route path="/events" element={<EventsList/>} />
        <Route path="/events/:id/eventcomments" element={<EventAndComments />} />
        <Route path="/galleries" element={<GalleryList/>} />
        <Route path="/contacts" element={<ContactForm/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/videos" element={<Video/>} />


      </Routes>
            <Footer />

      
    </Router>

    // <Router>
    //   <Header />

    //   <Route
    //     path="/events/:id/coming_with"
    //     exact
    //     component={AddComingWithModal}
    //   />
    //     <Route exact path="/">
    //       <Home />
    //     </Route>
    //     <Route path="/programs" exact component={Program}>
    //       <Program />
    //     </Route>
    //     <Route
    //       path="/programs/:id/programcomments"
    //       exact
    //       component={ProgramComments}
    //     >
    //       <Route
    //         path="/programs/:id/programcomments"
    //         exact
    //         component={ProgramComments}
    //       />
    //     </Route>

    //     <Route path="/events" exact component={EventsList}>
    //       <EventsList />
    //     </Route>

    //     <Route
    //       path="/events/:id/eventcomments"
    //       exact
    //       component={EventAndComments}
    //     >
    //       <Route
    //         path="/events/:id/eventcomments"
    //         exact
    //         component={EventAndComments}
    //       />
    //     </Route>

    //     <Route path="/posts" exact component={PostsList}>
    //       <Route path="/posts" exact component={PostsList} />
    //     </Route>

    //     <Route path="/posts/:id/comments/api" exact component={PostAndComments}>
    //       <Route path="/posts/:id/comments/api" exact component={PostAndComments} />
    //     </Route>

    //     <Route path="/galleries" exact component={GalleryList}>
    //       <Route path="/galleries" exact component={GalleryList} />
    //     </Route>
    //   <Footer />
    // </Router>
  );
}
