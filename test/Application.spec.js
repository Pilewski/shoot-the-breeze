import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { assert, expect } from 'chai';
let sinon = require('sinon');
const locus = require('locus');

import Application from '../lib/components/Application';
import SearchInput from '../lib/components/SearchInput';
import MessageField from '../lib/components/MessageField';
import SubmitButton from '../lib/components/SubmitButton';


describe('Application', () => {

  it('renders as a <div>', () => {
    const wrapper = shallow(<Application />);
    assert.equal(wrapper.type(), 'div');
  });

  it('should have a default messages state of []', () => {
    const wrapper = mount(<Application />);
    expect(wrapper.state().messages).to.be.empty;
  })

  it.skip('')


});
