import axios from "axios";
import React, { useState, useEffect } from "react";

import {  makeStyles,  ThemeProvider, createTheme } from '@mui/styles';
import { useTheme } from "@mui/system";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import Typography from "@mui/material/Typography";
import styled from '@emotion/styled';


  const useStyles = styled((theme) => ({
    root: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      overflow: "hidden",
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      // width: 1100,
    },
    icon: {
      color: "rgba(255, 255, 255, 0.54)",
    },
    image: {
      height: "72%",
      width: "530px",
      objectFit: "cover",
      paddingBottom: 3,
    },
  }));

export default function Program() {
  const theme = useTheme();
  const [programData, setProgramData] = useState([]);


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

  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const classes = useStyles();


  return (
    <div className={classes.root} style={{ padding: "3vw" }}>
      <ImageListItem key="Subheader" style={{ height: "auto" }}></ImageListItem>
      <ImageList
        rowHeight={345}
        cols={matches ? 1 : 3}
        className={classes.gridList}
        gap={ matches ? 30 : 19}
          // sx={matches ? {p:1} : { p: 5 }}

        style={{  position: "relative" }}
      >
        {programData.length > 0 &&
          programData.map((tile, index) => {
            return (
              <ImageListItem
                key={Math.floor(Math.random() * new Date().getTime())}
                component={Link}
                to={"/programs/" + tile._id + "/programcomments"}
                style={{ textDecoration: "none", color: "black", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}
              >
                <img
                
                  alt={tile.title}
                  className={classes.image}
                  
                  src={tile.programImage}
                  style={{maxHeight: "230px"}}
                />
                <ImageListItemBar
                  title={tile.title}
                style={{position: "relative", background: "#A52A2A", fontWeight: "bolder", fontSize: '128px'}} 
                />

                <Typography
                  paragraph
                  style={{
                    borderBottom: "2px solid",
                    background: "white",
                    // padding: 7,
                  }}
                >
                  {tile.description.substring(0, 100)}..
                </Typography>
              </ImageListItem>
            );
          })}
      </ImageList>
         </div>
  );
}
