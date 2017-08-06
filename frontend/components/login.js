import React, { Component } from 'react';
import Signup from './signup'
export default class Login extends Component {
  // constructor(props){
  //   super(props);
  // }

  render(){
    return(
      <div className='login_container'>
        <div className='login_companyLogo'>
          <img alt="LOGO GOES HERE" height="50px" width="150px"/>
        </div>
        <div className='login_textbox'>
          <input type='text' placeholder='Username'/>
          <input type='text' placeholder='Password'/>
        </div>
        <div className='login_buttons'>
          <Signup />
          <input type='button' className='btn btn-primary btn-lg' value='Login'/>
          <p>Forgot password?</p>
        </div>
      </div>
    )
  }
}
