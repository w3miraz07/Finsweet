import React from 'react'
import "./benefits.css"
import { Col, Container, Row } from 'react-bootstrap'
import { GiNotebook } from "react-icons/gi";
import { RiPencilRuler2Fill } from "react-icons/ri";
import { HiUserGroup } from "react-icons/hi";
import logo1img from "../../assets/about/Logo1.png"
import logo2img from "../../assets/about/Logo2.png"
import logo3img from "../../assets/about/Logo3.png"
import logo4img from "../../assets/about/Logo4.png"
import logo5img from "../../assets/about/Logo5.png"




const Benefits = () => {
    return (
        <>
            <section id='working'>
                <Container>
                    <Row>
                        <Col lg={{span:6, offset:3}}>
                            <div class="working_text">
                                <h4>The benefits of working with us</h4>
                            </div>
                        </Col>
                    </Row>

                    <Row className='working_card'>
                        <Col lg={4}>
                        <div class="working_card1">
                            <i> <GiNotebook/> </i>
                            <h4>Customize with ease</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.</p>
                            </div>
                        </Col>

                        <Col lg={4}>
                        <div class="working_card2">
                            <i> <RiPencilRuler2Fill/> </i>
                            <h4>Perfectly Responsive</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.</p>
                            </div>
                        </Col>

                        <Col lg={4}>
                        <div class="working_card3">
                            <i> <HiUserGroup/> </i>
                            <h4>Friendly Support</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.</p>
                            </div>
                        </Col>
                    </Row>

                    <Row className='working2'>
                        <Col lg={2}>
                            <div class="working_text1">
                            <h3>100.000+</h3>
                            <h5>Finsweet Users</h5>
                            </div>
                        </Col>

                        <Col lg={2}>
                            <div class="working_img1">
                                <img src={logo1img} alt="logo1img" />
                            </div>
                        </Col>

                        <Col lg={2}>
                            <div class="working_img2">
                                <img src={logo2img} alt="logo2img" />
                            </div>
                        </Col>

                        <Col lg={2}>
                            <div class="working_img3">
                                <img src={logo3img} alt="logo3img" />
                            </div>
                        </Col>

                        <Col lg={2}>
                            <div class="working_img4">
                                <img src={logo4img} alt="logo4img" />
                            </div>
                        </Col>

                        <Col lg={2}>
                            <div class="working_img5">
                                <img src={logo5img} alt="logo5img" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Benefits