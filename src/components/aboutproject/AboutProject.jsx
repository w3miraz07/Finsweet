import React from 'react'
import "./aboutproject.css"
import { Col, Container, Row } from 'react-bootstrap'
import teamwork_img from "../../assets/teamwork.png"
import { Link } from 'react-router-dom'

const AboutProject = () => {
  return (
    <>
    <section id='about'>
        <Container>
            <Row>
                <Col lg={{span:8, offset:2}}>
                <div class="about_text1">
                    <h2>About the project</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <h3><i class="fa-solid fa-circle"></i> Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
                    <h4><i class="fa-solid fa-circle"></i> Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea</h4>
                    <h5><i class="fa-solid fa-circle"></i> Duis aute irure dolor in reprehenderit in voluptate velit esse</h5>
                    <h6><i class="fa-solid fa-circle"></i> Excepteur sint occaecat cupidatat non proident, sunt in culpa</h6>
                </div>
                <div class="about_img">
                    <img src={teamwork_img} alt="teamwork_img" />
                </div>
                <div class="about_text2">
                    <h2>How we do it</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <ul>
                        <li><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p></li>
                        <li><p>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea</p></li>
                        <li><p>Duis aute irure dolor in reprehenderit in voluptate velit esse</p></li>
                        <li><p>Excepteur sint occaecat cupidatat non proident, sunt in culpa</p></li>
                    </ul>
                </div>
                <div class="about_menu">
                    <ul>
                        <li><a href="#">Keywords</a></li>
                        <li><a href="#">Design </a></li>
                        <li><a href="#">UI/UX </a></li>
                        <li><a href="#">Wireframing</a></li>
                        <li><a href="#">Branding</a></li>
                        <li><a href="#">Development</a></li>
                        <li><a href="#">webflow</a></li>
                    </ul>
                </div>
                <div class="about_text3">
                    <h3>Let's build something great together</h3>
                    <p>Nullam vitae purus at tortor mattis dapibus. Morbi purus est, ultricies nec dolor sit amet, scelerisque cursus purus.</p>
                    <div class="about_text3_btn">
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

export default AboutProject