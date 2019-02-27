import React, { Component } from 'react';

class MediaQuery extends Component {
  constructor(props){
    super(props);
    this.state = {
      windowWidth: window.innerWidth
    };
    this.updateState = this.updateState.bind(this);
  }
  updateState(e){
    this.setState({
      windowWidth: window.innerWidth
    });
  }
componentDidMount (){
    window.addEventListener('resize', this.updateState);
}
componentWillUnmount(){
    window.removeEventListener('resize', this.updateState);
}
  render() {
    return (
      <div>
        {this.props.children(this.state.windowWidth)}
      </div>
    )
  }
}
export default MediaQuery;