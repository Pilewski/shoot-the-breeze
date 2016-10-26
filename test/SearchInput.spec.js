import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { assert, expect } from 'chai';
import SearchInput from '../lib/components/SearchInput'
let sinon = require('sinon');
const locus = require('locus');


describe('SearchInput', () => {
  it('Should render as an input', () => {
    const wrapper = shallow(<SearchInput/>);
    wrapper.find('input');
    expect(wrapper.length).to.equal(1);
  })


});
