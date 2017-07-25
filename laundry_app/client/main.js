import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Participants} from './../imports/api/participants';
import {Tracker} from 'meteor/tracker';

import Footer from './../imports/components/Footer';
import Parallax from './../imports/components/Parallax';
import Maps from './../imports/components/Maps';
import Reviews from './../imports/components/Places';
import Welcome from './../imports/components/Welcome';






Meteor.startup(() => {
  Tracker.autorun(() => {
      let jsx = (
      <div>
        <Parallax />
        <Welcome />
        <Maps />
        <Reviews />
        <Footer />
      </div>
    )
    ReactDOM.render(jsx, document.getElementById('app'));
  })
})
