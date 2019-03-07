import React from 'react'
import MediaQuery from './MediaQuery';
import Footer from './Footer';
import Toggle from './Toggle';
import header from '../images/header.svg';
import {
  NavLink
} from 'react-router-dom';
const Hero = () => (
    <div>
        <MediaQuery>
        {({windowWidth, position}) =>
              <div>
                      <Toggle>
                        {({on, toggle}) => (
                        <div>
                          <header>
                        <div classsName='header-div' style={{width: windowWidth>970 && '970px', margin: 'auto'}}>
                        <p style={{paddingLeft: windowWidth<970 && '1em'}}>Bee's Treats</p>
                        <div onClick={toggle} className={"hamburger-icon "+ (on && 'close')} id={"" + (windowWidth >970 && "hide")}>
                        <div className="btn-line line-1"></div>
                        <div className="btn-line line-2"></div>
                        <div className="btn-line line-3"></div>
                        </div>
                  </div>
              </header>
              <div className='Navigation'>
                   <nav style={{width: windowWidth>970 && '970px', height: windowWidth>970 && '100px'}}>
            <ul  className={" " + (windowWidth >970? 'horizontal '+(position>30 && 'show-horizontal') : 'vertical')} id={""+(on && "open")}>
            <li><NavLink exact to='/' activeStyle={{ borderBottom: '3px solid #0EB3CE', borderTop: '3px solid #0EB3CE' }}>Home</NavLink></li >
            <li><NavLink exact to='/gallery' activeStyle={{ borderBottom: '3px solid #0EB3CE', borderTop: '3px solid #0EB3CE' }}>Gallery</NavLink></li>
            <li><NavLink exact to='/press' activeStyle={{ borderBottom: '3px solid #0EB3CE', borderTop: '3px solid #0EB3CE' }}>Press</NavLink></li>
            <li><NavLink exact to='/contact' activeStyle={{ borderBottom: '3px solid #0EB3CE', borderTop: '3px solid #0EB3CE' }}>Contact</NavLink></li>
         </ul>
       </nav>
       </div>
              <div className='header-image' style={{top: windowWidth <= 698 && '57px' }}>
                <img src={header} alt='Dripping chocolate' className='chocolate' style={{ width: windowWidth <= 970 && '120vw', top: windowWidth <= 970 && '-15%' }} />
              </div> 
      </div>
                      )} 
                        </Toggle>                  
                  </div>
          }
        </MediaQuery>
    </div>
)
export default Hero;
