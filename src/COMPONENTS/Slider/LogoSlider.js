import Slider from "react-slick";
import './slider.css';
import "slick-carousel/slick/slick-theme.css";
import dataSlider from "./dataSlider"

export const LogoSlider = () => {
     const settings = {
          slidesToShow: 6,
          slidesToScroll: 6,
          autoplay: true,
          autoplaySpeed: 4000,
          speed: 2000,
          infinite: true,
          arrows: false,
          dots: false,
          pauseOnHover: false,
          responsive: [{
               breakpoint: 768,
               settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
               }
          },
          {
               breakpoint: 520,
               settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3


               }
          }]
     };

     return (
          <div className="logo-container">
               <Slider {...settings}>
                    {dataSlider.map(({ src, alt, title }) => (
                         <div>
                              <img className="img-fluid" src={src} alt={alt} title={title} />
                         </div>
                    )
                    )}
               </Slider >
          </div>
     )
}