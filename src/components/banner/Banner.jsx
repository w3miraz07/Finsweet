import React from 'react'
import "./banner.css"
import { Col, Container, Row } from 'react-bootstrap'
import banner_img from "../../assets/banner.png"
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

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
                                    <Link to={"/Work"}>View our work</Link>
                                </div>
                                <div class="ban_text_price">
                                    <Link to={"/Pricing"}>View Pricing <FaLongArrowAltRight/> </Link>
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