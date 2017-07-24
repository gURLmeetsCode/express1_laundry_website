import React from 'react';



export default class Footer extends React.Component{
  render(){
    return(
      <div className="site-footer">
          <a href="https://www.yelp.com/biz/express-1-laundromat-new-york-2"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Yelp_Logo.svg/1280px-Yelp_Logo.svg.png" className="social_icon"/></a>
        <div className="site-footer__text">
          <p>33 Convent Ave New York, NY 10027</p>
          <iframe src="http://maps.google.com/maps?q=40.814050,-73.952939&z=15&output=embed"></iframe>
          <p>Telephone: (212) 222 - 9931</p>
        </div>
      </div>
    )
  }
}
