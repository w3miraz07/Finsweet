import React from 'react'
import "./design.css"
import { Col, Container, Row } from 'react-bootstrap'
import advice_img from "../../assets/advice.png"

const Design = () => {
  return (
    <>
    <section id='design'>
        <Container>
            <Row className='design_main'>
                <Col lg={{span:8, offset:1}}>
                <div class="design_text">
                    <h4>Web design and development</h4>
                    <h1>Finsweet Design case studies</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
                </div>
                </Col>

                <Col lg={{span:10, offset:1}}>
                <div class="design_img">
                    <img src={advice_img} alt="advice_img" />
                </div>
                </Col>

                <Col lg={{span:2, offset:1}}>
                <div class="design_text1">
                    <h5>Client</h5>
                    <h4>facebook.com</h4>
                </div>
                </Col>

                <Col lg={{span:2, offset:1}}>
                <div class="design_text2">
                    <h5>Service</h5>
                    <h4>Product Design</h4>
                </div>
                </Col>

                <Col lg={{span:5, offset:1}}>
                <div class="design_text3">
                    <h5>Deliverable</h5>
                    <h4>UI Screens, UX Flow & Prototype</h4>
                </div>
                </Col>
            </Row>
        </Container>
    </section>
    </>
  )
}

export default Design