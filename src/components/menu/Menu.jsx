import React from 'react'
import "./menu.css"
import {Navbar,Container,Nav, NavLink} from 'react-bootstrap';
import logo from "../../assets/logo.png"
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <>
     <Navbar expand="lg" className='menu_bg'>
      <Container>
        <Link to={"/"}><img src={logo} alt="logo" /></Link>
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto menu_nav">
            <Link to={"/"}>Home</Link>
            <Link to={"/About_us"}>About us</Link>
            <Link to={"/Features"}>Features</Link>
            <Link to={"/Pricing"}>Pricing</Link>
            <Link to={"/FAQ"}>FAQ</Link>
            <Link to={"/Blog"}>Blog</Link>
          </Nav>
        <div className="contact">
            <Link to={"/Contact"}>Contact</Link>
        </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Menu