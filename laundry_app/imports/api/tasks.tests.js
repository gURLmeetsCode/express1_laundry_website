import { Meteor } from 'meteor/meteor';
import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import { expect } from 'meteor/practicalmeteor:chai';
import Features from '../components/Features.js';
import Maps from '../components/Maps.js';
import Places from '../components/Places.js';


import { mount } from 'enzyme';



describe('<Features />', () => {
  it('allows us to set props', () => {
    const wrapper = mount(<Features bar="baz" />);
    expect(wrapper.props().bar).to.equal('baz');
    wrapper.setProps({ bar: 'foo' });
    expect(wrapper.props().bar).to.equal('foo');
  });
});


// check to see if external component loaded
describe('<Maps />', () => {
  it('renders one <Features /> components', () => {
    const wrapper = shallow(<Maps />);
    expect(wrapper.find(Features)).to.have.length(1);
  });
});

// check to see if google data updated state.
describe('<Places />', () => {
  it('calls componentDidMount', () => {
    sinon.spy(Places.prototype, 'componentDidMount');
    const wrapper = mount(<Places />);
    expect(Places.prototype.componentDidMount).to.have.property('callCount', 1);
  });
});
