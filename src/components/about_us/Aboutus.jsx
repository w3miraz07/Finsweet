import React from 'react'
import "./about.css"
import { Col, Container, Row } from 'react-bootstrap'
import about1img from "../../assets/about/about1.png"

const Aboutus = () => {
  return (
    <>
    <section>
        <Container>
            <Row className='about_us'>
                <Col lg={5}>
                <div class="about_us_text">
                        <h5>About us</h5>
                        <h1>Our designs solve problems</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                    </div>
                </Col>

                <Col lg={{span:5, offset:2}}>
                <div class="about_us_img">
                        <img src={about1img} alt="" />
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
    </>
  )
}

export default Aboutus