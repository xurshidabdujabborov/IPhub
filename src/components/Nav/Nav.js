import React from 'react'
import { Container, Grid } from '@mui/material'
import logo from "../../assets/img/logo.png"
import "./Nav.css"

function Navs() {
    return (
        <nav>
        <Container maxWidth="xl">
            <Grid container alignItems={"center"}>
                <Grid item md={4} sm={12} xs={12}>
                    <div className="img">
                        <img src={logo} alt="" />
                    </div>
                </Grid>
                <Grid items md={4} sm={12} xs={12}>
                    <div className="flex">
                        <span>+7 (888) 888 88 88</span>
                        <a href="#">Получить консультацию</a>
                    </div>
                </Grid>
                <Grid items md={4} sm={12} xs={12}>
                    <ul>
                        <li>
                            <a href="#">Услуги</a>
                        </li>
                        <li>
                            <a href="#">Кейсы</a>
                        </li>
                        <li>
                            <a href="#">FAQ</a>
                        </li>
                    </ul>
                </Grid>
            </Grid>
        </Container>
        </nav>
    )
}

export default Navs
