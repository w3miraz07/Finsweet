import React from 'react'
import "./frequently.css"
import { Col, Container, Row, Accordion } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Frequently = () => {
    return (
        <>
            <section id='frequently'>
                <Container>
                    <Row>
                        <Col lg={4}>
                            <div class="frequently_text">
                                <h3>Frequently asked questions</h3>
                                <Link to={"/Contact"}>Contact us for more info</Link>
                            </div>
                        </Col>

                        <Col lg={8}>
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header><h3>01</h3>
                                        <h4>How much time does it take?</h4></Accordion.Header>
                                    <Accordion.Body>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header><h3>02</h3>
                                        <h4>What is your class naming convention?</h4></Accordion.Header>
                                    <Accordion.Body>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header><h3>03</h3>
                                        <h4>How do you communicate?</h4></Accordion.Header>
                                    <Accordion.Body>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header><h3>04</h3>
                                        <h4>I have a bigger project. Can you handle it?</h4></Accordion.Header>
                                    <Accordion.Body>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4">
                                    <Accordion.Header><h3>05</h3>
                                        <h4>What is your class naming convention?</h4></Accordion.Header>
                                    <Accordion.Body>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Frequently