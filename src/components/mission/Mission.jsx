import React from 'react'
import "./mission.css"
import { Col, Container, Row } from 'react-bootstrap'
import about03img from "../../assets/about/about03.png"
import about04img from "../../assets/about/about04.png"

const Mission = () => {
  return (
    <>
    <section id='mission'>
        <Container>
            <Row>
                <Col lg={6}>
                <div class="mission_text1">
                    <h5>Our Mission </h5>
                    <h4>Inspire, Innovate, Share</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                </Col>

                <Col lg={{span:5, offset:1}}>
                <div class="mission_img1">
                    <img src={about03img} alt="about03img" />
                </div>
                </Col>
            </Row>
             
            <Row className='mission_2'>
                <Col lg={5}>
                <div class="mission_img2">
                    <img src={about04img} alt="about04img" />
                </div>
                </Col>

                <Col lg={{span:6, offset:1}}>
                <div class="mission_text2">
                    <h5>Laser focus</h5>
                    <h4>Inspire, Innovate, Share</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                </Col>
            </Row>
        </Container>
    </section>
    </>
  )
}

export default Mission