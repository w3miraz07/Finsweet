import React from 'react'
import "./building.css"
import { Col, Container, Row } from 'react-bootstrap'

const Building = () => {
  return (
    <>
    <section id='building'>
        <Container>
            <Row>
                <Col lg={7} className='p-0'>
                <div class="building_img">
                <h3>Building stellar websites for early startups</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.</p>
                </div>
                </Col>

                <Col lg={5} className='p-0'>
                <div class="building_text">
              <h3>Send inquiry</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>

              <form action="" method="">
                <input class="name" type="text" placeholder="Your Name"/>
                <input class="email" type="email" placeholder="Email"/>
                <input class="figma" type="text" placeholder="Paste your Figma design URL"/>
                <button class="btn" type="submit">Send an Inquiry</button>
              </form>
                
              <div class="building_click">
                <a href="#">Get in touch with us <i class="fa-solid fa-arrow-right-long"></i></a>
              </div>
            </div>
                </Col>
            </Row>
        </Container>
    </section>
    </>
  )
}

export default Building
