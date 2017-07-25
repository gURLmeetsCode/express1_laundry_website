import React from 'react';

import Email from './MailingList'


export default class Footer extends React.Component{
  render(){
    return(
      <div className="site-footer">
          <a href="https://www.yelp.com/biz/express-1-laundromat-new-york-2"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Yelp_Logo.svg/1280px-Yelp_Logo.svg.png" className="social_icon"/></a>
        <div className="site-footer__text">
          <Email />
          <br />
          <p>33 Convent Ave New York, NY 10027</p>
          <p>Telephone: (212) 222 - 9931</p>
          <h4 className="footer--signature">Designs by <a href="https://www.linkedin.com/in/natashakelly1/">GMC</a></h4>
        </div>
      </div>
    )
  }
}
