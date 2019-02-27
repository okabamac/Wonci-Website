import React, { Component } from 'react';
import caramel from '../images/chocolatedrip.svg';

class Home extends Component {
    constructor(props) {
        super(props);
    }
    render(){
        return (
            <div className='Home' style={{width: this.props.width>970 && '970px'}}>
            <div className='title'>
            <h2>Bee's Treats</h2>
            <p>We speak standard</p>
            </div>
            <div className='home-cake'>
            
            </div>
            </div>
        )
    }
}
export default Home;
