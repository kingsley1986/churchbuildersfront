import axios from "axios";
import React, { useState, useEffect } from "react";
import clsx from "clsx";
import {Card, CardHeader, CardMedia, CardActions, CardContent} from "@mui/material";

import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ImageList from '@mui/material/ImageList';

import {  makeStyles,  ThemeProvider, createTheme } from '@mui/styles';
import { useTheme } from "@mui/system";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Link } from "react-router-dom";
import moment from "moment";
import styled from '@emotion/styled';





export default function EventsList() {

  const theme = useTheme();
  const [tileData, setTileData] = useState([]);
  const useStyles = styled((theme) => ({
    root: {
      maxWidth: "auto",
    },
    media: {
      // height: 300,
      paddingTop: "56.25%", // 16:9
      // height: "100%",
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
    cardheader: {
      fontSize: "1.6em",
      fontWeight: "bolder",
    },
  }));

  useEffect(() => {
    axios
      .get("https://cryptic-shelf-72177.herokuapp.com/events/api")
      .then((response) => {
        setTileData([...response.data]);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  const matchesm = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMd = useMediaQuery(theme.breakpoints.down("md"));

  const classes = useStyles();
  console.log(tileData)

  const nowIso = new Date();
  const getTitle = (startDateTs, endDateTs) => {
    const now = Date.parse(nowIso);

    if (endDateTs <= now) {
      return "Started:" + " " + moment(startDateTs).format("lll");
    }

    if (startDateTs < now && endDateTs > now) {
      return "Live:" + " " + moment(startDateTs).format("lll");
    }

    return "Starting:" + " " + moment(startDateTs).format("lll");
  };

  const getEnded = (startDateTs, endDateTs) => {
    const now = Date.parse(nowIso);

    if (endDateTs <= now) {
      return "Ended:" + " " + moment(startDateTs).format("lll");
    }

    if (startDateTs < now && endDateTs > now) {
      return "Will End:" + " " + moment(startDateTs).format("lll");
    }

    return "Ends:" + " " + moment(startDateTs).format("lll");
  };

  const getEventTitle = (title) => {
    if (title.length > 25) {
      return title.substring(0, 24) + "..";
    } else {
      return title;
    }
  };

  return (
    <div className={classes.root} style={{ padding: "2.5vw", marginTop: 60 }}>
      <ImageList
        rowHeigh={420}
        className={classes.gridList}
        gap={12}
        cols={matchesm ? 1 : matchesMd ? 2 : 3}
      >
        {tileData.map((event, key) => {
          return (
            <Card
              style={{
                marginBottom: "2rem",
                textDecoration: "none",
                background: "#C9C9C9",
              }}
              component={Link}
              to={"/events/" + event._id + "/eventcomments"}
              key={Math.floor(Math.random() * new Date().getTime())}
            >
              <div style={{ background: "white" }}>
                <h3
                  style={{
                    background: "	#800000",
                    color: "white",
                    textAlign: "center",
                  }}
                  className={classes.cardheader}
                >
                  {getEventTitle(event.title)}
                </h3>

                <CardHeader
                  avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                      CB
                    </Avatar>
                  }
                  title={getTitle(
                    Date.parse(event.startingDate),
                    Date.parse(event.closingDate)
                  )}
                  subheader={getEnded(
                    Date.parse(event.startingDate),
                    Date.parse(event.closingDate)
                  )}
                  style={{ background: "#DCDCDC" }}
                />
                <CardMedia  sx={{  maxHeight: 210 }}
                  className={classes.media}
                      component="img"

                  image={event.eventImage}
                  title="Paella dish"
                />
                <CardContent>
                  <Typography
                    style={{ color: "black", fontSize: "16px" }}
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {event.description.substring(0, 100)}....
                  </Typography>
                </CardContent>
              </div>
            </Card>
          );
        })}
        ;
      </ImageList>
    </div>
  );
}
