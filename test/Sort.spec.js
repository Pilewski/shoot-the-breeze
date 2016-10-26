import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { assert, expect } from 'chai';
let sinon = require('sinon');
const locus = require('locus');
import Sort from '../lib/components/Sort';
import MessageField from '../lib/components/MessageField'

describe('Sort', () => {
  it('Should set the state of the wrapper component of true', () => {
    const wrapper = mount(<MessageField/>);
    wrapper.state({ filteredMessages: ['yolo','beans']});
    wrapper.find('.sort-up').simulate('click');
    expect(wrapper.state().reversed).to.equal(true);
  })
  it('Should set the state of the wrapper component of false', () => {
    const wrapper = mount(<MessageField/>);
    console.log(wrapper.debug())
    wrapper.find('.sort-up').simulate('click');
    wrapper.find('.sort-down').simulate('click');
    console.log(wrapper.debug())
    expect(wrapper.state().reversed).to.equal(false);
  })
  it.skip('should have toggleSort props', () => {

  } )
})
