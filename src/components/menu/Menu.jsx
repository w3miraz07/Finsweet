import React from 'react'
import "./menu.css"
import {Navbar,Container,Nav} from 'react-bootstrap';
import logo from "../../assets/logo.png"
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <>
     <Navbar expand="lg" className='menu_bg'>
      <Container>
        <Link href={"/"}><img src={logo} alt="logo" /></Link>
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto menu_nav">
            <Link href={"/"}>Home</Link>
            <Link href={"/About_us"}>About us</Link>
            <Link href={"/Features"}>Features</Link>
            <Link href={"/Pricing"}>Pricing</Link>
            <Link href={"/FAQ"}>FAQ</Link>
            <Link href={"/Blog"}>Blog</Link>
          </Nav>
        <div className="contact">
            <Link href={"/Contact"}>Contact</Link>
        </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Menu