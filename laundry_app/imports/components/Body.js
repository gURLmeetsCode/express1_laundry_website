import React from 'react';

import Email from './MailingList';
import Features from './Features';
import Welcome from './Welcome';



export default class Body extends React.Component{
  render(){
    return(
      <div className="wrapper">
        <Welcome />
        <Features />
      </div>
    )
  }
}
