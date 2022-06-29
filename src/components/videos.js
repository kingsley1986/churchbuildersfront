import React, { useState, useEffect } from "react";
import "../components/gallery/videos.css";
// import "../components/gallery/video.js"


export default function Video() {

        return (
          <div className="container" style={{marginTop: 30}}>
        <div className="videos-grid">
        <div className="videos-grid-video">
          <h5 id="videos-grid">
            One of Our I.T (coding students)
          </h5>
          <iframe width="100%" height="444" src="https://www.youtube.com/embed/H7PC23xyD4E" title="Mange,  14 years coder, one of our best student." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div className="videos-grid-video">
          <h5 id="videos-grid">
            Word of Encouragement
          </h5>
          <iframe width="100%" height="482" src="https://www.youtube.com/embed/XTHlk170eIo" title="God's ability and willingness are certain." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
       
      
        
      </div>
      </div>
        
        )
}