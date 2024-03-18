import React from 'react'
import "./revission.css"
import { Col, Container, Row } from 'react-bootstrap'
import features2img from "../../assets/features/features2.png"

const Revission = () => {
  return (
    <>
    <section id='revision'>
        <Container>
            <Row>
                <Col lg={6}>
                <div class="revision_img">
            <img src={features2img} alt="features2img" />
          </div>
                </Col>

                <Col lg={6}>
                <div class="revision_text">
            <h5>Free Revision Rounds</h5>
            <h3>Get free Revisions and one week of free maintenance</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
        </div>
                </Col>
            </Row>
        </Container>
    </section>
    </>
  )
}

export default Revission