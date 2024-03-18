import React from 'react'
import "./team.css"
import { Col, Container, Row } from 'react-bootstrap'
import { FaFacebook,FaTwitter,FaLinkedin } from "react-icons/fa";


const Team = () => {
  return (
    <>
    <section id='team'>
        <Container>
            <Row>
                <Col lg={12}>
                    <div class="team_text">
                    <h4>Meet our team</h4>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col lg={3}>
                <div class="team_member1">
                <div class="team_member1_img">
                <div class="team_member1_icon">
                <a href="#"><i> <FaFacebook/> </i></a>
                <a href="#"><i> <FaTwitter/> </i></a>
                <a href="#"><i> <FaLinkedin/> </i></a>
              </div>
          </div>
          <h4>John Smith</h4>
          <h5>CEO</h5>
        </div>
                </Col>

                <Col lg={3}>
                <div class="team_member2">
          <div class="team_member2_img">
            <div class="team_member2_icon">
                <a href="#"><i> <FaFacebook/> </i></a>
                <a href="#"><i> <FaTwitter/> </i></a>
                <a href="#"><i> <FaLinkedin/> </i></a>
          </div>
          </div>
          <h4>Simon Adams</h4>
          <h5>CTO</h5>
        </div>
                </Col>

                <Col lg={3}>
                <div class="team_member3">
          <div class="team_member3_img">
            <div class="team_member3_icon">
                <a href="#"><i> <FaFacebook/> </i></a>
                <a href="#"><i> <FaTwitter/> </i></a>
                <a href="#"><i> <FaLinkedin/> </i></a>
           </div>
          </div>
          <h4>Paul Jones</h4>
          <h5>Design Lead</h5>
        </div>
                </Col>

                <Col lg={3}>
                <div class="team_member4">
          <div class="team_member4_img">
            <div class="team_member4_icon">
                <a href="#"><i> <FaFacebook/> </i></a>
                <a href="#"><i> <FaTwitter/> </i></a>
                <a href="#"><i> <FaLinkedin/> </i></a>
           </div>
          </div>
          <h4>Sara Hardin</h4>
          <h5>Project Manager</h5>
        </div>
                </Col>
            </Row>
        </Container>
    </section>
    </>
  )
}

export default Team