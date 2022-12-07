import React from 'react'
import { Container ,Grid } from '@mui/material'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import fot1 from "../../assets/img/foto 1.png"
import fot2 from "../../assets/img/foto 2.png"
import fot3 from "../../assets/img/fot 3.png"
import fot4 from "../../assets/img/foto 4.png"
import "./Foto.css"

function Foto() {
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
        <div className='Foto'>
            <Container maxWidth="xl">
                <Grid container alignItems={"center"}>
                    <Grid items md={7} sm={12} xs={12}>
                        <div className="left">
                            <h2 className="title">Реализованные кейсы</h2>
                            <p className="text">Наши реальные истории о том, как мы помогали своим клиентам регистрировать товарные знаки и оформлять права на объекты интеллектуальной собственности</p>
                        </div>
                    </Grid>
                    <Grid items md={5} sm={12} xs={12}>
                        <div className="right">
                            <a href="#">Все кейсы <ArrowRightAltIcon/> </a>
                        </div>
                    </Grid>
                </Grid>
                <Slider {...settings}>
                <div className="img">
                        <img src={fot1} alt="" />
                    </div>
                    <div className="img">
                        <img src={fot2} alt="" />
                    </div>
                    <div className="img">
                        <img src={fot3} alt="" />
                    </div>
                    <div className="img">
                        <img src={fot1} alt="" />
                    </div>
                    <div className="img">
                        <img src={fot1} alt="" />
                    </div>
                    <div className="img">
                        <img src={fot2} alt="" />
                    </div>
                    <div className="img">
                        <img src={fot3} alt="" />
                    </div>
                    <div className="img">
                        <img src={fot4} alt="" />
                    </div>
                </Slider>
            </Container>
        </div>
    )
}
    
export default Foto
