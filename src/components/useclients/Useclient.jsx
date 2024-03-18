import React from 'react'
import "./useclient.css"
import { Col, Container, Row } from 'react-bootstrap'
import features1img from "../../assets/features/features1.png"

const Useclient = () => {
  return (
    <>
    <section id='client'>
    <Container>
        <Row>
            <Col lg={6}>
            <div class="user_text">
                    <h5>Use Client-first</h5>
                    <h3>Top agencies and freelancers around the world use <br/>Client-first </h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                </div>
            </Col>

            <Col lg={6}>
            <div class="user_img">
                <img src={features1img} alt="features1img" />
              </div>
            </Col>
        </Row>
    </Container>
    </section>
    </>
  )
}

export default Useclient