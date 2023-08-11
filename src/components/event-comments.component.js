import React, { useState, useEffect, useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import AddComingWithModal from "../components/coming-with-modal.component";
import clsx from "clsx";
import {Card, CardHeader, CardMedia, CardActions, CardContent} from "@mui/material";

import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {  makeStyles,  ThemeProvider, createTheme } from '@mui/styles';
import { useTheme } from "@mui/system";
import useMediaQuery from "@mui/material/useMediaQuery";
import Grid from "@mui/material/Grid";
import moment from "moment";
import Button from "@mui/material/Button";
import FilledInput from "@mui/material/FilledInput";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import Box from "@mui/material/Box";
import { spacing } from "@mui/system";
import Paper from "@mui/material/Paper";
import Button1 from "react-bootstrap/Button";

import ReCAPTCHA from "react-google-recaptcha";
import env from "react-dotenv";
import styled from '@emotion/styled';
import {useParams } from "react-router-dom";


export default function EventAndComments(props) {

      const {id} = useParams()
  const EventComment = (props) => (
    <div className={classes.root} >
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" gap={2} style={{marginTop: 10}}>
          <Grid item >
            {/* <Avatar>W</Avatar> */}
          </Grid>
          <Grid item xs>
            <Typography style={{color: "#E9967A	"}}>{props.comment.name}</Typography>
            <Typography>{props.comment.description}</Typography>
            <Typography>{props.comment.createdAt}</Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );


  const theme = useTheme();
  const [oneEvents, setEventData] = useState([]);
  const [comments, setCommentData] = useState([]);

  const [verified, setVerified] = useState(false);
  const [error, setError] = useState("");
  const [token, setToken] = useState("");
  const reCaptcha = useRef();

  const useStyles = styled((theme) => ({
    root: {
      maxWidth: 550,
    },
    media: {
      height: 0,

      paddingTop: "86%", // 16:9
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: "rotate(180deg)",
    },
    avatar: {
      backgroundColor: red[500],
    },
  }));

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  // const fetchData = () => {
  //   const theEvent =
  //     "http://localhost:9000/events/" +
  //     props.match.params.id +
  //     "/eventcomments";
  //   const theEventComments =
  //     "http://localhost:9000/events/" +
  //     props.match.params.id +
  //     "/eventcomments";

  //   const gettheEvent = axios.get(theEvent);
  //   const gettheEventComments = axios.get(theEventComments);

  //   axios.all([gettheEvent, gettheEventComments]).then(
  //     axios.spread((...allData) => {
  //       const events = allData;
  //       const eventComments = allData;

  //       setEventData(events);
  //       setCommentData(eventComments);
  //       console.log(events);
  //       console.log(eventComments);
  //     })
  //   );
  // };

  // useEffect(() => {
  //   fetchData();
  // }, [events]);

  const arrayPropToUse = React.useMemo(() => {
    if (!Array.isArray(props)) return [];
    return props;
  }, [props]);

  useEffect(() => {
    axios
      .get(
        "https://churchbuildersbackend.fly.dev/events/" +
        id +
        "/eventcomments/api"
      )

      .then((response) => {
        setEventData(response.data);
      })

      .catch(function (error) {
        console.log(error);
      });
  }, [arrayPropToUse]);

  const onPageLoad = () => {
    axios
      .get(
        "https://churchbuildersbackend.fly.dev/events/" +
        id +
        "/eventcomments/api"
      )

      .then((response) => {
        setCommentData(response.data.eventcomments);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    onPageLoad();
  }, []);
  const nowIso = new Date();
  const getTitle = (startDateTs, endDateTs) => {
    const now = Date.parse(nowIso);

    if (endDateTs <= now) {
      return "Started:" + " " + moment(startDateTs).format("LLLL");
    }

    if (startDateTs < now && endDateTs > now) {
      return "Live:" + " " + moment(startDateTs).format("LLLL");
    }

    return "Starting:" + " " + moment(startDateTs).format("LLLL");
  };

  const getEnded = (startDateTs, endDateTs) => {
    const now = Date.parse(nowIso);

    if (endDateTs <= now) {
      return "Ended:" + " " + moment(startDateTs).format("LLLL");
    }

    if (startDateTs < now && endDateTs > now) {
      return "Will End:" + " " + moment(startDateTs).format("LLLL");
    }

    return "Ends:" + " " + moment(startDateTs).format("LLLL");
  };

  const [eventDescription, setDescription] = React.useState("");
  const [name, setName] = React.useState("");
  const [going, setGoing] = React.useState("");
  const [modalShow, setModalShow] = React.useState(false);

  const handleChange = (parameter) => (event) => {
    if (parameter === "name") {
      setName(event.target.value);
    }
    if (parameter === "description") {
      setDescription(event.target.value);
    }
  };

  const recaptchaLoaded = () => {
    console.log("capcha successfully loaded");
  };

  const onChange = () => {
    setVerified(true);
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
          "https://churchbuildersbackend.fly.dev/events/" +
          id +
          "/eventcomment",
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

  const updateGoing = (going) => {
    axios
      .get("https://churchbuildersbackend.fly.dev/events/" + id + "/going")
      .then((response) => {
        setEventData(response.data);
      });
  };

  let eventCommentList = comments.map((comment, k) => (
    <EventComment comment={comment} key={k} />
  ));

  let commentLengt =
    comments.length > 1
      ? comments.length + " " + "Comments"
      : comments.length + " " + "Comment";
  let goingAndComingwith =
    oneEvents.going + oneEvents.coming_with <= 1
      ? oneEvents.going + oneEvents.coming_with + " " + "Person Coming"
      : oneEvents.going + oneEvents.coming_with + " " + "People are Coming";

  const onDeleteEve = useCallback((e) => {
    e.preventDefault();

    axios
      .delete(
        "https://churchbuildersbackend.fly.dev/events/" + id + "/delete"
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

    const matches = useMediaQuery(theme.breakpoints.down("sm"));


  return (
    <Grid
      container
      gap={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: "100vh" }}
      sx={matches ? {p:1} : { p: 40, marginTop: -37 }}
    >
      <Card className={classes.root} style={{}} > 
        <h3
          style={{
            background: "	#800000",
            color: "white",
            textAlign: "center",
          }}
          className={classes.cardheader}
        >
          {oneEvents.title}
        </h3>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              CB
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={getTitle(
            Date.parse(oneEvents.startingDate),
            Date.parse(oneEvents.closingDate)
          )}
          subheader={getEnded(
            Date.parse(oneEvents.startingDate),
            Date.parse(oneEvents.closingDate)
          )}
          style={{ background: "#DCDCDC" }}
        />
        <CardMedia
          className={classes.media}
           component="img"
          image={oneEvents.eventImage}
          title="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {oneEvents.description}
          </Typography>
        </CardContent>
      </Card>

      <>
        <div>
          <Button1 variant="outline-primary" size="sm">
            {commentLengt}
          </Button1>{" "}
          <Button1
            style={{ margin: "5px" }}
            variant="outline-success"
            size="sm"
          >
            {goingAndComingwith}
          </Button1>
          <Button1
            variant="success"
            size="sm"
            color="primary"
            onClick={() => {
              updateGoing(oneEvents._id);
              setModalShow(true);
            }}
          >
            Are you Coming? Click Here!
          </Button1>{" "}
        </div>
      </>
      <br></br>

      <AddComingWithModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        state={oneEvents._id}
        history={props.history}
      />

      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={onSubmit}
      >
        <FormControl>
          <InputLabel htmlFor="component-simple">Name</InputLabel>
          <Input
            id="component-simple"
            value={name}
            onChange={handleChange("name")}
            label="Name"
          />
        </FormControl>

        <FormControl variant="outlined">
          <InputLabel htmlFor="component-outlined">Description</InputLabel>
          <OutlinedInput
            id="component-outlined"
            value={eventDescription}
            onChange={handleChange("description")}
            label="Description"
            style={{ width: "42vw" }}
          />
          <ReCAPTCHA
            ref={reCaptcha}
            sitekey={process.env.REACT_APP_RECAPTCHA_PUBLIC_KEY}
            onChange={(token) => setToken(token)}
            onExpired={(e) => setToken("")}
          />
        </FormControl>
        <Button type="submit" fullWidth variant="contained" color="primary">
          Create Comment
        </Button>
        {/* <button
          type="submit"
          id="myBtn"
          class="btn btn-success"
          onClick={onDeleteEve}
        >
          Delete
        </button> */}
      </form>
      <CardContent >{eventCommentList}</CardContent>
    </Grid>
  );
}
