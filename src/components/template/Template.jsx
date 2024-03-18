import React from 'react'
import "./template.css"
import { Col, Container, Row } from 'react-bootstrap'
import template1_img from "../../assets/work/template1.png"
import template2_img from "../../assets/work/template2.png"
import template3_img from "../../assets/work/template3.png"
import template4_img from "../../assets/work/template4.png"
import template5_img from "../../assets/work/template5.png"
import template6_img from "../../assets/work/template6.png"
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom'


const Template = () => {
  return (
    <>
    <section id='template'>
        <Container>
            <Row>
                <Col lg={12}>
                <div class="template_menu">
                    <ul>
                        <li><a href="#">All</a></li>
                        <li><a href="#">UI Design</a></li>
                        <li><a href="#">Webflow Design</a></li>
                        <li><a href="#">Figma Design</a></li>
                    </ul>
                </div>
                </Col>
            </Row>

            <Row className='template_main'>
                <Col lg={6}>
                <div class="template1_img">
                    <img src={template1_img} alt="template1_img" />
                </div>
                <div class="template1_text">
                    <h3>Template 1</h3>
                    <p>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.</p>
                    <Link to={"/ReadStudies"}> View Portfolio  <i> <FaArrowRightLong/> </i></Link>
                </div>
                </Col>

                <Col lg={6}>
                <div class="template2_img">
                    <img src={template2_img} alt="template2_img" />
                </div>
                <div class="template2_text">
                    <h3>Template 2</h3>
                    <p>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.</p>
                    <a href="#">View Portfolio  <i> <FaArrowRightLong/> </i> </a>
                </div>
                </Col>

                <Col lg={6}>
                <div class="template3_img">
                    <img src={template3_img} alt="template3_img" />
                </div>
                <div class="template3_text">
                    <h3>Template 3</h3>
                    <p>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.</p>
                    <a href="#">View Portfolio   <i> <FaArrowRightLong/> </i> </a>
                </div>
                </Col>

                <Col lg={6}>
                <div class="template4_img">
                    <img src={template4_img} alt="template4_img" />
                </div>
                <div class="template4_text">
                    <h3>Template 4</h3>
                    <p>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.</p>
                    <a href="#">View Portfolio   <i> <FaArrowRightLong/> </i> </a>
                </div>
                </Col>

                <Col lg={6}>
                <div class="template5_img">
                    <img src={template5_img} alt="template5_img" />
                </div>
                <div class="template5_text">
                    <h3>Template 5</h3>
                    <p>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.</p>
                    <a href="#">View Portfolio   <i> <FaArrowRightLong/> </i> </a>
                </div>
                </Col>

                <Col lg={6}>
                <div class="template6_img">
                    <img src={template6_img} alt="template6_img" />
                </div>
                <div class="template6_text">
                    <h3>Template 6</h3>
                    <p>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.</p>
                    <a href="#">View Portfolio  <i> <FaArrowRightLong/> </i> </a>
                </div>
                </Col>
            </Row>

            <Row>
                <Col lg={12}>
                <div class="build_text">
                    <h4>Let's build something great together</h4>
                    <p>Nullam vitae purus at tortor mattis dapibus. Morbi purus est, ultricies nec dolor sit amet, scelerisque cursus purus.</p>
                    <div class="build_con">
                        <Link to={"/Contact"}>Contact Us</Link>
                    </div>
                </div>
                </Col>
            </Row>
        </Container>
    </section>
    </>
  )
}

export default Template