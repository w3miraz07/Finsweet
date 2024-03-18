import React from 'react'
import "./whoweare.css"
import { Col, Container, Row } from 'react-bootstrap'
import about02img from "../../assets/about/about02.png"

const Whoweare = () => {
  return (
    <>
    <section>
        <Container className='whowe'>
            <Row>
                <Col lg={{span:5, offset:1}}>
                <div class="whowe_text1">
                    <h5>Who we are</h5>
                    <h4>Goal focussed</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                </Col>

                <Col lg={5}>
                <div class="whowe_text2">
                    <h4>Continuous improvement</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                </Col>
            </Row>

            <Row>
                <Col lg={12}>
                <div class="whowe_img">
                    <img src={about02img} alt="about02"/>
                </div>
                </Col>
            </Row>
        </Container>
    </section>
    </>
  )
}

export default Whoweare