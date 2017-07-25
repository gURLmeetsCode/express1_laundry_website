import React from 'react';

import Features from './Features';



export default class Maps extends React.Component{

  render(){
    return(
      <div className="wrapper">
      <iframe style={{width: "750px", height: '630px'}} src="//www.google.com/maps/embed/v1/place?q=express%201%20laundromat&zoom=17&key=AIzaSyBjfPM9u_Ui_HlX92z-Kfc07XNIshYdK3Q"></iframe>
      <Features />
      </div>
    )
  }
}

// iframe is not showing up after deployment
