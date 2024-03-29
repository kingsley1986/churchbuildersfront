import axios from "axios";
import React, { useState, useEffect } from "react";

import {  makeStyles,  ThemeProvider, createTheme } from '@mui/styles';
import { useTheme } from "@mui/system";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import useMediaQuery from "@mui/material/useMediaQuery";

import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import styled from '@emotion/styled';
import "../components/gallery/style.css"

const useStyles = styled((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: "auto",
    height: "auto",
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
 
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});



export default function Gallery() {
  const classes = useStyles();
  const [selectedTile, setSelectedTile] = React.useState(null);
  const [value, setValue] = React.useState([]);
  const [galleryData, setGalleryData] = useState([]);

  useEffect(() => {
    axios
      .get("https://churchbuildersbackend.fly.dev/galleries/api")
      .then((response) => {
        setGalleryData([...response.data]);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const handleClickOpen = (tile) => {
    setSelectedTile(tile);
    console.log("clicked");
    console.log(tile);
  };

  const handleClose = () => {
    setSelectedTile(null);
  };

    const theme = useTheme();


    const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div className={classes.root }>
      <ImageList cols={matches ? 2 : 4}  >
        {/* <GridListTile key="Subheader" cols={2} style={{ height: "auto" }}>
          <ListSubheader component="div">December</ListSubheader>
        </GridListTile> */}
        {galleryData.map((tile) => (
          <ImageListItem key={tile.id} >
            <img src={tile.galleryImage} alt={tile.title}
              
                  value={tile.id}
                  onClick={() => handleClickOpen(tile)}
            />
            <ImageListItemBar
              title={tile.title}
              subtitle={<span>{tile.author}</span>}
              actionIcon={
                <IconButton
                  aria-label={`info about ${tile.title}`}
                  className={classes.icon}
                  value={tile.id}
                  onClick={() => handleClickOpen(tile)}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
      <Dialog
        fullScreen
        open={selectedTile !== null}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Close
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              To Return
            </Button>
          </Toolbar>
        </AppBar>
        {selectedTile && (
          <div style={{ textAlign: "center" }}>{selectedTile.title}</div>
        )}

        {selectedTile && (
          <img
          className={"popupimage"}
            style={{
              // display: "block",
              // maxWidth: "930px",
              // maxHeight: "2000px",
              // width: "auto",
              // height: "700px",
            }}
            
            src={selectedTile.galleryImage}
          />
        )}
      </Dialog>
    </div>
  );
}

// import axios from "axios";
// import React, { useState, useEffect, useCallback } from "react";
// import Galleries from "react-photo-gallery";
// import Carousel, { Modal, ModalGateway } from "react-images";

// export default function Gallery() {
//   const [currentImage, setCurrentImage] = useState(0);
//   const [viewerIsOpen, setViewerIsOpen] = useState(false);
//   const [photos, setGalleryData] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:9000/galleries")
//       .then((response) => {
//         setGalleryData([
//           ...response.data.map(function (gallery) {
//             return {
//               src: gallery.galleryImage,
//               width: 4,
//               height: 3,
//               title: gallery.title,
//             };
//           }),
//         ]);
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   }, []);
//   useEffect(() => {
//     // console.log(galleryData);
//   }, [photos, setGalleryData]);

//   const openLightbox = useCallback((event, { photo, index }) => {
//     setCurrentImage(index);
//     setViewerIsOpen(true);
//   }, []);

//   const closeLightbox = () => {
//     setCurrentImage(0);
//     setViewerIsOpen(false);
//   };

//   return (
//     <div>
//       <Galleries photos={photos} onClick={openLightbox} />
//       <ModalGateway>
//         {viewerIsOpen ? (
//           <Modal onClose={closeLightbox}>
//             <Carousel
//               currentIndex={currentImage}
//               views={photos.map((x) => ({
//                 srcset: x.srcSet,
//                 caption: x.title,
//               }))}
//             />
//           </Modal>
//         ) : null}
//       </ModalGateway>
//     </div>
//   );
// }
