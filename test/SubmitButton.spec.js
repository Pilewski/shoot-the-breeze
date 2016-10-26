import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { assert, expect } from 'chai';
let sinon = require('sinon');
const locus = require('locus');
import SubmitButton from '../lib/components/SubmitButton';

describe('SubmitButton', () => {
  it.skip('Submit button component is contained in the MessageInput component', () => {
    const wrapper = shallow(<MessageInput/>);
    expect(wrapper.find('SubmitButton').length).to.equal(1);
  });

  it.skip('state of application component draftMessage is set to an empty string', () => {
    const wrapper = mount(<Application/>);
    expect(wrapper.state().draftMessage).to.equal('');
  });

  it.skip ('can be clicked, like WHOA', () => {
    const onButtonClick = sinon.spy();
    const wrapper = shallow(<SubmitButton onButtonClick={onButtonClick} addNewMessage={function(){}} />);
      console.log(wrapper.debug())
    wrapper.setProps({message: 'a'})
    console.log(wrapper.debug())
    wrapper.find('button').simulate('click');
    expect(onButtonClick).to.have.property('callCount', 1)
  });

  it.skip('will be disabled if message.length is zero, like WHOA', () => {
    const wrapper = shallow(<SubmitButton addNewMessage={function(){}} />)
    wrapper.setProps({message: ''})
    console.log(wrapper.debug())
    expect(wrapper.find('button').attribs('disabled')).to.be.true;

  });
});
