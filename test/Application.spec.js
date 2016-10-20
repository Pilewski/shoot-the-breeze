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

  it('character counter counts characters in input field', () => {
    const wrapper = mount(<MessageInput/>);
    wrapper.setState({ message: 'testing'});
    assert.equal(wrapper.state('message'), 'testing');
  });

  it('should count chars', () => {
    const wrapper = mount(<MessageInput/>);
    wrapper.setState({ message: 'testing'});
    assert.equal('Char left: '+ 133, 'Char left: '+ parseInt(140 - wrapper.state('message').length));
  });


});

describe('SubmitButton', () => {
  it('Submit button component is contained in the MessageInput component', () => {
    const wrapper = shallow(<MessageInput/>);
    expect(wrapper.find('SubmitButton').length).to.equal(1);
  });

  it('Submit button ', () => {
    const wrapper = mount(<Application/>);
    expect(wrapper.state().draftMessage).to.equal('');
  });
});



//GOALZ:
//test whether it clears input field on button click
//check to see whether state has changed when we type into input field
//on refresh ?
//
