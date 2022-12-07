import React from 'react'
import { Container, Grid } from '@mui/material'
import logo from "../../assets/img/logo.png"
import "./Footer.css"

function Footer() {
    return (
        <footer>
            <Container maxWidth="xl">
                <Grid container alignItems={"center"}>
                    <Grid items md={6} sm={12} xs={12}>
                        <div className="flex">
                            <img src={logo} alt="" />
                            <p className="text">Общество с ограниченной
                                ответственностью «Центр интеллектуальной собственности и инноваций „АйПиХаб“»</p>
                        </div>
                    </Grid>
                    <Grid items md={6} sm={12} xs={12}>
                        <div className="right">
                            <span>123317, г. Москва, Пресненская наб., д. <br />
                                8, стр. 1, эт. 3, п. 1, оф. 10</span>
                                <p>ИНН: 7703472433 КПП: 770301001</p>
                        </div>
                    </Grid>
                </Grid>
                <hr />
                <Grid container alignItems={"center"}>
                    <Grid items md={3} sm={6} xs={12}>
                        <ul>
                            <h4>Навигация по сайту:</h4>
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
                    <Grid items md={3} sm={6} xs={12}>
                        <ul>
                            <h4>
                            Наши контакты:
                            </h4>
                            <li>
                                <a href="#">example@iphub.com</a>
                            </li>
                            <li>
                                <a href="#">+7 (888) 888 88 88</a>
                            </li>
                        </ul>
                    </Grid> 
                    <Grid items md={3} sm={6} xs={12}>
                        <ul>
                            <h4>Мы в соцсетях:</h4>
                            <li>
                                <a href="#">Facebook</a>
                            </li>
                            <li>
                                <a href="#">Instagram</a>
                            </li>
                        </ul>
                    </Grid> 
                    <Grid items md={3} sm={6} xs={12}>
                        <ul>
                            <h4>Как добраться:</h4>
                            <li>
                                <a href="#">Схема проезда</a>
                            </li>
                        </ul>
                    </Grid> 
                </Grid>
                <Grid container alignItems={"center"}>
                    <Grid items md={4} sm={6} xs={12}>
                        <div className="text">
                        <p className="text">© 2021 IPhub. Все права защищены.</p>
                        </div>
                    </Grid>
                    <Grid items md={4} sm={6} xs={12}>
                        <div className="text">
                        <p className="text">Публичная оферта</p>
                        </div>
                    </Grid>
                    <Grid items md={4} sm={12} xs={12}>
                        <div className="text">
                        <p className="text">Пользовательское соглашение</p>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </footer>
    )
}

export default Footer
