import React from 'react'
import "./ourblog2.css"
import { Col, Container, Row } from 'react-bootstrap'
import blogcard1_img from "../../assets/blog/blogcard1.png"
import blogcard2_img from "../../assets/blog/blogcard2.png"
import blogcard3_img from "../../assets/blog/blogcard3.png"
import blogcard4_img from "../../assets/blog/blogcard4.png"
import blogcard5_img from "../../assets/blog/blogcard5.png"
import blogcard6_img from "../../assets/blog/blogcard6.png"
import { FaArrowRightLong } from "react-icons/fa6";


const Ourblog2 = () => {
  return (
    <>
    <section id='blog'>
        <Container>
            <Row>
                <Col lg={12}>
                <div class="blog">
            <h4>Our blog</h4>
          </div>
                </Col>
            </Row>

            <Row className='blog_main'>
                <Col lg={4}>
                <div class="blog_text1">
                <img src={blogcard1_img} alt="blogcard1_img" />
            <h5>27 Jan 2021</h5>
            <h3>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h3>
            <p>See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
            <a href="#">Read More <i> <FaArrowRightLong/> </i></a>
          </div>
                </Col>
                <Col lg={4}>
                <div class="blog_text2">
                <img src={blogcard2_img} alt="blogcard2_img" />
            <h5>27 Jan 2021</h5>
            <h3>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h3>
            <p>See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
            <a href="#">Read More <i> <FaArrowRightLong/> </i></a>
          </div>
                </Col>
                <Col lg={4}>
                <div class="blog_text3">
                <img src={blogcard3_img} alt="blogcard3_img" />
            <h5>27 Jan 2021</h5>
            <h3>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h3>
            <p>See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
            <a href="#">Read More <i> <FaArrowRightLong/> </i></a>
          </div>
                </Col>
                <Col lg={4}>
                <div class="blog_text4">
                <img src={blogcard4_img} alt="blogcard4_img" />
            <h5>27 Jan 2021</h5>
            <h3>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h3>
            <p>See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
            <a href="#">Read More <i> <FaArrowRightLong/> </i></a>
          </div>
                </Col>
                <Col lg={4}>
                <div class="blog_text5">
                <img src={blogcard5_img} alt="blogcard5_img" />
            <h5>27 Jan 2021</h5>
            <h3>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h3>
            <p>See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
            <a href="#">Read More <i> <FaArrowRightLong/> </i></a>
          </div>
                </Col>
                <Col lg={4}>
                <div class="blog_text6">
            <img src={blogcard6_img} alt="blogcard6_img" />
            <h5>27 Jan 2021</h5>
            <h3>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h3>
            <p>See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
            <a href="#">Read More <i> <FaArrowRightLong/> </i></a>
          </div>
                </Col>
            </Row>
        </Container>
    </section>
    </>
  )
}

export default Ourblog2