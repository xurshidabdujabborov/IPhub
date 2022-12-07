import React from 'react'
import { Container, Grid } from '@mui/material'
import bot from "../../assets/img/bot.png"
import "./Bottom.css"

function Bottom() {
    return (
        <div className='Bottom'>
            <Container maxWidth="xl">
                <Grid container alignItems={"center"}>
                    <Grid items md={6} sm={12} xs={12}>
                        <div className="left">
                            <h2 className="title">Оставьте заявку на консультацию и мы вам поможем! </h2>
                            <p className="text">
                            У нас есть решения для всех ваших потребностей в сфере защиты и регистрации интеллектуальной собственности
                            </p>
                            <button>Получить индивидуальную <br /> консультацию</button>
                        </div>
                    </Grid>
                    <Grid items md={6} sm={12} xs={12}>
                        <div className="img">
                            <img src={bot} alt="" />
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Bottom
