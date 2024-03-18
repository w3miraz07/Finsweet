import React from 'react'
import "./contactus.css"
import { Col, Container, Row } from 'react-bootstrap'

const Contactus = () => {
  return (
    <>
    <section id='contact'>
        <Container>
            <Row>
                <Col lg={12}>
                <div class="contact_text">
                    <h1>Contact Us</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                </div>
                </Col>
            </Row>

            <Row>
                <Col lg={{span:10, offset:1}}>
                    <Row className='form_main'>
                        <Col lg={6}>
                        <label for="name">Name</label>
                          <input type="text" class="form-control name" placeholder="Enter your name" aria-label="Enter your name" id="name" required />
                        </Col>
                        <Col lg={6}>
                        <label for="email">Email</label>
                          <input type="email" class="form-control" placeholder="Enter your Emial" aria-label="Enter your Emial" id="email" required />
                        </Col>
                        <Col lg={6}>
                        <label for="sub1">Subject</label>
                          <input type="text" class="form-control" placeholder="Provide context" aria-label="Provide context" id="sub1" required />
                        </Col>
                        <Col lg={6}>
                        <label for="sub2">Subject</label>
                          <input type="text" class="form-control" placeholder="Select Subject" aria-label="Select Subject" id="sub2" required />
                        </Col>

                        <Col lg={12}>
                        <label for="msg">Message</label>
                            <textarea name="" id="msg" class="form-control msg" cols="30" rows="6" placeholder="Write your  question here"></textarea>
                        </Col>
                        <div class="form_btn">
                          <button type="submit" class="btn">Send Messege</button>
                        </div>
                    </Row>
                </Col>
            </Row>
        </Container>
    </section>
    </>
  )
}

export default Contactus