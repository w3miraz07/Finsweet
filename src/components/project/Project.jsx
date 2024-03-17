import React from 'react'
import "./project.css"
import { Col, Container, Row } from 'react-bootstrap'
import { FaLongArrowAltRight } from "react-icons/fa";
import cardimg from "../../assets/Card.png"
import card2img from "../../assets/card2.png"
import card3img from "../../assets/card3.png"


const Project = () => {
  return (
    <>
    <section id=''>
    <Container>
        <Row className='view_main'>
            <Col lg={5}>
            <div class="view_text">
              <h4>View our projects</h4>
            </div>
            </Col>
            <Col lg={{span:2, offset:5}}>
            <div class="view2_text">
              <a href="#">View More</a>
              <FaLongArrowAltRight/>
            </div>
            </Col>
            <Col lg={8}>
            <div class="view_img">
              <img src={cardimg} alt="cardimg" />
              <div class="view_img_text">
                <h3>Workhub office Webflow Webflow Design</h3>
                <a href="#">View project <i class="fa-solid fa-arrow-right-long"></i></a>
              </div>
            </div>
            </Col>
            <Col lg={4}>
                <Row>
                    <Col lg={12}>
                    <div class="view_img2">
                  <img src={card2img} alt="card2img" />
                  <div class="view_img2_text">
                    <h3>Unisaas Website Design</h3>
                    <a href="#">View portfolio <i class="fa-solid fa-arrow-right-long"></i></a>
                  </div>
                </div>
                    </Col>
                    <Col lg={12}>
                    <div class="view_img3">
                  <img src={card3img} alt="card3img" />
                  <div class="view_img3_text">
                    <h3>Unisaas Website Design</h3>
                    <a href="#">View portfolio <i class="fa-solid fa-arrow-right-long"></i></a>
                </div>
                </div>
                    </Col>
                </Row>
            </Col>
        </Row>
    </Container>
    </section>
    </>
  )
}

export default Project