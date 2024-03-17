import React from 'react'
import "./ourblog.css"
import { Col, Container, Row } from 'react-bootstrap'
import blog1img from "../../assets/blog1.png"
import blog2img from "../../assets/blog2.png"
import blog3img from "../../assets/blog3.png"
import { FaLongArrowAltRight } from "react-icons/fa";


const Ourblog = () => {
  return (
    <>
    <section id='blog'>
        <Container>
            <Row>
                <Col lg={3}>
                <div class="blog">
              <h4>Our blog</h4>
            </div>
                </Col>
            </Row>

            <Row className='blog_main'>
                <Col lg={4}>
                <div class="blog_text1">
              <img src={blog1img} alt="" />
              <h5>19 Jan 2022</h5>
              <h3>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h3>
              <p>See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
              <a href="#">Read More <i><FaLongArrowAltRight/></i></a>
            </div>
                </Col>
                <Col lg={4}>
                <div class="blog_text2">
              <img src={blog2img} alt="" />
              <h5>19 Jan 2022</h5>
              <h3>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h3>
              <p>See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
              <a href="#">Read More <i><FaLongArrowAltRight/></i></a>
            </div>
                </Col>
                <Col lg={4}>
                <div class="blog_text3">
              <img src={blog3img} alt="" />
              <h5>19 Jan 2022</h5>
              <h3>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h3>
              <p>See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
              <a href="#">Read More <i><FaLongArrowAltRight/></i></a>
            </div>
                </Col>
            </Row>
        </Container>
    </section>
    </>
  )
}

export default Ourblog