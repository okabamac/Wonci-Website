import React from 'react';
import MediaQuery from './MediaQuery';
import Footer from './Footer';
const Press = () => {
    return (
        <div>
         <MediaQuery>
        {({windowWidth}) =>
              
                   <div className='Container' style={{width: windowWidth>970 && '970px'}}>
                   <div className='content'>
    <div className='timeline-item' dateIs='20-07-1990'>
    <h3>hello, my name is j sss sssss</h3>
    <p>lorem ips i sssooos soosn o pppf fppfff iiif oof oofoffof
        lorem ips i sssooos soosn o pppf fppfff iiif oof oofoffof
        lorem ips i sssooos soosn o pppf fppfff iiif oof oofoffof
        lorem ips i sssooos soosn o pppf fppfff iiif oof oofoffof
    </p>
    </div>
    <div className='timeline-item' dateIs='20-07-1990'>
    <h3>hello, my name is j sss sssss</h3>
    <p>lorem ips i sssooos soosn o pppf fppfff iiif oof oofoffof
        lorem ips i sssooos soosn o pppf fppfff iiif oof oofoffof
        lorem ips i sssooos soosn o pppf fppfff iiif oof oofoffof
        lorem ips i sssooos soosn o pppf fppfff iiif oof oofoffof
    </p>
    </div>
    <div className='timeline-item' dateIs='20-07-1990'>
    <h3>hello, my name is j sss sssss</h3>
    <p>lorem ips i sssooos soosn o pppf fppfff iiif oof oofoffof
        lorem ips i sssooos soosn o pppf fppfff iiif oof oofoffof
        lorem ips i sssooos soosn o pppf fppfff iiif oof oofoffof
        lorem ips i sssooos soosn o pppf fppfff iiif oof oofoffof
    </p>
    </div>
    <div className='timeline-item' dateIs='20-07-1990'>
    <h3>hello, my name is j sss sssss</h3>
    <p>lorem ips i sssooos soosn o pppf fppfff iiif oof oofoffof
        lorem ips i sssooos soosn o pppf fppfff iiif oof oofoffof
        lorem ips i sssooos soosn o pppf fppfff iiif oof oofoffof
        lorem ips i sssooos soosn o pppf fppfff iiif oof oofoffof
    </p>
    </div>
    </div>
    

                    < Footer />
                   </div>
                   
        }
        </MediaQuery>
    </div>
    )
}

export default Press;