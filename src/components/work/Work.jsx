import React from 'react'
import "./work.css"
import { Col, Container, Row } from 'react-bootstrap'
import { FaLongArrowAltRight } from "react-icons/fa";


const Work = () => {
    return (
        <>
            <section id='work'>
                <Container>
                    <Row>
                        <Col lg={3}>
                            <div class="work_text">
                                <h3>How we work</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                                <div class="work_btn">
                                    <a href="#">Get in touch with us </a> <FaLongArrowAltRight/>
                                </div>
                            </div>
                        </Col>
                        <Col lg={{ span: 6, offset: 2 }}>
                            <Row>
                                <Col lg={6}>
                                    <div class="work_text1">
                                        <div class="work_text1_num">
                                            <h6>01</h6>
                                        </div>
                                        <h3>Strategy</h3>
                                        <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div class="work_text2">
                                        <div class="work_text2_num">
                                            <h6>02</h6>
                                        </div>
                                        <h3>Wireframing</h3>
                                        <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div class="work_text3">
                                        <div class="work_text3_num">
                                            <h6>03</h6>
                                        </div>
                                        <h3>Design</h3>
                                        <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div class="work_text4">
                                        <div class="work_text4_num">
                                            <h6>04</h6>
                                        </div>
                                        <h3>Development</h3>
                                        <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Work