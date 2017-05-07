/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import Card from '../Components/Card';
import {shallow, mount} from 'enzyme'
import DistrictRepository from '../Helpers/helper'
import kinderData from '../../data/kindergartners_in_full_day_program.js';


describe('Individual Card', () =>{
  const schoolsData = new DistrictRepository(kinderData)
  const selectedArray = ['ACADEMY 20', 'Colorado']

  it('renders without crashing', () => {
    var mockFn = jest.fn()
    let data = { '2004': 0.24,
        '2005': 0.278,
        '2006': 0.337,
        '2007': 0.395,
        '2008': 0.536,
        '2009': 0.598,
        '2010': 0.64,
        '2011': 0.672,
        '2012': 0.695,
        '2013': 0.703,
        '2014': 0.741 }

    const div = document.createElement('div');
    ReactDOM.render(<Card location = {'Colorado'}
                          data = {data}
                          schools = {schoolsData}
                          cardClick = {mockFn}
                          id = {"1"}
                          selected = {selectedArray}/>, div);
  });

  it('should render location info on a card', () =>{
    var mockFn = jest.fn()
    let data = { '2004': 0.24,
        '2005': 0.278,
        '2006': 0.337,
        '2007': 0.395,
        '2008': 0.536,
        '2009': 0.598,
        '2010': 0.64,
        '2011': 0.672,
        '2012': 0.695,
        '2013': 0.703,
        '2014': 0.741 }

    const wrapper = shallow(<Card location = {'Colorado'}
                          data = {data}
                          schools = {schoolsData}
                          cardClick = {mockFn}
                          id = {"1"}
                          selected = {selectedArray}/>);
    const found = wrapper.find('h3')
    expect(found.length).toEqual(1);

  })

  it('should render location info on a card', () =>{
    var mockFn = jest.fn()
    let data = { '2004': 0.24,
        '2005': 0.278,
        '2006': 0.337,
        '2007': 0.395,
        '2008': 0.536,
        '2009': 0.598,
        '2010': 0.64,
        '2011': 0.672,
        '2012': 0.695,
        '2013': 0.703,
        '2014': 0.741 }

    const wrapper = shallow(<Card location = {'Colorado'}
                          data = {data}
                          schools = {schoolsData}
                          cardClick = {mockFn}
                          id = {"1"}
                          selected = {selectedArray}/>);
    const foundP = wrapper.find('p')
    const foundDiv = wrapper.find('div')
    expect(foundP.length).toEqual(11);
    expect(foundDiv.length).toEqual(13);

  })
});
