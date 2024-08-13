import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Container, NavLink } from 'react-bootstrap';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos';
import 'bootstrap-icons/font/bootstrap-icons.css';


const Header = () => {
  const [showHomeDropdown, setShowHomeDropdown] = useState(false);
  const [showPagesDropdown, setShowPagesDropdown] = useState(false);
  const [showBlogDropdown, setShowBlogDropdown] = useState(false);
  const [animationKey, setAnimationKey] = useState(1);

const handleMouseEnter = () => {
  setAnimationKey(prevKey => prevKey + 1); 
  AOS.refresh(); 
};

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home" >
          <img
                src="logo3.png"
                width="100px"
                height="70px"
                className="d-inline-block align-top"
                alt="Inspire logo"
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
                key={animationKey} 
                onMouseEnter={handleMouseEnter} 
                style={{ marginRight: '60px' }}
                />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown
              title="Home"
              id="basic-nav-dropdown"
              show={showHomeDropdown}
              onMouseEnter={() => setShowHomeDropdown(true)}
              onMouseLeave={() => setShowHomeDropdown(false)}
              style={{ marginRight: '60px' }}
            > 
              <div data-aos="fade-left">
              <NavDropdown.Item href="#home1">Home 1</NavDropdown.Item>
              <NavDropdown.Item href="#home2">Home 2</NavDropdown.Item>
              <NavDropdown.Item href="#home3">Home 3</NavDropdown.Item>
              </div>
            </NavDropdown>
            <NavDropdown
              title="Pages"
              id="pages-nav-dropdown"
              show={showPagesDropdown}
              onMouseEnter={() => setShowPagesDropdown(true)}
              onMouseLeave={() => setShowPagesDropdown(false)}
              style={{ marginRight: '60px' }}
            >
              <div data-aos="fade-left">
              <NavDropdown.Item href="#page1">Page 1</NavDropdown.Item>
              <NavDropdown.Item href="#page2">Page 2</NavDropdown.Item>
              <NavDropdown.Item href="#page3">Page 3</NavDropdown.Item>
              </div>
            </NavDropdown>
           
            <NavDropdown
              title="Blog"
              id="blog-nav-dropdown"
              show={showBlogDropdown}
              onMouseEnter={() => setShowBlogDropdown(true)}
              onMouseLeave={() => setShowBlogDropdown(false)}
              style={{ marginRight: '60px' }}
            >
               <div data-aos="fade-left">
              <NavDropdown.Item href="#blog1">Blog 1</NavDropdown.Item>
              <NavDropdown.Item href="#blog2">Blog 2</NavDropdown.Item>
              <NavDropdown.Item href="#blog3">Blog 3</NavDropdown.Item>
              </div>
            </NavDropdown>  
          </Nav>
          <Nav className="search-icon" style={{ marginRight: '50px' }}>
            <Nav.Link href="#search-icon">
              <i className="bi bi-search" style={{ fontSize: '1.5rem' }}></i>
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#shopping-bag">
              <i className="bi bi-bag" style={{ fontSize: '1.5rem' }}></i>
            </Nav.Link>
            </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

