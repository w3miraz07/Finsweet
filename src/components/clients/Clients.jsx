import React from 'react'
import "./clients.css"
import { Col, Container, Row } from 'react-bootstrap'
import clientsimg from "../../assets/clients.png"

const Clients = () => {
  return (
    <>
    <section id='clients'>
        <Container>
            <Row>
                <Col lg={4}>
                <div class="clients_text">
              <h3>What our clients say about us</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.</p>
            </div>
                </Col>

                <Col lg={8}>
                <div class="clients_text2">
              <p>"The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."</p>
              <div class="clients_img">
                <img src={clientsimg} alt="" />
                <h3>Jenny Wilson</h3>
                <h4>Vice President</h4>
              </div>
            </div>
                </Col>
            </Row>
        </Container>
    </section>
    </>
  )
}

export default Clients