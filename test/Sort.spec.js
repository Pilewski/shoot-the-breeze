import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { assert, expect } from 'chai';
import Sort from '../lib/components/Sort';
import MessageField from '../lib/components/MessageField'
let sinon = require('sinon');
const locus = require('locus');

describe('Sort', () => {
  it('Should set the state of the wrapper component of true', () => {
    const wrapper = mount(<MessageField/>);
    wrapper.state({ filteredMessages: ['yolo','beans']});
    wrapper.find('#sortUpBtn').simulate('click');
    expect(wrapper.state().reversed).to.equal(true);
  })
  it('Should set the state of the wrapper component of false', () => {
    const wrapper = mount(<MessageField/>);
    wrapper.find('#sortUpBtn').simulate('click');
    wrapper.find('#sortDownBtn').simulate('click');
    expect(wrapper.state().reversed).to.equal(false);
  })
  // it.skip('should have sort props', () => {
  //   const wrapper = shallow(<MessageField/>);
  //   const sortUp = wrapper.find('#sortUpBtn')
  //   expect(sortUp.props().sort.to.equal({this.toggleSort.bind(this)})
  // })
})
