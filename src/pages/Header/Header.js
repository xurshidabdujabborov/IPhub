import { Container, Grid } from '@mui/material'
import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import hed from "../../assets/img/header.png"
import "./Header.css"

function Header() {
    return (
        <header>
            <Container maxWidth="xl">
                <Grid container display={"flex"}>
                    <Grid items md={6} sm={12} xs={12}>
                        <div className="left">
                            <span>ВАШ IP ПАРТНЕР</span>
                            <h1>Регистрация товарного знака</h1>
                            <p className="text">Полный цикл регистрации товарного знака от подачи заявки до поддержки после регистрации</p>
                            <div className="flex">
                                <button>Оставить заявку <br /> на консультацию</button>
                                <a href="#">Все услуги <ArrowForwardIcon/> </a>
                            </div>
                        </div>
                    </Grid>
                    <Grid items md={6} sm={12} xs={12}>
                        <div className="img">
                            <img src={hed} alt="" />
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </header>
    )
}

export default Header
