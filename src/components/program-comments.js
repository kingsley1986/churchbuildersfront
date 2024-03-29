import React, { useState, useEffect, useCallback, useRef } from "react";
import {useParams } from "react-router-dom";

import axios from "axios";
import AddComingWithModal from "../components/coming-with-modal.component";
import clsx from "clsx";

import {  makeStyles,  ThemeProvider } from '@mui/styles';
import { useTheme, createTheme } from "@mui/system";

// import Card from "@material-ui/core/Card";
// import CardHeader from "@material-ui/core/CardHeader";
// import CardMedia from "@material-ui/core/CardMedia";
// import CardContent from "@material-ui/core/CardContent";
// import CardActions from "@material-ui/core/CardActions";
// import Collapse from "@material-ui/core/Collapse";
// import Avatar from "@material-ui/core/Avatar";
// import IconButton from "@material-ui/core/IconButton";
// import Typography from "@material-ui/core/Typography";
// import { red } from "@material-ui/core/colors";
// import FavoriteIcon from "@material-ui/icons/Favorite";
// import ShareIcon from "@material-ui/icons/Share";
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import MoreVertIcon from "@material-ui/icons/MoreVert";
// import { useTheme } from "@mui/material/styles";
// import useMediaQuery from "@material-ui/core/useMediaQuery";
// import Grid from "@material-ui/core/Grid";
import moment from "moment";
// import Button from "@material-ui/core/Button";
// import FilledInput from "@material-ui/core/FilledInput";
// import FormControl from "@material-ui/core/FormControl";
// import FormHelperText from "@material-ui/core/FormHelperText";
// import Input from "@material-ui/core/Input";
// import InputLabel from "@material-ui/core/InputLabel";
// import OutlinedInput from "@material-ui/core/OutlinedInput";
// import Box from "@material-ui/core/Box";
// import { spacing } from "@material-ui/system";
// import Paper from "@material-ui/core/Paper";
// import Button1 from "react-bootstrap/Button";

// import GridList from "@material-ui/core/GridList";
// import GridListTile from "@material-ui/core/GridListTile";
// import GridListTileBar from "@material-ui/core/GridListTileBar";
// import ListSubheader from "@material-ui/core/ListSubheader";
// import InfoIcon from "@material-ui/icons/Info";
// import StarBorderIcon from "@material-ui/icons/StarBorder";

import ReCAPTCHA from "react-google-recaptcha";
import env from "react-dotenv";

const theme = createTheme();


const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      overflow: "hidden",
      // backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      // width: 500,
      height: 1850,
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      transform: "translateZ(0)",
    },
    titleBar: {
      background:
        "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
        "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
    },
    icon: {
      color: "white",
    },
  }));


