import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { assert, expect } from 'chai';
let sinon = require('sinon');
const locus = require('locus');
import MessageInput from '../lib/components/MessageInput';

describe('MessageInput', () => {

  it('renders as a <span>', () => {
    const wrapper = shallow(<MessageInput />)
    assert.equal(wrapper.type(), 'span');
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

  it('should have an message input field', () => {
    const wrapper = shallow(<MessageInput />);
    expect(wrapper.find('input')).to.have.length(1);
  });
});
