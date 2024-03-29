import React, { useState, useEffect } from "react";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";

import Slider from "react-animated-slider";
import image1 from "../images/one.jpg";
import image2 from "../images/youthsone.jpg";
import image3 from "../images/youthseigt.jpg";
import "react-animated-slider/build/horizontal.css";
import "normalize.css/normalize.css";
import "../components/homepage.css";
import Slider2 from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { Card2 } from "react-bootstrap";


import {  makeStyles,  ThemeProvider } from '@mui/styles';
import { useTheme, createTheme } from "@mui/system";

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import useMediaQuery from "@mui/material/useMediaQuery";
import ContactForm from "../components/contactForm";

import clsx from "clsx";

import {Card, CardHeader, CardMedia, CardActions, CardContent} from "@mui/material";
// import CardHeader from "@mui/material/CardHeader";
// import CardMedia from "@mui/material/CardMedia";
// import CardContent from "@mui/material/CardContent";
// import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import moment from "moment";
import { post } from "jquery";
import $ from "jquery";

const theme = createTheme();


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    // backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    width: 1200,
    // height: 950,
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
  root3: {
    maxWidth: 345,
    //  [theme.breakpoints.down("sm")]: {
    //   maxWidth: 250,
    //   maxHeight: 350,
    // },
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    // transition: theme.transitions.create("transform", {
    //   duration: theme.transitions.duration.shortest,
    // }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function Home(props) {
  const EventLive = (props) => (
    <div>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            LIVE
          </Avatar>
        }
        title={props.live.title}
      />
      <div className="dateevent">
        <div class="livestartedclass col-md-4">Started:</div>

        {moment(props.live.startingDate).format("LLLL")}
      </div>
      <div className="dateevent">
        <div class="liveendingclass">Closing:</div>

        {moment(props.live.closingDate).format("LLLL")}
      </div>
      <CardMedia
        className={classes.media}
        image={props.live ? props.live.eventImage : ""}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.live.description.substring(0, 70)}
        </Typography>
      </CardContent>
    </div>
  );

  const theme = useTheme();

  const [slides, setSlides] = useState([]);
  const [programData, setProgramData] = useState([]);
  const [liveEventData, setLiveEvent] = useState([]);

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    axios
      .get("https://churchbuildersbackend.fly.dev/programs/api")
      .then((response) => {
        setProgramData([...response.data]);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://churchbuildersbackend.fly.dev/events/api")
      .then((response) => {
        setSlides([...response.data]);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  useEffect(() => {
    axios
      .get("https://churchbuildersbackend.fly.dev/events/lives")
      .then((response) => {
        setLiveEvent([...response.data]);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const goingPeople = (going, coming_with) => {
    if (going + coming_with === 1) {
      return going + coming_with + " Person Going";
    } else if (going === 0) {
      return "No one have signed up yet";
    } else {
      return going + coming_with + " Going";
    }
  };

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      // {
      //   breakpoint: 1200,
      //   settings: {
      //     slidesToShow: 2,
      //     slidesToScroll: 2,
      //     infinite: true,
      //     dots: true,
      //   },
      // },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const content = [
    {
      title: "Our Youths Department Called The Youth Builders",
      description:
        "we are fully commited in building building youths that will represent the kingdom of God on earth, and be a great examples in our communities",
      button: "Donate",
      image: image2,
      // user: "Luan Gjokaj",
      userProfile: "https://i.imgur.com/JSW6mEk.png",
    },
    {
      title: "Tortor Dapibus Commodo Aenean Quam",
      description:
        "Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.",
      button: "Donate",
      image: image3,
      user: "Erich Behrens",
      userProfile: "https://i.imgur.com/0Clfnu7.png",
    },
    {
      title: "Our Children Department Called Yeshua Children Ministry",
      description:
        "We believe that our children must be trained in the ways of God so that when they grow up they will not depart from it, and we also believe in equipping children with proper education to make them stand out in our society.",
      button: "Donate",
      image: image1,
      user: "Bruno Vizovskyy",
      userProfile: "https://i.imgur.com/4KeKvtH.png",
    },
  ];
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const classes = useStyles();

  // const BACKEND_URL = "http://localhost:9000/contact_form/";

  // const [values, setValues] = useState({});

  // const saveForm = () => {
  //   const sendAction = fetch(BACKEND_URL, {
  //     method: "POST",
  //     mode: "cors",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify(values),
  //   });
  //   sendAction.then(() => {
  //     alert("thanks");
  //     setValues({ name: "", email: "", request: "" });
  //   });
  //   sendAction.catch((err) => {
  //     alert(err.message);
  //   });  
  // };
  let eventLive = liveEventData.map((live, k) => (
    <EventLive live={live} key={k} />
  ));

  return (
    <div>
      <Slider className="slider-wrapper" autoplay={3000} infinite="true">
        {content.map((item, index) => (
          <div
            key={index}
            className="slider-content"
            style={{
              background: `url('${item.image}') no-repeat center center`,
            }}
          >
            <div className="inner">
              <h1>{item.title}</h1>
              <p>{item.description}</p>
              <button>{item.button}</button>
            </div>
            <section>
              <div>
                <Card
                  // style={{ width: "50vh", height: "53vh" }}
                  className={classes.root3}
                >
                  {eventLive}
                </Card>
              </div>
            </section>
          </div>
        ))}
      </Slider>
      <div className="sliderclass" style={{ padding: 12 }}>
        <div className="container">
          <div className="eventlist">These are the Upcoming Events</div>

        </div>
        <Slider2 {...settings}>
          {slides.map((slide, index) => {
            return (
              <div>
                <div
                  className="row"
                  style={{
                    marginLeft: -2,
                    padding: 4
                    
                  }}
                >
                  <div
                    className="col-12 col-lg-12 col-lg-12 col-lg-12"
                    style={{ backgroundColor: "#e9ecef" }}
                  >
                    <div className="card" style={{ marginLeft: 0 }}>
                      <div
                        style={{
                          position: "relative",
                          height: "250px",
                          width: "100%",
                          overflow: "hidden",
                        }}
                      >
                        <img
                          style={{
                            objectFit: "cover",
                            height: "200px",
                          }}
                          className="card-img"
                          src={slide.eventImage}
                          alt="Bologna"
                        />
                      </div>
                      {/* <div className="card-img-overlay">
                    <a href="#" className="btn btn-light btn-sm">
                      Cooking
                    </a>
                  </div> */}
                      <div className="card-body">
                        <h4 className="card-title" style={{ fontSize: "26px", backgroundColor: "#8B0000	", color: 'white' }}>{slide.title}</h4>
                        <div className="text-center">
                          {" "}
                          <button
                            type="button"
                            class="btn btn-md btn-outline-success py-0"
                          >
                            {goingPeople(slide.going, slide.coming_with)}
                          </button>
                        </div>

                        <small
                          className="text-muted cat"
                          className="text-center"
                        >
                          <div className="text-center">
                            <i className="far text-info" />{" "}
                            <strong className="mystarting" style={{paddingRight: 30, fontWeight: "bolder",}}>Starting </strong>
                            <span class="startingclass">
                              {" "}
                              {moment(slide.startingDate).format("LLLL")}
                            </span>
                          </div>
                          <div className="views">
                            <strong style={{paddingRight: 17}}>Closing </strong>{" "}
                            <span class="ingredient endingclass" style={{}}>
                              {moment(slide.closingDate).format("LLLL")}
                            </span>
                          </div>
                        </small>
                        <p className="card-text text-center" style={{ backgroundColor: "white", justifyContent: "center", textAlign: 'left !important'}}>
                          {slide.description.substring(0, 90)}
                        </p>

                        <a
                          href={"/events/" + slide._id + "/eventcomments"}
                          className="btn-grad"
                        >
                          Click here to attend
                        </a>
                      </div>
                      {/* <div className="card-footer text-muted d-flex justify-content-between bg-transparent border-top-0">
                    <div className="views">
                      <strong>Closing</strong>{" "}
                      <span class="ingredient">
                        {moment(slide.closingDate).format("LLLL")}
                      </span>
                    </div>
                    <div className="stats">
                      <i className="far fa-eye" /> 1347
                      <i className="far fa-comment" />{" "}
                      {slide.eventcomments.length}
                    </div>
                  </div> */}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider2>
      </div>
      <br></br>
      <br></br>
      <div className="container">
        <div className="programlist">These are list of our Programs and Activities</div>

      </div>
      <div className={classes.root} >
        <ImageList
          cols={matches ? 1 : 3}
          rowHeight={370}
          gap={2}
          className={classes.gridList}
          sx={matches ? {p:1} : { p: 5 }}
          
        >
          {programData.length > 0 &&
            programData.map((tile, index) => {
              return (
                <ImageListItem
                  component={Link}
                  to={"/programs/" + tile._id + "/programcomments"}
                  key={Math.floor(Math.random() * new Date().getTime())}
                >
                  <div>
                    <title>Airbnb home</title>
                    <link
                      href="https://fonts.googleapis.com/css?family=Open+Sans:400,300,700|Raleway:300,400,500,700|Varela+Round:400"
                      rel="stylesheet"
                    />
                    <link
                      href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
                      rel="stylesheet"
                    />
                    <meta charSet="UTF-8" />
                    <div id="app" />

                    <div className="container forprogramhome">
                      <h2
                        className="text-center"
                        style={{
                          background: "#FF6347",
                          color: "white",
                          fontSize: "1.7rem",
                          fontFamily: "Bookman, URW Bookman L, serif",
                        }}
                      >
                        {tile.title}
                      </h2>
                      <div className="cards">
                        <div className="cardhome">
                          <div
                            className="card-body-program-home"
                            style={{
                              backgroundImage: `url(${tile.programImage}), linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.2))`,
                            }}
                          >
                            <span
                              className="card-category"
                              style={{
                                background: "#A0522D",
                                fontFamily:
                                  " Comic Sans MS, Comic Sans, cursive",
                              }}
                            >
                              {/* {tile.programtype} */}
                            </span>

                            <a className="card-link" href="#" />
                          </div>
                          <div className="card-footer">
                             <Typography paragraph style={{ fontSize: 13, color: "black"}}>
                              {tile.description.substring(0, 178)}
                                      </Typography>

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ImageListItem>
              );
            })}
        </ImageList>
      </div>
      <div
        className="container center_div"
        style={{ marginTop: 100, backgroundColor: "rgba(255, 0, 0, 0.4)" }}
      >
        {" "}
        <ContactForm
        // values={values}
        // setValues={setValues}
        // onSubmit={saveForm}
        />
      </div>
    </div>
  );
}
