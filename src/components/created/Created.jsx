import React from 'react'
import "./created.css"
import { Col, Container, Row } from 'react-bootstrap'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";


const Created = () => {
  return (
    <>
    <section id='created'>
        <Container>
            <Row>
                <Col lg={12}>
                <div class="created_text">
                    <h4>What we created</h4>
                    <h1>Our Work Portfolio</h1>
                    <p>We help teams create great digital products by providing them with tools and technology to make the design-to-code process universally accessible.</p>
                    <div class="created_text_icon">
                        <a href="#"><i> <FaFacebook/> </i></a>
                        <a href="#"><i> <FaTwitter/> </i></a>
                        <a href="#"><i> <FaInstagram/> </i></a>
                        <a href="#"><i> <FaLinkedin/> </i></a>
                    </div>
                </div>
                </Col>
            </Row>
        </Container>
    </section>
    </>
  )
}

export default Created