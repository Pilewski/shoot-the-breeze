import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { assert, expect } from 'chai';
let sinon = require('sinon');
const locus = require('locus');
import MessageField from '../lib/components/MessageField';

describe('MessageField', () => {

  it('renders as a <div> to contain all messages', () => {
    const wrapper = mount(<MessageField />);
    rapper.setProps( { messages: [{ user: { dislayName: "Alex Pilewski", email: "yahoo@yahoo.com", uid: 4200}, content:"I really love Tom Brady" }, { user: { displayName: "Nick Chambers", email: "terrific@awesomemail.com", uid: 100}, content: "I do, too, Alex. Glad we can agree"} ] } );
    wrapper.setState( { filteredMessages: [{ user: { dislayName: "Alex Pilewski", email: "yahoo@yahoo.com", uid: 4200}, content:"I really love Tom Brady" }]);
    assert.equal(wrapper.length, 1);
  });

  it ('will filter messages based on user input', () => {
    const wrapper = mount(<MessageField />);
    wrapper.setProps( { messages: [{ user: { dislayName: "Alex Pilewski", email: "yahoo@yahoo.com", uid: 4200}, content:"I really love Tom Brady" }, { user: { displayName: "Nick Chambers", email: "terrific@awesomemail.com", uid: 100}, content: "I do, too, Alex. Glad we can agree"} ] } );
    wrapper.setState({userInput: "I love Tom Brady"});
    expect(wrapper.state('filteredMessages').length).to.equal(1)
  })
});
