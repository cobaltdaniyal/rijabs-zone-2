import React, { Component } from 'react';
import './Home.css';
import Navbar from '../Navbar/Navbar';
import { Carousel } from 'react-bootstrap';

class Home extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className='carouselMain'>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://i.ytimg.com/vi/go89e8xpVYs/maxresdefault.jpg"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://www.thesprucecrafts.com/thmb/iLiJofm6fgoH1cME7PSH2UDyo4w=/1339x1339/smart/filters:no_upscale()/15Stitches-587161e53df78c17b6e270e8.jpg"
                                alt="Second slide"
                            />

                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://gulahmed.com/wp/wp-content/uploads/2016/03/3.jpg"
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        )
    }
}
export default Home;