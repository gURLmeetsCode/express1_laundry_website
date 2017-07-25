import React from 'react';

import Features from './Features';



export default class Maps extends React.Component{

  render(){
    return(
      <div className="wrapper">
      <iframe style={{width: "750px", height: '630px'}} src="http://maps.google.com/maps?q=40.814050,-73.952939&z=15&output=embed"></iframe>
      <Features />
      </div>
    )
  }
}

// iframe is not showing up after deployment
