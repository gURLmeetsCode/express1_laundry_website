import React from 'react';


export default class Parallax extends React.Component {
    render() {
      return (
        <div className="parallax">
          <div className="parallax--inner">
            <div className="parallax__text-content">
              <h1 className="parallax__title">Express 1 Laundromat</h1>
              <h2 className="parallax__subtitle">Proud to serve the Harlem Community</h2>
              <p><a href="https://www.yelp.com/biz/express-1-laundromat-new-york-2" className="btn btn--small">Find Us on Yelp</a></p>
            </div>
          </div>
       </div>
      );
    }
  }
