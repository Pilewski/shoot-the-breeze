import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { assert, expect } from 'chai';
let sinon = require('sinon');
const locus = require('locus');
import MessageField from '../lib/components/MessageField';

describe('MessageField', () => {

  it('renders as a <div> to contain all messages', () => {
    const wrapper = shallow(<MessageField />);
    assert.equal(wrapper.length, 1);
  });

  it ('will filter messages based on user input', () => {
    const wrapper = shallow(<MessageField />);
    console.log(wrapper.debug());
    wrapper.setState({userInput: "I love Tom Brady"});
    expect(wrapper.state('filteredMessages').length).to.equal(1)
  })
});
