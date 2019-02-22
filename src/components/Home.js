import React, { Component } from 'react';
import drippingChocolate from '../images/chocolatedrip.svg';

export default class Home extends Component {
    constructor(props) {
        super(props);
    }
    render(){
        return (
            <div className='Home'>
            <div className='chocolate'>
            <img src={drippingChocolate} alt='Dripping Chocolate'/>
            </div>
            <div className='content'>
            <h1>Bee's Treats</h1>
            </div>
            </div>
        )
    }
}
