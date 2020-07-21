import React from 'react'
import { Container } from 'semantic-ui-react';
import { Container as BootstrapContainer, Card, Row, Col } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from "react-slick";
import './bodyPart.css'

const numberOfPicture = [1, 2, 3, 4, 5, 6];

const Product = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    };
    return (
        <Container>
            <div className="header-wrapper">
                <header id="productHeader">
                    <h1>Designer Cakes Delivered to Your Doorstep
                </h1>
                    <h2><b>All cakes are tailored to your taste and style</b></h2>
                </header>
            </div>
            <div id='productList'>
                <Slider {...settings} >
                    {numberOfPicture.map((picture, index) => (
                        <div key={index} id="productLionel">
                            <Col>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img
                                        variant="top"
                                        src={`assets/cakes/cake-${picture}.jpg`}
                                    />
                                </Card>
                            </Col>
                        </div>

                    ))}
                </Slider>
            </div>
        </Container>



    );
}

export default Product

