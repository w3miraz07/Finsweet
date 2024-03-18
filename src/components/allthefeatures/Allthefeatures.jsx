import React from 'react'
import "./allthefeatures.css"
import { Col, Container, Row } from 'react-bootstrap'
import featuresimg from "../../assets/features/features.png"
import { Link } from 'react-router-dom'

const Allthefeatures = () => {
  return (
    <>
    <section id='banner'>
        <Container>
            <Row>
                <Col lg={5}>             
          <div class="ban_text">
            <h1>All the features you need</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <div class="banner_button">
            <Link to={"/Pricing"}>View Pricing</Link>
          </div>
          </div>
                </Col>

                <Col lg={{span:6, offset:1}}>
                <div class="banner_img">
            <img src={featuresimg} alt="featuresimg" />
          </div>
                </Col>
            </Row>
        </Container>
    </section>
    </>
  )
}

export default Allthefeatures