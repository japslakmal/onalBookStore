import React from 'react'
import { Carousel } from 'react-bootstrap';

function Hero() {
    return (
        <div id="heroSection">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/img/back-to-school.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/img/factory_books_banner.jpg"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/img/book-day.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
export default Hero