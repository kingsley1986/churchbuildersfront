import axios from "axios";
import React, { useState, useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
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
      .get("https://cryptic-shelf-72177.herokuapp.com/programs/api")
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
        rowHeight={550}
        cols={matches ? 1 : 3}
        className={classes.gridList}
        gap={19}
        style={{ background: "#A52A2A		" }}
      >
        {programData.length > 0 &&
          programData.map((tile, index) => {
            return (
              <ImageListItem
                key={Math.floor(Math.random() * new Date().getTime())}
                component={Link}
                to={"/programs/" + tile._id + "/programcomments"}
                style={{ textDecoration: "none", color: "black" }}
              >
                <img
                  src={tile.programImage}
                  alt={tile.title}
                  className={classes.image}
                />
                <ImageListItemBar
                  titleposition="top"
                  title={tile.title}
                // style={{ height: 400 }}
                />

                <Typography
                  paragraph
                  style={{
                    borderBottom: "2px solid",
                    background: "white",
                    padding: 7,
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
