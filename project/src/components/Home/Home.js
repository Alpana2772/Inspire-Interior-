
import React from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import './Home.css';

const Home = () => {

  return (
    <Container fluid className="p-0">
      <Row>
        <Col>
          <Carousel interval={2000} controls={false} indicators={false} className="custom-carousel" wrap={true}>
            <Carousel.Item>
              <img
                src="first img.jpg"
                alt="First slide"
                className="img-fluid"
                style={{ maxWidth: '100%', height: 'auto', display: 'block', marginLeft: 'auto' }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="slide2.jpg"
                alt="Second slide"
                className="img-fluid"
                style={{ maxWidth: '100%', height: 'auto', display: 'block', marginLeft: 'auto' }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="slide3.jpg"
                alt="Third slide"
                className="img-fluid"
                style={{ maxWidth: '100%', height: 'auto', display: 'block', marginLeft: 'auto' }}
              />
            </Carousel.Item>
          </Carousel>

          <div className="text-overlay container d-none d-md-block">
            <Row>
              <Col md={8}>
                <h6>INSPIRE DESIGN AGENCY</h6>
                <h2>Perfect Design</h2>
                <h2>for Your Interior</h2>
                <div className="d-flex align-items-center">
                  <input
                    type="checkbox"
                    className="btn-check"
                    id="btncheck1"
                    autoComplete="off"
                  />
                  <label className="btn " htmlFor="btncheck1" data-aos="zoom-in">Learn More</label>
                </div>
              </Col>
            </Row>
          </div>

          {/* Text Below for Small Screens */}
          <div className="text-below d-block d-md-none text-center mt-3">
            <h6>INSPIRE DESIGN AGENCY</h6>
            <h2>Perfect Design</h2>
            <h2>for Your Interior</h2>
            <div className="d-flex justify-content-center align-items-center">
              <input
                type="checkbox"
                className="btn-check"
                id="btncheck2"
                autoComplete="off"
              />
              <label className="btn " >Learn More</label>
            </div>
          </div>
          <div className="image-container">
            <img
              src="second.jpg" // Replace with your image path
              alt="Description of image"
              className="img-fluid" // Ensures the image is responsive
            />
            qwertyuiopkjhfdzxcvbnm
          </div>

          
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
