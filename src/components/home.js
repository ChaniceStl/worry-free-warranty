import React, { Component } from 'react';
import Line from 'rc-progress';

require('../style/style.css')


export default class Home extends Component {
  render() {
    return (
      <div className='home-container'>

        <div className='logo-container'>
          // <img alt="ollie logo"/>
        </div>

        <div className='special-offer'>
          <div className='special-offer-content'>
            <p className='special-offer-text'>50% OFF your meal plan will be applied at checkout</p>
          </div>
        </div>

        <Line percent="10" strokeWidth="4" strokeColor="#D3D3D3" />

      </div>
    )
  }
}
