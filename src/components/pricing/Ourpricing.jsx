import React from 'react'
import "./pricing.css"
import { Container,Row,Col} from 'react-bootstrap'
import { FaCaretRight } from "react-icons/fa6";

const Ourpricing = () => {
  return (
    <>
    <section id='pricing'>
        <Container>
            <Row>
                <Col lg={12}>
                <div class="pricing_text">
                    <h1>Our Pricing Plans</h1>
                    <p>When you’re ready to go beyond prototyping in Figma, Webflow is ready to help you bring your designs to life — without coding them.</p>
                </div>
                </Col>
            </Row>

            <Row className='pricing_card'>

                <Col lg={4}>
                <div class="pricing_card1">
                    <div class="pricing_card1_dlr">
                        <h4>$299<span>Per Design</span></h4>
                        <h5>Landing Page </h5>
                        <p>When you’re ready to go beyond prototyping in Figma, </p>
                    </div>
                    <div class="pricing_card1_list1">
                        <i> <FaCaretRight/> </i>
                        <span>All limited links</span>
                    </div>
                    <div class="pricing_card1_list2">
                        <i> <FaCaretRight/> </i>
                        <span>Own analytics platform</span>
                    </div>
                    <div class="pricing_card1_list3">
                        <i> <FaCaretRight/> </i>
                        <span>Chat support</span>
                    </div>
                    <div class="pricing_card1_list4">
                        <i> <FaCaretRight/> </i>
                        <span>Optimize hashtags</span>
                    </div>
                    <div class="pricing_card1_list5">
                        <i> <FaCaretRight/> </i>
                        <span>Unlimited users</span>
                    </div>
                    <div class="pricing_card1_btn">
                        <a href="#">Get started</a>
                    </div>
                </div>
                </Col>

                <Col lg={4}>
                <div class="pricing_card2">
                    <div class="pricing_card2_dlr">
                        <h4>$399<span>Multi Design</span></h4>
                        <h5>Website Page</h5>
                        <p>When you’re ready to go beyond prototyping in Figma, Webflow’s ready to help.</p>
                    </div>
                    <div class="pricing_card2_list1">
                        <i> <FaCaretRight/> </i>
                        <span>All limited links</span>
                    </div>
                    <div class="pricing_card2_list2">
                        <i> <FaCaretRight/> </i>
                        <span>Own analytics platform</span>
                    </div>
                    <div class="pricing_card2_list3">
                        <i> <FaCaretRight/> </i>
                        <span>Chat support</span>
                    </div>
                    <div class="pricing_card2_list4">
                        <i> <FaCaretRight/> </i>
                        <span>Optimize hashtags</span>
                    </div>
                    <div class="pricing_card2_list5">
                        <i> <FaCaretRight/> </i>
                        <span>Unlimited users</span>
                    </div>
                    <div class="pricing_card2_btn">
                        <a href="#">Get started</a>
                    </div>
                </div>
                </Col>

                <Col lg={4}>
                <div class="pricing_card3">
                    <div class="pricing_card3_dlr">
                        <h4>$499+<span>Per Design</span></h4>
                        <h5>Complex Project</h5>
                        <p>When you’re ready to go beyond prototyping in Figma, </p>
                    </div>
                    <div class="pricing_card3_list1">
                        <i> <FaCaretRight/> </i>
                        <span>All limited links</span>
                    </div>
                    <div class="pricing_card3_list2">
                        <i> <FaCaretRight/> </i>
                        <span>Own analytics platform</span>
                    </div>
                    <div class="pricing_card3_list3">
                        <i> <FaCaretRight/> </i>
                        <span>Chat support</span>
                    </div>
                    <div class="pricing_card3_list4">
                        <i> <FaCaretRight/> </i>
                        <span>Optimize hashtags</span>
                    </div>
                    <div class="pricing_card3_list5">
                        <i> <FaCaretRight/> </i>
                        <span>Unlimited users</span>
                    </div>
                    <div class="pricing_card3_list6">
                        <i> <FaCaretRight/> </i>
                        <span>Unlimited users</span>
                    </div>
                    <div class="pricing_card3_btn">
                        <a href="#">Get started</a>
                    </div>
                </div>
                </Col>
            </Row>
        </Container>
    </section>
    </>
  )
}

export default Ourpricing