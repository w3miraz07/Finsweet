import React from 'react'
import "./readblog.css"
import { Col, Container, Row } from 'react-bootstrap'
import working_img from "../../assets/blog/working.png"

const ReadBlog2 = () => {
  return (
    <>
    <section id='read'>
        <Container>
            <Row>
                <Col lg={12}>
                <div class="read_text">
                    <h1>A UX Case Study on Creating a Studious Environment for Students</h1>
                    <h3>Andrew Jonson Posted on 27th January 2021</h3>
                </div>
                <div class="read_img">
                    <img src={working_img} alt="working_img" />
                </div>
                </Col>
            </Row>
        </Container>
    </section>
    </>
  )
}

export default ReadBlog2