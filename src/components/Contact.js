import React from 'react';
import MediaQuery from './MediaQuery';
const Contact = () => (
      <div>
        <MediaQuery>
        {({windowWidth}) =>
              <div>
                   <div className='Container' style={{width: windowWidth>970 && '970px'}}>
                   </div>
                   </div>
        }
        </MediaQuery>
      </div>
    )
export default Contact;