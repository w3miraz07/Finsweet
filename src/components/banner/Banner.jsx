import React from 'react'
import "./banner.css"
import { Col, Container, Row } from 'react-bootstrap'
import banner_img from "../../assets/banner.png"
import { FaLongArrowAltRight } from "react-icons/fa";

const Banner = () => {
    return (
        <>
            <section id='banner'>
                <Container>
                    <Row>
                        <Col lg={5}>
                            <div class="ban_text">
                                <h1>Building stellar websites for early startups</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                <div class="banner_button">
                                    <a href="work.html">View our work</a>
                                </div>
                                <div class="ban_text_price">
                                    <a href="pricing.html">View Pricing <FaLongArrowAltRight /></a>
                                </div>
                            </div>
                        </Col>
                        <Col lg={{ span: 6, offset: 1 }}>
                            <div class="banner_img">
                                <img src={banner_img} alt="" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Banner