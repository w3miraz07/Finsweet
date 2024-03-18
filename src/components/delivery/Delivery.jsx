import React from 'react'
import "./delivery.css"
import { Col, Container, Row } from 'react-bootstrap'
import features4img from "../../assets/features/features4.png"

const Delivery = () => {
  return (
    <>
    <section id='delivery'>
        <Container>
            <Row>
                <Col lg={6}>
                <div class="delivery_img">
            <img src={features4img} alt="features4img" />
          </div>
                </Col>
                <Col lg={6}>
                <div class="delivery_text">
            <h5>Quick Delivery</h5>
            <h3>Guranteed 1 week delivery for standard five pager website</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
        </div>
                </Col>
            </Row>
        </Container>
    </section>
    </>
  )
}

export default Delivery