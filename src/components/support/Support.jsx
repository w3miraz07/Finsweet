import React from 'react'
import "./support.css"
import { Col, Container, Row } from 'react-bootstrap'
import features3img from "../../assets/features/features3.png"

const Support = () => {
  return (
    <>
    <section id='support'>
        <Container>
            <Row>
                <Col lg={6}>
                <div class="support_text">
            <h5>24/7 Support</h5>
            <h3>Working with us, you will be getting 24/7 priority support</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
        </div>
                </Col>
                <Col lg={6}>
                <div class="support_img">
            <img src={features3img} alt="features3img" />
          </div>
                </Col>
            </Row>
        </Container>
    </section>
    </>
  )
}

export default Support