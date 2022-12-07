import React from 'react'
import { Container, Grid } from '@mui/material'
import main from "../../assets/img/main.png"
import "./Main.css"

function Main() {
    return (
        <main>
            <Container maxWidth="xl">
                <Grid container >
                <Grid items md={4} sm={12} xs={12}>
                    <div className="img">
                        <img src={main} alt="" />
                    </div>
                </Grid>
                <Grid items md={8} sm={12} xs={12}>
                    <div className="right">
                        <h2 className='title'>Многолетний опыт</h2>
                        <p className="text">Наша компания была создана в 2019 году специалистами, имеющими опыт работы в сфере интеллектуальной собственности более 20 лет</p>
                    </div>
                    <div className="box">
                        <div className="flex">
                            <h3>300</h3>
                            <p className="text">Представления интересов в спорах по IP правам в год</p>
                        </div>
                        <div className="flex">
                            <h3>2500</h3>
                            <p className="text">Представления интересов в спорах по IP правам в год</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="flex">
                            <h3>1150</h3>
                            <p className="text">Представления интересов в спорах по IP правам в год</p>
                        </div>
                        <div className="flex">
                            <h3>61</h3>
                            <p className="text">Представления интересов в спорах по IP правам в год</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="flex">
                            <h3>99%</h3>
                            <p className="text">Представления интересов в спорах по IP правам в год</p>
                        </div>
                        <div className="flex">
                            <h3>98%</h3>
                            <p className="text">Представления интересов в спорах по IP правам в год</p>
                        </div>
                    </div>
                </Grid>
                </Grid>
            </Container>
        </main>
    )
}

export default Main
