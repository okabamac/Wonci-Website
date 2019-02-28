import React, { Component } from 'react';
import cherish from '../images/cherish.jpg';
import pablo1 from '../images/pablo(1).jpg';
import pablo2 from '../images/pablo(2).jpg';
import pablo3 from '../images/pablo(3).jpg';
import pablo4 from '../images/pablo(4).jpg';
import pablo5 from '../images/pablo(5).jpg';
import pablo6 from '../images/pablo(6).jpg';

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
            <hr className="hr" />
            </div>
            <div className="wrapper">
    <div className="box item1"><img src={pablo1} alt='Image' /></div>
    <div className="box item2"><img src={pablo2} alt='Image' /></div>
    <div className="item3">
    <div className="box small-item1"><img src={cherish} alt='Image' /></div>
    <div className="box small-item2"><img src={pablo4} alt='Image' /></div>
    <div className="box small-item3"><img src={pablo5} alt='Image' /></div>
    <div className="box small-item4"><img src={pablo6} alt='Image' /></div>
    </div>
</div>
            </div>
        )
    }
}
export default Home;
