import React from 'react'
import "./footer.css"
import { Col, Container, Row } from 'react-bootstrap'
import footer_logo from "../../assets/logo.png"
import { FaFacebook,FaTwitter,FaInstagram,FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <section className='footer'>
                <Container>
                    <Row>
                        <Col lg={5}>
                            <div class="footer_logo">
                                <img src={footer_logo} alt="" />
                                <p>We are always open to discuss your project and improve your online presence.</p>
                            </div>
                            <div class="footer_contact">
                                <div class="footer_contact_mail">
                                    <h4>Email me at</h4>
                                    <a href="mailto:">contact@website.com</a>
                                </div>
                                <div class="footer_contact_call">
                                    <h4>Call us</h4>
                                    <a href="tel:+">0927 6277 28525</a>
                                </div>
                            </div>
                        </Col>
                        <Col lg={{ span: 4, offset: 1 }}>
                            <div class="footer_talk">
                                <h3>Lets Talk!</h3>
                                <p>We are always open to discuss your project, improve your online presence and help with your UX/UI design challenges.</p>
                                <div class="footer_talk_icon">
                                    <a href="#"><FaFacebook /></a>
                                    <a href="#"><FaTwitter /></a>
                                    <a href="#"><FaInstagram /></a>
                                    <a href="#"><FaLinkedin /></a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className='footer_menu'>
                <Container>
                    <Row>
                        <Col lg={3}>
                            <div class="footer_menu_text">
                                <h5>Copyright 2022, Finsweet.com</h5>
                            </div>
                        </Col>
                        <Col lg={{ span: 5, offset: 4 }}>
                            <div class="footer_menu_main">
                                <ul>
                                    <li><Link to={"/"}>Home</Link></li>
                                    <li><Link to={"/About_us"}>About us</Link></li>
                                    <li><Link to={"/Features"}>Features</Link></li>
                                    <li><Link to={"/Pricing"}>Pricing</Link></li>
                                    <li><Link to={"/FAQ"}>FAQ</Link></li>
                                    <li><Link to={"/Blog"}>Blog</Link></li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Footer