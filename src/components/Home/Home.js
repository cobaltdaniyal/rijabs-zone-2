import React, { Component } from 'react';
import './Home.css';
import Navbar from '../Navbar/Navbar';
import { Carousel } from 'react-bootstrap';
import slider1 from '../../assets/images/slider1.jpg'
import slider2 from '../../assets/images/slider2.jpg'
import slider3 from '../../assets/images/slider3.jpg'
import slider4 from '../../assets/images/slider4.jpg'
import Category from '../Category/Category';
import Shop from '../Shop/Shop';

class Home extends Component {
    render() {
        return (
            <div>
                <Navbar />

                {/* <<<<<<<<<<<<<<<<<<<<<<<<<< CAROUSEL START >>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
                <div className='carouselMain'>
                    <Carousel prevIcon nextIcon>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={slider1}
                                alt="First slide"
                            />
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={slider2}
                                alt="Second slide"
                            />
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={slider3}
                                alt="Third slide"
                            />
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={slider4}
                                alt="Third slide"
                            />
                        </Carousel.Item>

                    </Carousel>
                </div>
                {/* <<<<<<<<<<<<<<<<<<<<<<<<<< CAROUSEL END >>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
                <>
                    <Category />
                    <Shop />
                </>


            </div>
        )
    }
}
export default Home;