import React from "react"

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-autoplay.css";
import "lightgallery/css/lg-share.css";
import IMAGES from './partner.json'
import './letak.scss';
import { useEffect } from "react";
import { useRef } from "react";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import lgAutoplay from "lightgallery/plugins/autoplay";
import lgVideo from "lightgallery/plugins/video";
import lgShare from "lightgallery/plugins/share";


import LightGallery from "lightgallery/react/Lightgallery.es5";
import "./letak.css";


const LetakPartner = ({ openGallery }) => {

  const galleryRef = useRef(null);

  const customStyle = {
    maxWidth: "250px",
    width: "200px",
    padding: "5px"

  };

  useEffect(() => {
    if (openGallery && galleryRef.current) {
      galleryRef.current.openGallery();
    }
  }, [openGallery]);
  return (
    <div className="container-letak" id="letak">
      <LightGallery
        onInit={(ref) => galleryRef.current = ref.instance}

        speed={500}
        plugins={[lgThumbnail, lgZoom, lgShare, lgVideo, lgAutoplay]}>


        {
          IMAGES && IMAGES.map((item, id) =>
            <button data-lg-size="1240-1750" className="gallery-item" data-src={item.image}>
              <img className="img-responsive" src={item.image} alt={`Strana ${id + 1}`} style={customStyle} /></button>
          )
        }
      </LightGallery>
    </div>
  )
}

export default LetakPartner;