export default function ProgramComments(props) {
  const {id} = useParams()

  const ProgramComment = (props) => (
    <div className="comment-container theme--light">
      <div className="comments">
        <div>
          <div className="card v-card v-sheet theme--light elevation-2">
            <div className="header">
              <div
                className="v-avatar avatar"
                style={{ height: "50px", width: "50px" }}
              >
                <img src="https://img.icons8.com/clouds/2x/holy-bible.png" />
              </div>
              <span className="displayName title">{props.comment.name}</span>{" "}
              <span className="displayName caption">
                {moment(props.comment.createdAt).format("llll")}
              </span>
            </div>
            {/**/}
            <div className="wrapper comment">
              <p>{props.comment.description}</p>
            </div>
            <div className="actions"></div>
            <div className="v-dialog__container" style={{ display: "block" }} />
          </div>
          {/**/}
          <div className="answers">{/**/}</div>
        </div>
      </div>
    </div>
  );

  const theme = useTheme();
  const [programs, setProgramData] = useState([]);
  const [comments, setCommentData] = useState([]);
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState("");
  const [token, setToken] = useState("");
  const reCaptcha = useRef();

  
  const classes = useStyles();

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const onDeleteEve = useCallback((e) => {
    e.preventDefault();

    axios
      .delete(
        "https://churchbuildersbackend.fly.dev/programs/" + id + "/delete"
      )

      .then(function (response) {
        onPageLoad();
        alert("Submitted Succefully");
      })

      .catch(function (err) {
        setError(err);
        console.log(err);
      });
  });

  useEffect(() => {
    axios
      .get(
        "https://churchbuildersbackend.fly.dev/programs/" +
        id +
        "/programcommentsapi"
      )

      .then((response) => {
        setProgramData(response.data);
      })

      .catch(function (error) {
        console.log(error);
      });
  }, []);
  const onPageLoad = () => {
    axios
      .get(
        "https://churchbuildersbackend.fly.dev/programs/" +
        id +
        "/programcommentsapi"
      )

      .then((response) => {
        setCommentData(response.data.programcomments);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    onPageLoad();
  }, []);

  const [eventDescription, setDescription] = React.useState("");
  const [name, setName] = React.useState("");

  const handleChange = (parameter) => (event) => {
    if (parameter === "name") {
      setName(event.target.value);
    }
    if (parameter === "description") {
      setDescription(event.target.value);
    }
  };

  const onSubmit = useCallback((e) => {
    e.preventDefault();
    if (!token) {
      alert("Yoou must verify the captcha");
      setError("Yoou must verify the captcha");
    } else {
      setError("");
      setName("");
      setDescription("");

      axios
        .post(
          "https://churchbuildersbackend.fly.dev/programs/" +
          id +
          "/createcommentapi",
          { name: name, description: eventDescription, token }
        )

        .then(function (response) {
          onPageLoad();
          alert("Submitted Succefully");
        })

        .catch(function (err) {
          setError(err);
          console.log(err);
        })
        .finally(() => {
          reCaptcha.current.reset();
          setToken("");
        });
    }
  });
  let eventCommentList = comments.map((comment, k) => (
    <ProgramComment comment={comment} key={k} />
  ));

  let commentLengt =
    comments.length > 1
      ? comments.length + " " + "Comments"
      : comments.length + " " + "Comment";

  return (
    <div className="center container-fluid p-0" style={{ marginTop: "3vw",  }}>
      <div className="justify-content-center text-center">
        <div className="col-12 col-lg-8 col-md-6 col-lg-4" style={{width: '90rem', margin: "auto"}}>
          <div className="card ">
            <img
              className="card-img"
              src={programs.programImage}
              alt="Bologna"
            />
            {/* <div className="card-img-overlay">
              <a href="#" className="btn btn-light btn-sm">
                Cooking
              </a>
            </div> */}
            <div className="card-body">
              <h2 className="card-title" style={{position: "relative", top: 40, paddingTop: 30, paddingBottom: 60}} >{programs.title}</h2>
              {/* <small className="text-muted cat">
                <i className="far fa-clock text-info" /> {moment(programs.createdAt).format("llll")}
                <i className="fas fa-users text-info" />
              </small> */}
              <p className="card-text" style={{}}>{programs.description}</p>
              <a href="#" className="btn btn-outline-success">
                {commentLengt}
              </a>
            </div>
            
          </div>
        </div>
        <div>
          <div className="container">
            <div className="row " />
            <div className="col-sm-2"></div>
            <div className="col-sm-10"></div>
            <div className="row">
              <div className="col-sm-2" />
              <div className="col-sm-10">
                <form className="form" onSubmit={onSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      value={name}
                      required
                      onChange={handleChange("name")}
                    />
                    <br />
                    <label htmlFor="comment">Comment:</label>
                    <textarea
                      className="form-control"
                      rows={5}
                      id="comment"
                      required
                      defaultValue={""}
                      value={eventDescription}
                      onChange={handleChange("description")}
                    />
                    <br />
                  </div>
                  <ReCAPTCHA
                    ref={reCaptcha}
                    sitekey={process.env.REACT_APP_RECAPTCHA_PUBLIC_KEY}
                    onChange={(token) => setToken(token)}
                    onExpired={(e) => setToken("")}
                  />

                  <button
                    type="submit"
                    id="myBtn"
                    class="btn btn-success"
                  // onClick={handleSubscribe}
                  >
                    Submit
                  </button>
                </form>

                <p id="warning" />
                {/* 
                <button
                  type="submit"
                  id="myBtn"
                  class="btn btn-success"
                  onClick={onDeleteEve}
                >
                  Delete
                </button> */}
              </div>
            </div>
            <div className="row">
              <div className="col-sm-2" />
              <div className="col-sm-10" />
            </div>
            <div className="row">
              <div className="col-sm-2"></div>
              <div className="col-sm-10">
                <table id="resultTable" className="table-striped">
                  <tbody id="resultBody"></tbody>
                </table>
              </div>
              <div className="table-responsive"></div>
            </div>
          </div>
        </div>

        <div class="comments">{eventCommentList}</div>
      </div>
    </div >
  );
}
