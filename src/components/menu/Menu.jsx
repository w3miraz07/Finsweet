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
        <Link to={"/"} refresh="true"><img src={logo} alt="logo" /></Link>
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto menu_nav">
            <a href=""></a>
            <Link href="/" to={"/"}>Home</Link>
            <Link href="/About_us" to={"/About_us"} refresh="true">About us</Link>
            <Link href="/Features" to={"/Features"} refresh="true">Features</Link>
            <Link href="/Pricing" to={"/Pricing"} refresh="true">Pricing</Link>
            <Link href="/FAQ" to={"/FAQ"} refresh="true">FAQ</Link>
            <Link href="/Blog" to={"/Blog"} refresh="true">Blog</Link>
          </Nav>
        <div className="contact">
            <Link to={"/Contact"} refresh="true">Contact</Link>
        </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Menu