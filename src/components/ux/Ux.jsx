import React from 'react'
import "./ux.css"
import { Col, Container, Row } from 'react-bootstrap'
import workingimg from "../../assets/blog/working.png"
import { Link } from 'react-router-dom'

const Ux = () => {
  return (
    <>
    <section id='featured'>
        <Container>
            <Row>
                <Col lg={12}>
                <div class="featured_text">
                    <h1>A UX Case Study on Creating a Studious Environment for Students</h1>
                    <h3>Andrew Jonson Posted on 27th January 2021</h3>
                </div>
                <div class="featured_img">
                    <img src={workingimg} alt="workingimg"/>
                </div>
                <div class="featured_text2">
                    <p>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside.</p>
                    <Link to={"/ReadBlog"}>Read more</Link>
                </div>
                </Col>
            </Row>
        </Container>
    </section>
    </>
  )
}

export default Ux