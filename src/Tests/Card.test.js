/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import Card from '../Components/Card';
import {shallow, mount} from 'enzyme'
import DistrictRepository from '../Helpers/helper'
import kinderData from '../../data/kindergartners_in_full_day_program.js';


describe('Individual Card', () =>{
  const schoolsData = new DistrictRepository(kinderData)
  const selectedArray = ['ACADEMY 20, Colorado']

  it('renders without crashing', () => {
    var mockFn = jest.fn()

    const div = document.createElement('div');
    ReactDOM.render(<Card location = {mockFn}
                          data = {mockFn}
                          schools = {schoolsData}
                          cardClick = {mockFn}
                          id = {1}
                          selected = {selectedArray}/>, div);
  });

  it('should render location info on a card', () =>{
    var mockFn = jest.fn()
    const wrapper = shallow(<Card location = {mockFn}
                          data = {mockFn}
                          schools = {schoolsData}
                          cardClick = {mockFn}
                          id = {1}
                          selected = {selectedArray}/>);
    const found = wrapper.find('h3')
    expect(found.length).toEqual(1);

  })

  it('should render location info on a card', () =>{
    var mockFn = jest.fn()
    const wrapper = shallow(<Card location = {mockFn}
                          data = {mockFn}
                          schools = {schoolsData}
                          cardClick = {mockFn}
                          id = {1}
                          selected = {selectedArray}/>);
    const foundP = wrapper.find('p')
    const foundDiv = wrapper.find('div')
    expect(foundP.length).toEqual(10);
    expect(foundDiv.length).toEqual(10);

  })
});
