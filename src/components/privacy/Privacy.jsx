import React from 'react'
import "./privacy.css"
import { Col, Container, Row } from 'react-bootstrap'

const Privacy = () => {
  return (
    <>
    <section id='privacy'>
        <Container>
            <Row>
                <Col lg={{span:6, offset:3}}>
                <div class="privacy_text">
                    <h1>Privacy Policy</h1>
                    <p>When you’re ready to go beyond prototyping in Figma, Webflow’s ready to help you bring your </p>
                </div>
                </Col>

                <Col lg={{span:8, offset:2}}>
                <div class="privacy_text1">
                    <h3>Lorem ipsum dolor.</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <a href="#">Excepteur sint occaecat</a> cupidatat non proident.</p>

                    <span>Sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
                </div>
                <div class="privacy_text2">
                    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident. Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                    <ul>
                        <li><h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</h6></li>
                        <li><h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</h6></li>
                        <li><h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</h6></li>
                    </ul>
                    <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</h4>
                </div>
                </Col>
            </Row>
        </Container>
    </section>
    </>
  )
}

export default Privacy