import React from 'react'
import "./features.css"
import { Col, Container, Row } from 'react-bootstrap'
import { HiUserGroup } from "react-icons/hi";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { RiPencilRuler2Fill } from "react-icons/ri";
import { MdContactSupport } from "react-icons/md";
import { FaStopwatch} from "react-icons/fa";
import { FaFilePen } from "react-icons/fa6";


const Features = () => {
    return (
        <>
            <section id='features'>
                <Container>
                    <Row>
                        <Col lg={{span:6, offset:3}}>
                            <div class="features_text">
                                <h5>Features</h5>
                                <h3>Design that solves problems, one product at a time</h3>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={4}>
                            <div class="features_card1">
                                <i><HiUserGroup /></i>
                                <h4>Uses Client First</h4>
                                <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </p>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div class="features_card2">
                                <i><IoMdCheckmarkCircle/></i>
                                <h4>Two Free Revision Round</h4>
                                <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </p>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div class="features_card3">
                                <i><RiPencilRuler2Fill/></i>
                                <h4>Template Customization</h4>
                                <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </p>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div class="features_card4">
                                <i><MdContactSupport/></i>
                                <h4>24/7 Support</h4>
                                <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </p>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div class="features_card5">
                                <i><FaStopwatch/></i>
                                <h4>Quick Delivery</h4>
                                <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </p>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div class="features_card6">
                                <i><FaFilePen/></i>
                                <h4>Hands-on approach</h4>
                                <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Features