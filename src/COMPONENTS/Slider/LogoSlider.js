import Slider from "react-slick";
import './slider.css';
import "slick-carousel/slick/slick-theme.css";

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


                    <div>
                         <img className="img-fluid"
                              src={`${process.env.PUBLIC_URL}/assets/images/avene.png`}
                              alt="Avene" />
                    </div>
                    <div>
                         <img src={`${process.env.PUBLIC_URL}/assets/images/ducray.png`} />
                    </div>
                    <div>
                         <img className="img-fluid"
                              src={`${process.env.PUBLIC_URL}/assets/images/klorane.png`}
                              alt="Klorane" />
                    </div>
                    <div>
                         <img className="img-fluid"
                              src={`${process.env.PUBLIC_URL}/assets/images/eucerin.png`}
                              alt="Eucerin" />
                    </div>
                    <div>
                         <img className="img-fluid"
                              src={`${process.env.PUBLIC_URL}/assets/images/esthederm.png`}
                              alt="Esthederm" />
                    </div>
                    <div>
                         <img className="img-fluid"
                              src={`${process.env.PUBLIC_URL}/assets/images/aderma.png`}
                              alt="A-Derma" />
                    </div>
                    <div>
                         <img className="img-fluid"
                              src={`${process.env.PUBLIC_URL}/assets/images/nuxe.png`}
                              alt="Nuxe" />
                    </div>
                    <div>
                         <img className="img-fluid"
                              src={`${process.env.PUBLIC_URL}/assets/images/bioderma.png`}
                              alt="Bioderma" />
                    </div>
                    <div>
                         <img className="img-fluid"
                              src={`${process.env.PUBLIC_URL}/assets/images/vichy.png`}
                              alt="Vichy" />
                    </div>
                    <div>
                         <img className="img-fluid"
                              src={`${process.env.PUBLIC_URL}/assets/images/lrp.png`}
                              alt="La-Roche Posay" />
                    </div>
                    <div>
                         <img className="img-fluid"
                              src={`${process.env.PUBLIC_URL}/assets/images/activApotheke.jpeg`}
                              alt="Activ Apotheke" />
                    </div>
                    <div>
                         <img className="img-fluid"
                              src={`${process.env.PUBLIC_URL}/assets/images/teoxane.png`}
                              alt="Teoxane" />
                    </div>
                    <div>
                         <img className="img-fluid"
                              src={`${process.env.PUBLIC_URL}/assets/images/medik8.png`}
                              alt="Medik8" />
                    </div>
                    <div>
                         <img className="img-fluid"
                              src={`${process.env.PUBLIC_URL}/assets/images/cerave.png`}
                              alt="Cerave" />
                    </div>
                    <div>
                         <img className="img-fluid"
                              src={`${process.env.PUBLIC_URL}/assets/images/neostrata.png`}
                              alt="Neostrata" />
                    </div>
                    <div>
                         <img className="img-fluid"
                              src={`${process.env.PUBLIC_URL}/assets/images/novexpert.png`}
                              alt="Novexpert" />
                    </div>
                    <div>
                         <img className="img-fluid"
                              src={`${process.env.PUBLIC_URL}/assets/images/sanotint.jpg`}
                              alt="Sanotint" />
                    </div>
                    <div>
                         <img className="img-fluid"
                              src={`${process.env.PUBLIC_URL}/assets/images/anna_brandejs.png`}
                              alt="Anna Brandejs" />
                    </div>



               </Slider>
          </div>
     )




}