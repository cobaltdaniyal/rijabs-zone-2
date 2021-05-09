import React, { Component } from 'react';
import './Category.css';
import { Card } from 'react-bootstrap';


class Category extends Component {
    render() {
        return (
            <div className='categoryMain'>
                <h1 className='mainHeading'>Categories</h1>
                <div className='categorySection'>
                    <Card className='cat' body>Men's Fashion</Card>
                    <Card className='cat' body>Men's Watches</Card>
                    <Card className='cat' body>Men's Wallet</Card>
                    <Card className='cat' body>Men's Rings</Card>
                    <Card className='cat' body>Men's Accessories</Card>
                    <Card className='cat' body>Women's Fashion</Card>
                    <Card className='cat' body>Women's Watches</Card>
                    <Card className='cat' body>Women's Bags</Card>
                    <Card className='cat' body>Women's Jwellery</Card>
                    <Card className='cat' body>Women's Accessories</Card>
                    <Card className='cat' body>Babies's Fashion</Card>
                    <Card className='cat' body>Babies's Accessories</Card>
                    <Card className='cat' body>Babies's Toys</Card>
                </div>
            </div>
        )
    }
}
export default Category;