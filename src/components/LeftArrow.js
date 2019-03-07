import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
const LeftArrow = (props) => {
  return (
    <div className="backArrow arrow" onClick={props.goToPrevSlide}>
      <i className="fa fa-arrow-left fa-2x" aria-hidden="true"></i>
    </div>
  );
}

export default LeftArrow;