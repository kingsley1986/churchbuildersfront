import React, { useState, useEffect } from "react";
import "../components/gallery/videos.css";
// import "../components/gallery/video.js"


export default function Video() {

        return (
            <div className="content">
            <div className="section-header">
            <h1>Video Gallery</h1>  
            </div>
            <div className="video-gallery">
            <div className="gallery-item ">
                <img src="https://assets.codepen.io/156905/rainier.jpg" alt="Mount Rainier" />
                <div className="gallery-item-caption">
                {/*<div>*/}
                <h2>Mount Rainier</h2>
                <p>14410 feet of adventure</p>
                {/*</div>*/}
                <a className="vimeo-popup" href="https://vimeo.com/179049611" />
                </div>
            </div>
            <div className="gallery-item">
                <img src="https://assets.codepen.io/156905/olympicnationalpark.jpg" alt="Olympic National Park" />
                <div className="gallery-item-caption">
                {/*<div>*/}
                <h2>Olympic National Park</h2>
                <p>Mountains, rain forests, wild coastlines</p>
                {/*</div>*/}
                <a className="vimeo-popup" href="https://vimeo.com/108785446" />
                </div>
            </div>
            <div className="gallery-item">
                <img src="https://assets.codepen.io/156905/northcascadespark.jpg" className="north-cascades-img" alt="North Cascades National Park" />
                <div className="gallery-item-caption">
                {/*<div>*/}
                <h2>North Cascades</h2>
                <p>The mountains are calling</p>
                {/*</div>*/}
                <a className="vimeo-popup" href="https://vimeo.com/3653567" />
                </div>
            </div>
            <div className="gallery-item">
                <img src="https://assets.codepen.io/156905/mountsthelens.jpg" alt="Mount St Helens" />
                <div className="gallery-item-caption">
                {/*<div>*/}
                <h2>Mount St. Helens</h2>
                <p>The one and only</p>
                {/*</div>*/}
                <a className="vimeo-popup" href="https://vimeo.com/171540296" />
                </div>
            </div>
            </div>
        </div>
        )
}