import React from 'react';

import { shallow, mount, render } from 'enzyme';
import { assert, expect } from 'chai';

import Application from '../lib/components/Application';
import MessageInput from '../lib/components/MessageInput';

describe('Application', () => {

  it('renders as a <div>', () => {
    const wrapper = shallow(<Application />)
    assert.equal(wrapper.type(), 'div');
  });

  it('should have an message input field', () => {
    const wrapper = shallow(<MessageInput />);
    expect(wrapper.find('input')).to.have.length(1);
  });
});

describe('MessageInput', () => {

  it('renders as a <div>', () => {
    const wrapper = shallow(<MessageInput />)
    assert.equal(wrapper.type(), 'div');
  });

  it('has a getMessage prop', () => {
    const wrapper = mount(<MessageInput/>);
    expect(wrapper.props().getMessage).to.be.defined;
  });


});



//GOALZ:
//test whether it clears input field on button click
//check to see whether state has changed when we type into input field
//on refresh ?
//
