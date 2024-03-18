import React from 'react'
import "./process.css"
import { Col, Container, Row } from 'react-bootstrap'
import { FaCircle } from "react-icons/fa";


const Process = () => {
  return (
    <>
    <section>
        <Container>
            <Row>
                <Col lg={12}>
                <div class="process_text">
                    <h4>The process we follow</h4>
                </div>
                </Col>
            </Row>

            <Row className='process_card'>
                <Col lg={3}>
                <div class="process_card1">
                    <i> <FaCircle/> </i>
                    <h5>Planning</h5>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
                </div>
                </Col>

                <Col lg={3}>
                <div class="process_card2">
                    <i> <FaCircle/> </i>
                    <h5>Conception</h5>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
                </div>
                </Col>

                <Col lg={3}>
                <div class="process_card3">
                    <i> <FaCircle/> </i>
                    <h5>Design</h5>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
                </div>
                </Col>

                <Col lg={3}>
                <div class="process_card4">
                    <i> <FaCircle/> </i>
                    <h5>Development</h5>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
                </div>
                </Col>
            </Row>
        </Container>
    </section>
    </>
  )
}

export default Process