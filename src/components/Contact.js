import React, { Component } from 'react';
import MediaQuery from './MediaQuery';
import Footer from './Footer';
import 'font-awesome/css/font-awesome.min.css';
class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name: '',
        email: '',
        phone: '',
        event: '',
        date: '',
        location: '',
        message: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const name = target.name;
  this.setState({
      [name]: event.target.value
  });
  }

  handleSubmit(event) {
    alert('A name was submitted');
    event.preventDefault();
  }

  render() {
    return (
        <div>
        <MediaQuery>
        {({windowWidth}) =>
                   <div className='Container' style={{width: windowWidth>970 && '970px'}}>
                   <div className='contact' style={{top: windowWidth<=698 && '10px'}}>
                   <h2>Contact Us <i className='fa fa-envelope'></i></h2>
                    <form onSubmit={this.handleSubmit}>
                    <div>
                    <input type='text' name='name' value={this.state.name} onChange={this.handleChange} required />
                     <label for='name'>Name</label>
                   </div>
                   <div>
                  <input type='email' name='email' value={this.state.email} onChange={this.handleChange} required />
                   <label for='email'>Email</label>
                   </div>
                   <div>
                  <input type='text' name='phone' value={this.state.phone} onChange={this.handleChange} required/>
                  <label for='phone'>Phone Number</label>
                   </div>
                   <div>
                  <input type='text' name='event' value={this.state.event} onChange={this.handleChange} required/>
                   <label for='event'>Event</label>
                   </div>
                   <div>
                    <input type='text' name='date'  value={this.state.date} onChange={this.handleChange} required/>
                    <label for='date'>Date</label>
                   </div>
                    <div>
                    <input type='text' name='location' value={this.state.location} onChange={this.handleChange} required/>
                    <label for='location'>Location</label>
                   </div>
                   <div class='textarea'>
                   <textarea name='message' value={this.state.message} onChange={this.handleChange}></textarea>
                   <label for='message'>Message</label>
                   </div>
                   <div className='btn-div'>
                   <button type='submit'>Send</button>
                   </div>
      </form>
                   </div>
                   <Footer />
                   </div>
        }
        </MediaQuery>
      </div>
    );
  }
}
export default Contact;