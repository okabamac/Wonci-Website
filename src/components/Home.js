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

<div className='about' style={{gridTemplateColumns: this.props.width <=970 && '1fr', padding: this.props.width<=600 && '1.4rem'}}>
< div className = 'vl'
style = {
    {
        borderBottom: this.props.width <= 970 && '2px solid #664840',
        borderRight: this.props.width <= 970 && 'none'
    }
} >
<h3>About Us</h3>
<p>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry 's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
    </p>
    </div>
<div>
    <h3>We Deliver</h3>
    <div class='services'>
     <span>
            <i class="material-icons">
                flip_to_front
            </i>
            </span>
           < span className = "drop-cap" >
                ktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
         </span>
    </div>
    <div class='services'>
     <span>
            <i class="material-icons">
                flip_to_front
            </i>
            </span>
            < span className = "drop-cap" >
                ktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
         </span>
    </div>
    <div class='services'>
     <span>
            <i class="material-icons">
                flip_to_front
            </i>
            </span>
            < span className ="drop-cap">
                ktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
         </span>
    </div>
    <div class='services'>
     <span>
            <i class="material-icons">
                flip_to_front
            </i>
            </span>
            < span className = "drop-cap" >
                ktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
         </span>
    </div>
</div>
</div>
            </div>
        )
    }
}
export default Home;
