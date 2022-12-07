import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Grid } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import car from "../../assets/img/slide1.png"
import car1 from "../../assets/img/slide2.png"
import car2 from "../../assets/img/slide 3.png"
import car3 from "../../assets/img/slide 4.png"
import slide from "../../assets/img/slide.png"
import "./Work.css"

function Work() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    };
    return (
        <div className='Work'>
            <Container maxWidth="xl">
                <Grid container alignItems={"center"}>
                    <Grid items md={6} sm={12} xs={12}>
                      <div className="left">
                      <h2 className="title">Решения для вашего бизнеса</h2>
                        <p className="text">У нас есть все необходимые ресурсы для решения любых ваших потребностей в сфере интеллектуальной собственности</p>
                      </div>
                    </Grid>
                    <Grid items md={6} sm={12} xs={12}>
                        <div className="var">
                            <a href="#">Все услуги  <ArrowForwardIcon /> </a>
                        </div>
                    </Grid>
                </Grid>
            <Slider {...settings}>
              <div className="img">
                <img src={slide} alt="" />
              </div>
              <div className="img">
                <img src={car} alt="" />
              </div>
              <div className="img">
                <img src={car1} alt="" />
              </div>
              <div className="img">
                <img src={car3} alt="" />
              </div>
              <div className="img">
                <img src={slide} alt="" />
              </div>
              <div className="img">
                <img src={car} alt="" />
              </div>
              <div className="img">
                <img src={car1} alt="" />
              </div>
              <div className="img">
                <img src={car3} alt="" />
              </div>
            </Slider>
            </Container>
        </div>  
    )
}

export default Work
