import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Participants} from './../imports/api/participants';
import {Tracker} from 'meteor/tracker';



import Footer from './../imports/components/Footer';
import Header from './../imports/components/Header';
import Parallax from './../imports/components/Parallax';
import Body from './../imports/components/Body';
import Maps from './../imports/components/Map';






Meteor.startup(() => {
  Tracker.autorun(() => {
      let jsx = (
      <div>
        <Parallax />
        <Body />
        <Maps
        containerElement={<div style={{ height: 100+'%' }} />}
        mapElement={<div style={{ height: 100+'%'}} />} 
        />
        <Footer />
      </div>
    )
    ReactDOM.render(jsx, document.getElementById('app'));
  })
})
