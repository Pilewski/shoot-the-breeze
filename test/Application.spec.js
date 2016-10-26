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
    const wrapper = shallow(<Application />)
    assert.equal(wrapper.type(), 'div');
  });

  
});





//GOALZ:
//test whether it clears input field on button click
//check to see whether state has changed when we type into input field
//on refresh ?
//
